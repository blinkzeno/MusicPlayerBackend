const { readID3Tags } = require("read-id3-tags");
const path = require("path");
const slugify = require("slugify");
const fs = require("fs-extra");

exports.getMusicMetadata = async (filePath) => {
  return await readID3Tags(filePath)
    .then(async (data) => {
      const { title, artist, album, genre, picture, duration } = data;

      let coverFileName = null;
      if (picture && picture.length > 0) {
        const coverDir = path.join("./uploads", "covers");
        await fs.ensureDir(coverDir);

        const slugifiedTitle = slugify(title || "unknown", {
          lower: true,
          strict: true,
        });
        const coverPath = path.join(
          coverDir,
          `${slugifiedTitle}.${picture[0].format}`
        );
        await fs.writeFile(coverPath, picture[0].data);
        coverFileName = coverPath;
      }
      return {
        title: title || "Unknown",
        artist: artist || ["Unknown"],
        album: album || "Unknown",
        genre: genre || ["Unknown"],
        duration: duration || "Unknown",
        fileUrl: filePath,
        coverUrl: coverFileName,
      };
    })
    .catch((err) => {
      throw err;
    });
};
