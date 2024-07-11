const userModel = require('../models/UserModel');
const { generateToken } = require('../utils/jwtoken');
const bcrypt = require('bcrypt');

exports.registerUser = async (req, res) => {
  const { email, username, password } = req.body;

  try {
    // Vérifier si l'utilisateur existe déjà
    let user = await userModel.findOne({ $or: [{ email }, { username }] });

    if (user) {
      return res.status(400).send('User already exists');
    }

    // Hasher le mot de passe
    const hashedPassword = await bcrypt.hash(password, 10);

    // Créer un nouvel utilisateur
    const newUser = new userModel({
      email,
      username,
      password: hashedPassword
    });

    // Enregistrer l'utilisateur dans la base de données
    await newUser.save();

    // Générer un token JWT pour l'utilisateur
    const jwToken = generateToken(newUser);

    // Répondre avec les détails de l'utilisateur et le token JWT
    res.status(201).json({
      message: 'User created',
      user: newUser,
      token: jwToken
    });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).send('Error registering user');
  }
};

exports.loginUser = async (req, res) =>
{
   const { email, password } = req.body;

   try {
    // Vérifier si l'utilisateur existe
    let user = await userModel.findOne({ email });

    if (!user) {
      return res.status(400).send('User not found');
    }
    // Vérifier si le mot de passe est correct
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(400).send('Invalid password');
    }
    // Générer un token JWT pour l'utilisateur
    const jwToken = generateToken(user);
    // Répondre avec les détails de l'utilisateur et le token JWT
    res.status(200).json({
      message : 'Login successful',
      user,
      token: jwToken
    });

   }catch (error) {
    console.error('Error logging in user:', error);
    res.status(500).send('Error logging in user');
  }

}
