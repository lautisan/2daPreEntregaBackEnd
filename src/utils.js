import { fileURLToPath } from "url";
import { dirname } from "path";
import multer from "multer";

const PORT = 8080;
const DB_USER = "lautaromontenegro";
const DB_PASS = "9WHsfQFziAzUm2LX";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const storage = multer.diskStorage({
  destination: function (request, file, cb) {
    cb(null, `${__dirname}/public/images/products`);
  },
  filename: function (request, file, cb) {
    cb(null, file.originalname);
  },
});

const uploader = multer({ storage });

export { __dirname, PORT, uploader, DB_USER, DB_PASS };
