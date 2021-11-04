const express = require("express");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const fs = require("fs/promises");
const { v4 } = require("uuid");
const { nextTick } = require("process");

const app = express();
app.use(cors());
app.use(express.static("public")); //указать папку чтобы корс пропустил файл с расширением

const { PORT = 3000 } = process.env;

const tempDir = path.join(__dirname, "temp");
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

const contacts = [];

app.get("/api/contacts", (req, res) => {
  res.json({
    contacts,
  });
});

app.post("/api/contacts", upload.single("image"), async (req, res, next) => {
  // console.log(req.file);

  const { path: tempDir, originalname } = req.file;
  const id = v4();
  const [extension] = originalname.split(".").reverse();
  const filename = `${id}_main-image.${extension}`;
  const uploadDir = path.join(__dirname, "public\\contacts", filename);
  // console.log(tempDir);
  // console.log(uploadDir);
  try {
    await fs.rename(tempDir, uploadDir);
    const image = path.join("contacts", filename);
    const newContact = { ...req.body, id, image };
    contacts.push(newContact);
    res.status(201).json({
      status: "success",
      code: 201,
      data: {
        result: newContact,
      },
    });
  } catch (error) {
    await fs.unlink(tempDir);
    next(error);
  }

  // await fs.rename(
  //   "E:\\IT\\Go IT\\node\\nodejs-homework-rest-api\\multer-example\\temp\\khaker.png",
  //   "E:\\IT\\Go IT\\node\\nodejs-homework-rest-api\\multer-example\\public\\contacts\\khaker.png"
  // );
});

app.listen(PORT);
