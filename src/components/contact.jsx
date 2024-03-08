import Mail from "../images/mail.png";
import LinkedIn from "../images/linkedin.webp";

import { useRef } from "react";
import emailjs from "@emailjs/browser";

import { useTranslation } from "react-i18next"

export default function Contact() {

  const { t} = useTranslation();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_s3zp4oq", "template_33myixi", form.current, {
        publicKey: "kWhV3y0HJTSls-gIq",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section id="contact">
      <div className="contact-container flex">
        <h1>{t("description.contact")}</h1>
        <div className="contact-details border flex">
          <img className="icon" src={Mail}></img>
          <p>
            <a href="mailto:elias06110@gmail.com">elias06110@gmail.com</a>
          </p>
          <img className="icon" src={LinkedIn}></img>
          <p>
            <a href="#"></a>LinkedIn
          </p>
        </div>
      </div>
      <div className="flex column">
        <h2>{t("description.or")}</h2>
        <form ref={form} onSubmit={sendEmail} className="flex column form">
          <input
            className="input"
            type="text"
            placeholder={t("description.name")}
            name="user_name"
            required
          />
          <input
            className="input"
            type="text"
            placeholder="Email"
            name="user_email"
            required
          />
          <input
            className="input"
            type="text"
            placeholder={t("description.subject")}
            name="subject"
            required
          />
          <textarea
          placeholder="Message"
            className="input1"
            cols="30"
            row="10"
            name="message"
            required
          />
          <button type="submit" className="btn-form">
          {t("description.message")}
          </button>
        </form>
      </div>
    </section>
  );
}
