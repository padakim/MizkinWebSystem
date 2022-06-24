import styled from 'styled-components';
import Responsive from '../common/Responsive';
import palette from '../../lib/styles/palette';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Wrapper = styled(Responsive)`
  footer {
    margin-top: 62px;
    background-color: #181818;
    display: grid;
    justify-items: center;
    padding-top: 36px;
    padding-bottom: 12px;
  }

  .footer-menus {
    width: 100vw;
    display: grid;
    grid-template-columns: 2fr repeat(3, 1fr);
    padding: 0 80px;
    position: relative;
  }

  .footer-menu {
    display: flex;
    flex-direction: column;
    justify-content: s;
  }

  .menu-title {
    font-size: 16px;
    color: #fff;
    font-weight: 500;
  }

  .contact-us {
    padding-left: 100px;
    color: ${palette.textColors[0]};
  }

  .contact-us p:not(:first-child) {
    padding-bottom: 16px;
  }
  .menu-items {
    padding: 0%;
  }

  .menu-items li {
    list-style: none;
    padding-bottom: 8px;
  }

  .menu-items li a {
    font-weight: 300;
    text-decoration: none;
    color: ${palette.textColors[0]};
  }

  .rights {
    grid-column: 1 / -1;
    justify-self: center;
    color: white;
  }

  .scrollToTop {
    display: flex;
    justify-content: flex-end;
  }

  .scrollToTop a {
    width: 32px;
    height: 32px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${palette.backgroundColor[0]};
    color: #fff;
    text-decoration: none;
    position: fixed;
    right: 30px;
    bottom: 30px;
    z-index: 999;
  }
`;

const StyledButton = styled.button`
  position: absolute;
  right: 3%;
  bottom: 10%;
  padding: 5px 5px;
  background-color: ${palette.primaryColor[0]};
  border: none;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
  outline: none;
  margin-bottom: 25px;
  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }
  color: white;
`;

const Footer = ({ user, handleLogout }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Wrapper>
      <footer>
        <div className="footer-menus">
          <div className="contact-us">
            <p className="menu-title">Contact us</p>
            <pre>
              {`本社：大阪府大阪市天王寺区空清町2-4 1F

本町事務所：大阪市西区阿波座1丁目15－18 

          　西本町クリスタルビル 5F`}
            </pre>
            <p>TEL：06-7777-1399</p>
            <p>E-mail：info@mizkin.co.jp</p>
          </div>
          <div className="footer-menu">
            <p className="menu-title">ミツキンシステム株式会社</p>
            <ul className="menu-items">
              <li>
                <a href="#about-us">会社概要</a>
              </li>
              <li>
                <a href="#service">事業内容</a>
              </li>
              <li>
                <a href="#company-activities">採用情報</a>
              </li>
            </ul>
          </div>
          <div className="scrollToTop">
            <StyledButton onClick={scrollToTop}>
              <ArrowUpwardIcon />
            </StyledButton>
          </div>
          <p className="rights">Copyright © 2022 Mizkin System Inc.</p>
          {user && user ? (
            <>
              <Link to={'/'}>
                <Button
                  variant="outlined"
                  size="small"
                  sx={{ position: 'absolute', right: '7%', bottom: '20%' }}
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              </Link>
            </>
          ) : (
            <Link to={'/login'}>
              <Button
                variant="outlined"
                size="small"
                sx={{ position: 'absolute', right: '7%', bottom: '20%' }}
              >
                Login
              </Button>
            </Link>
          )}
          {user && user.roles && user.roles.includes('ROLE_ADMIN') ? (
            <Link to={'/admin'}>
              <Button
                variant="outlined"
                size="small"
                sx={{ position: 'absolute', right: '12%', bottom: '20%' }}
              >
                Admin Page
              </Button>
            </Link>
          ) : (
            <></>
          )}
        </div>
      </footer>
    </Wrapper>
  );
};

export default Footer;
