import NavBar from "../components/NavBar"
import Head from "../components/Head"
import Projects from "../components/Projects"
import Technologies from "../components/Technologies"
import AboutMe from "../components/AboutMe"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import { Link } from 'react-scroll';


export default function Home() {
  return (
    <div>
      <NavBar/>
      <Head/>
      <Projects/>
      <Technologies/>
      <AboutMe/>
      <Contact/>
      <Footer/>
    </div>
  )
}
