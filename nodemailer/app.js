const nodemailer = require("nodemailer");
require("dotenv").config();

const { EMAIL_PASSWORD } = process.env;

const nodemailerConfig = {
  host: "smtp.meta.ua",
  port: 465, // 25 2525 465
  secure: true,
  auth: {
    user: "r0st@meta.ua",
    pass: EMAIL_PASSWORD,
  },
};

const transporter = nodemailer.createTransport(nodemailerConfig);

const email = {
  to: "rostyslavhnatovskyi@gmail.con",
  from: "r0st@meta.ua",
  subject: "Новая заявка с сайта",
  html: `<p>Пришел заказ с сайта</p>`,
};

transporter
  .sendMail(email)
  .then(() => console.log("Email success send"))
  .catch((error) => console.log(error.message));
