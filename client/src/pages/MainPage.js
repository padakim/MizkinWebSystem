import Header from '../components/common/Header';
import About from '../components/main/About';
import Service from '../components/main/Service';
import Banner from '../components/main/Banner';
import FooterContainer from '../containers/common/FooterContainer';
import Activity from '../components/main/Activity';
import Slide from '../components/main/SlideMui';
import { useScroll } from '../components/common/Scroll';

const MainPage = () => {
  const { scrollY } = useScroll();
  return (
    <>
      <Header scrollY={scrollY} />
      <Slide />
      {/* <Banner /> */}
      <About />
      <Service />
      <Activity />
      <FooterContainer />
    </>
  );
};

export default MainPage;
