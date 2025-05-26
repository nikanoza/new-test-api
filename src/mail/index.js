import dotenv from "dotenv";
import mailTransport from "./mails-settings.js";
import { welcomeHtml } from "./templates.js";

dotenv.config();

const send = (to, subject, html) => {
  const options = {
    to,
    subject,
    html,
    from: process.env.GMAIL_USER,
  };

  return mailTransport.sendMail(options);
};

export const registrationWelcome = async (to, name) => {
  const html = welcomeHtml(name);
  return send(to, "Welcome to Jano's wavarma", html);
};
