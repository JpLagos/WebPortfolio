import NavBar from "../components/NavBar"
import Header from "../components/Header"
import Projects from "../components/Projects"
import Technologies from "../components/Technologies"
import AboutMe from "../components/AboutMe"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import Head from "next/head"


export default function Home() {
  return (
    <div>
      <Head>
        <title> Juan Lagos</title>
      </Head>
      <NavBar/>
      <Header/>
      <Projects/>
      <Technologies/>
      <AboutMe/>
      <Contact/>
      <Footer/>
    </div>
  )
}
