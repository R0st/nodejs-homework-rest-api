const multer = require("multer");
const path = require("path");

const tempDir = path.join(__dirname, "../", "temp");
// console.log(tempDir);

const uploadConfig = multer.diskStorage({
  //вызываем обьует настроек
  destination: (req, file, cb) => {
    // где храним
    cb(null, tempDir);
  },
  filename: (req, file, cb) => {
    // под каким именем храним
    cb(null, file.originalname);
  },
  limits: {
    fileSize: 2048,
  },
});

const upload = multer({
  // создаем сам мидлвар
  storage: uploadConfig,
});

module.exports = upload;
