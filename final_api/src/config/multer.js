import multer from 'multer';
import crypto from 'crypto';
import fs from 'fs-extra';
import { resolve, extname } from 'path';

export default {
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      const path = resolve(__dirname, '..', '..', 'temp', 'uploads');
      fs.mkdirsSync(path);
      cb(null, path);
    },
    filename: (req, file, cb) => {
      crypto.randomBytes(16, (err, res) => {
        if (err) {
          return cb(err);
        }
        try {
          return cb(null, res.toString('hex') + extname(file.originalname));
        } catch (error) {
          return cb(error);
        }
      });
    },
  }),
  fileFilter: (req, file, cb) => {
    const isAccepted = ['image/png', 'image/jpg', 'image/jpeg'].find(
      formatoAceito => formatoAceito === file.mimetype
    );
    if (isAccepted) {
      return cb(null, true);
    }

    return cb(null, false);
  },
};
