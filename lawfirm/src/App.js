import './App.css';
import AreaPractice from './component/AreaPractice/AreaPractice';
import ClientSection from './component/ClientSection/ClientSection';
import Faq from './component/Faq/Faq';
import Footer from './component/Footer/Footer';
import Hero from './component/HeroSection/Hero';
import IntroSection from './component/IntroSection/IntroSection';
import NavBar from './component/NavBar/NavBar';
import NewsLetter from './component/NewsLetter/NewsLetter';
import Team from './component/Team/Team';
import Whychoose from './component/Whychoose/Whychoose';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Hero/>
      <IntroSection/>
      <Whychoose/>
      <AreaPractice/>
      <ClientSection/>
      <Team/>
      <Faq/>
      <NewsLetter/>
      <Footer/>
    </div>
  );
}

export default App;
