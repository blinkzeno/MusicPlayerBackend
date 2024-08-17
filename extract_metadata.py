import sys
import json
import os
from mutagen.id3 import ID3, ID3NoHeaderError, APIC
from mutagen.mp4 import MP4
from mutagen.mp3 import MP3  # Importer MP3 pour la durée

def get_audio_metadata(file_path):
    try:
        # Extraire le nom de base du fichier sans l'extension
        base_name = os.path.splitext(os.path.basename(file_path))[0]

        # Dossier pour enregistrer les couvertures
        cover_dir = 'uploads/covers'
        if not os.path.exists(cover_dir):
            os.makedirs(cover_dir)

        metadata = {
            'title': 'Unknown',
            'artist': 'Unknown',
            'album': 'Unknown',
            'genre': 'Unknown',
            'duration': 'Unknown',
            'cover_url': None
        }

        if file_path.endswith('.mp3'):
            try:
                tags = ID3(file_path)
                metadata['title'] = tags.get('TIT2', ['Unknown'])[0]
                metadata['artist'] = tags.get('TPE1', ['Unknown'])[0]
                metadata['album'] = tags.get('TALB', ['Unknown'])[0]
                metadata['genre'] = tags.get('TCON', ['Unknown'])[0]

                # Récupération de la durée
                audio = MP3(file_path)
                duration = audio.info.length  # Durée en secondes
                metadata['duration'] = str(int(duration))  # Convertir en secondes entières

                # Récupération de la couverture
                for tag in tags.values():
                    if isinstance(tag, APIC):
                        cover_data = tag.data
                        cover_filename = os.path.join(cover_dir, f'{base_name}.jpg')  # Nom du fichier de couverture
                        with open(cover_filename, 'wb') as cover_file:
                            cover_file.write(cover_data)
                        metadata['cover_url'] = cover_filename

            except ID3NoHeaderError:
                print(f"Warning: No ID3 header found in '{file_path}'", file=sys.stderr)

        elif file_path.endswith('.m4a'):
            tags = MP4(file_path)
            metadata['title'] = tags.get('\xa9nam', ['Unknown'])[0]
            metadata['artist'] = tags.get('\xa9ART', ['Unknown'])[0]
            metadata['album'] = tags.get('\xa9alb', ['Unknown'])[0]
            metadata['genre'] = tags.get('\xa9gen', ['Unknown'])[0]
            metadata['duration'] = str(int(tags.info.length)) if tags.info else 'Unknown'

            # Récupération de la couverture
            if 'covr' in tags:
                cover_data = tags['covr'][0]
                cover_filename = os.path.join(cover_dir, f'{base_name}.jpg')  # Nom du fichier de couverture
                with open(cover_filename, 'wb') as cover_file:
                    cover_file.write(cover_data)
                metadata['cover_url'] = cover_filename

        return metadata

    except Exception as e:
        print(f"Error: {e}", file=sys.stderr)
        sys.exit(1)

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python extract_metadata.py <file_path>", file=sys.stderr)
        sys.exit(1)
    
    file_path = sys.argv[1]
    if not os.path.isfile(file_path):
        print(f"Error: File '{file_path}' does not exist.", file=sys.stderr)
        sys.exit(1)
    
    metadata = get_audio_metadata(file_path)
    print(json.dumps(metadata))
