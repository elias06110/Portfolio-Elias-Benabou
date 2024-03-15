import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";
import Mail from "../images/mail.png";
import LinkedIn from "../images/linkedin.webp";

export default function Contact() {
  const { t } = useTranslation();
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false); // Ajout de l'état de succès

  const sendEmail = (e) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      setError("Veuillez remplir tous les champs.");
      return;
    }

    if (!isValidEmail(email)) {
      setError("Veuillez entrer une adresse email valide.");
      return;
    }

    emailjs
      .sendForm("service_s3zp4oq", "template_33myixi", form.current, {
        publicKey: "kWhV3y0HJTSls-gIq",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setSuccess(true); // Définir l'état de succès à true
          setName(""); // Réinitialiser les états des champs
          setEmail("");
          setSubject("");
          setMessage("");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    setError(""); // Réinitialiser les erreurs
  };

  const isValidEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  return (
    <section id="contact">
      <div className="contact-container flex">
        <h1>{t("description.contact")}</h1>
        <div className="contact-details border flex">
          <img alt="" className="icon" src={Mail}></img>
          <p>
            <a href="mailto:elias06110@gmail.com">elias06110@gmail.com</a>
          </p>
          <img alt="" className="icon" src={LinkedIn}></img>
          <p>
            <a href="https://www.linkedin.com/in/elias-benabou-3782502b7/">LinkedIn</a>
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
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            className="input"
            type="email"
            placeholder="Email"
            name="user_email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className="input"
            type="text"
            placeholder={t("description.subject")}
            name="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
          <textarea
            placeholder="Message"
            className="input1"
            cols="30"
            rows="10"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          {error && <p className="error">{error}</p>}
          {success && <p className="success">{t("description.send")}</p>}
          <button type="submit" className="btn-form">
            {t("description.message")}
          </button>
        </form>
      </div>
    </section>
  );
}