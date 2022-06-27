import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
// register/login page layout

const textMap = { signup: 'signup', createUserByAdmin: 'createUserByAdmin' };

const AuthTemplateBlock = styled.div`
  //fill the whole screen
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background: ${palette.secondaryColor[0]};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const WhiteBox = styled.div`
  .logo-area {
    display: block;
    padding-bottom: 2rem;
    text-align: center;
  }
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
  padding: 2rem;
  width: 400px;
  background: white;
  border-radius: 2px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const AuthTemplate = ({ children, type }) => {
  const text = textMap[type];
  return (
    <AuthTemplateBlock>
      <WhiteBox>
        <div className="logo-area">
          <StyledLink to="/">
            {text === 'signup' ? (
              <Typography variant="h5">MizkinSystem</Typography>
            ) : (
              <Typography variant="h5">Mizkin Admin Page</Typography>
            )}
          </StyledLink>
        </div>
        {children}
      </WhiteBox>
    </AuthTemplateBlock>
  );
};

export default AuthTemplate;
