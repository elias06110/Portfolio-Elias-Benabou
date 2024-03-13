import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          description: {
            home: "Home",
            about: "About",
            skills: "Skills",
            projets: "Projects",
            contact: "Contact",
            hi: `Hi, I'm Elias,`,
            dev: "Front-End React JS developer based in Cannes 🇫🇷",
            education: "Education",
            program: "OpenClassrooms Web Developer Program",
            self: "Self-taught, constantly learning...",
            front: "Front-End Development",
            back: "Backend Development",
            exp: "Experienced",
            basic: "Basics",
            int: "Intermediate",
            portfolio: "My portfolio",
            kasa: ` Kasa is a dynamic web platform designed to facilitate peer-to-pee
            apartment rentals between individuals. As a developer, my role in
            this project included front-end development, ensuring a responsive
            design and providing users with a reliable solution for finding
            and renting apartments from the comfort of their homes.`,
            grim: `Leveraging my backend development skills, I created the backbone
            of this platform, enabling users to rate and review books while
            establishing a robust reference system. The backend infrastructure
            seamlessly manages data, user accounts, and interactions, ensuring
            a reliable and scalable solution. My contributions to this project
            include implementing the backend architecture and optimizing
            database functionality.`,
            sophie: `Developed an immersive website showcasing the exceptional work of
            an interior architect. The site features a dynamic gallery
            highlighting a diverse portfolio of interior design projects.
            Users can seamlessly navigate through the architect's creations,
            exploring each project with high-resolution images and detailed
            descriptions.`,
            booki: `Booki, a project where I handled the HTML and CSS development, is
            a user-friendly website that simplifies the process of finding
            accommodations and activities in any chosen city. I developed an
            intuitive interface that enhances the user experience, allowing
            seamless exploration of lodging options and local experiences.`,
            live:'Live demo',
            name:'Full name',
            contact:'Contact me',
            or:'Or directly here',
            message:'Send',
            subject:'Subject'
           
          },
        },
      },
      fr: {
        translation: {
          description: {
            home: "Accueil",
            about: "A propos",
            skills: "Compétences",
            projets: "Projets",
            contact: "Contact",
            hi: `Bonjour, je m'appelle Elias`,
            dev: "Developpeur Front-End React JS basé a Cannes 🇫🇷",
            education: "Formation",
            program: "OpenClassrooms - Formation Développeur Web",
            self: "Autodidacte, en apprentissage constant...",
            front: "Developpement Front-End",
            back: "Developpement Back-End",
            exp: "Experimenté",
            basic: "Bases",
            int: "Intermediaire",
            portfolio: "Mon portfolio",
            kasa: ` Kasa est une plateforme web dynamique conçue pour faciliter la location d'appartements entre particuliers. En tant que développeur, mon rôle dans ce projet comprenait le développement front-end, assurant un design réactif et fournissant aux utilisateurs une solution fiable pour trouver et louer des appartements depuis le confort de leur domicile.`,
            grim: `En exploitant mes compétences en développement backend, j'ai créé l'ossature de cette plateforme, permettant aux utilisateurs de noter et de critiquer des livres tout en établissant un système de référence robuste. L'infrastructure backend gère de manière transparente les données, les comptes utilisateur et les interactions, assurant une solution fiable et évolutive. Mes contributions à ce projet incluent la mise en œuvre de l'architecture backend et l'optimisation des fonctionnalités de la base de données.`,
            sophie: `Développé un site web immersif mettant en valeur le travail exceptionnel d'un architecte d'intérieur. Le site présente une galerie dynamique mettant en avant un portefeuille diversifié de projets de design intérieur. Les utilisateurs peuvent naviguer de manière transparente à travers les créations de l'architecte, explorant chaque projet avec des images haute résolution et des descriptions détaillées.`,
            booki: `Booki, un projet où j'ai pris en charge le développement HTML et CSS, est un site web convivial qui simplifie le processus de recherche d'hébergements et d'activités dans n'importe quelle ville choisie. J'ai développé une interface intuitive qui améliore l'expérience utilisateur, permettant une exploration sans problème des options d'hébergement et des expériences locales.`,
            live:'Démo en temps réel',
            name:'Nom complet',
            contact:'Contactez moi ici',
            or:'Ou directement la',
            message:'Envoyer',
            subject:'Sujet'
            

          },
        },
      },
    },
  });

export default i18n;
