import { extname } from 'path';
import File from '../models/File';
import fileHelper from '../../middlewares/fileHelper';

class FileController {
  async store(req, res) {
    const { originalname, filename } = req.file;
    const { type } = req.params;
    fileHelper(req.file, 100).then(async newPath => {
      const { id, name, path, url } = await File.create({
        name: originalname,
        path: filename.split('.')[0] + extname(newPath),
        type,
      });
      return res.json({ id, name, path, url });
    });
  }
}

export default new FileController();
