import Presentation from '../Components/Presentation';
import MyWork from '../Components/MyWork';
import Header from '../Components/Header';
import Intro from '../Components/Intro';
import Services from '../Components/Services';
import ContactUs from '../Components/ContactUs';
import Footer from '../Components/Footer';
import Skills from '../Components/Skills';


export default function Home() {
  return (
    <>
      <Header />
      <Intro />
      <Skills/>
      <Services/>
      {/* <Presentation /> */}
      <MyWork />
      {/* <ContactUs/> */}
      <Footer/>
    </>
  );
}
