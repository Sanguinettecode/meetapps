import sharp from 'sharp';
import fs from 'fs';

const compressImage = (file, size) => {
  const newPath = `${file.path.split('.')[0]}.webp`;

  return sharp(file.path)
    .resize(size)
    .toFormat('webp')
    .webp({
      quality: 100,
    })
    .toBuffer()
    .then(data => {
      fs.access(file.path, err => {
        if (!err) {
          fs.unlink(file.path, error => {
            if (error) throw error;
          });
        }
      });
      fs.writeFile(newPath, data, err => {
        if (err) {
          throw err;
        }
      });
      return newPath;
    });
};

export default compressImage;
