import nodemailer from "nodemailer";

import { EMAIL_PASSWORD } from "./env.js";

const accountEmail = "andreymelnyk777@gmail.com";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: accountEmail,
    pass: EMAIL_PASSWORD,
  },
});

export { transporter, accountEmail };
