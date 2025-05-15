import multer from "multer";
import path, { dirname, resolve, extname, basename } from "path";
import { fileURLToPath } from "url";

// Simular __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
  storage: multer.diskStorage({
    destination: resolve(__dirname, "..", "..", "uploads"),
    filename: (req, file, cb) => {
      const ext = extname(file.originalname);
      const name = basename(file.originalname, ext);

      cb(null, `${name}-${Date.now()}${ext}`);
    },
  }),
};
