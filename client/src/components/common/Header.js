import styled from "styled-components";
import Responsive from "../common/Responsive";
import palette from "../../lib/styles/palette";

const Wrapper = styled(Responsive)`
  height: 80px;
  display: grid;
  padding: 0 40px;
  margin: 0;
  grid-template-columns: 1fr 2fr;
  align-items: center;
  position: fixed;
  z-index: 200;
  width: 100%;
  background-color: ${(props) =>
    props.scrollY < 1000 ? "transparent" : "white"};
  /* color: ${(props) => (props.scrollY > 1000 ? "black" : "white")}; */

  .logo {
    font-size: 36px;
    font-weight: 600;
    display: flex;
    color: ${(props) =>
      props.scrollY > 800
        ? `${palette.textColors[1]}`
        : `${palette.textColors[0]}`};
  }
  .logo img {
    max-width: 50px;
    max-height: 50px;
  }
  .logo span {
    font-size: 28px;
    font-weight: 600;
    vertical-align: middle;
  }
  nav {
    justify-self: end;
  }
  nav a {
    margin: 0 24px;
    text-decoration: none;
    color: ${(props) =>
      props.scrollY > 800
        ? `${palette.textColors[1]}`
        : `${palette.textColors[0]}`};
   }
  }
  .burger {
    display: none;
  }
  .right {
    display: flex;
    align-items: center;
  }
`;

const Header = ({ scrollY }) => {
  return (
    <Wrapper scrollY={`${scrollY}`}>
      <div className="logo">
        <img src="images/logo-v.png" alt="logo" />
        <span>ミツキンシステム株式会社</span>
      </div>
      <nav>
        <a href="#home">Home</a>
        <a href="#about-us">会社概要</a>
        <a href="#service">事業内容</a>
        <a href="#company-activities">採用情報</a>
        <a href="https://tongle.mizkin.co.jp" target="">
          同楽フリーランス
        </a>
      </nav>
      {/* mobile-Navi */}
      <div className="burger">
        <div className="burger-line1"></div>
        <div className="burger-line2"></div>
        <div className="burger-line3"></div>
      </div>
    </Wrapper>
  );
};

export default Header;
