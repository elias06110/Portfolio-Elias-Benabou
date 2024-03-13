import Navbar from "../components/nav";
import Profil from "../components/profil";
import About from "../components/about";
import Projects from "../components/projects";
import Contact from "../components/contact";
import Experience from "../components/experience";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <Profil></Profil>
      <About></About>
      <Experience></Experience>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}
