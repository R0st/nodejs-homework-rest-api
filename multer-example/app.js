const express = require("express");
const cors = require("cors");
const multer = require("multer");
const path = require("path");

const app = express();
app.use(cors());

const { PORT = 3000 } = process.env;

const tempDir = path.join(__dirname, "temp");
console.log(tempDir);

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

app.post("/api/contacts", upload.single("image"), (req, res) => {
  console.log(req.file);
});

app.listen(PORT);
