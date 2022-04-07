import Presentation from '../Components/Presentation';
import MyWork from '../Components/MyWork';
import Header from '../Components/Header';
import Intro from '../Components/Intro';
import Services from '../Components/Services';
import ContactUs from '../Components/ContactUs';
import Footer from '../Components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <Intro />
      <Services/>
      {/* <Presentation /> */}
      <MyWork />
      <ContactUs/>
      <Footer/>
    </>
  );
}
