import multer from 'multer';
import crypto from 'crypto';
import path from 'path';

const storage = multer.diskStorage({
  destination: function (_req, _file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (_req, file, cb) {
    const fileName = crypto.randomBytes(6).toString('hex') + path.extname(file.originalname);
    cb(null, fileName);
  },
});

const upload = multer({
  storage,
  limits: {
    fileSize: 100 * 1024,
  },
  fileFilter: function (_req, file, cb) {
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
      return cb(null, false);
    }
    cb(null, true);
  },
}).single('file');

export default upload;
