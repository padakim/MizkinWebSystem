import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-areas: "icon title" "icon content";
  /* grid-template-columns: 6rem 1fr; */
  grid-template-rows: 1fr 2fr;
  box-shadow: 0px 0px 18px rgba(0, 0, 0, 0.07);
  justify-content: flex-start;
`;

const MainItemWrapper = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default MainItemWrapper;
