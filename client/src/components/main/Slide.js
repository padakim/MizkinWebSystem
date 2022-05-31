// import styled from "styled-components";
// import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// import { useState } from "react";

// const Wrapper = styled.section`
//   .image-container {
//     display: flex;
//     /* without 100vw this will showing only 2 out of 3 pics. reason?*/
//     width: 100vw;
//     /* overflow: hidden; */
//     position: absolute;
//     border-radius: 10px;
//   }
// `;

// const ImageBlock = styled.img`
//   min-width: 100vw;
//   min-height: 100vh;
// `;

// const clickHandler = () => {
//   console.log("clicked!!!!!!!!!!!!!!!!!!!!");
// };

// const Slide = () => {
//   const items = [
//     { img: "/images/3.jpg" },
//     { img: "/images/4.jpg" },
//     { img: "/images/5.jpg" },
//   ];
//   const [current, setCurrent] = useState(0);
//   const length = items.length;

//   return (
//     <Wrapper>
//       <ArrowBackIosIcon
//         onClick={() => {
//           console.log("clicked!");
//         }}
//         sx={{ fontSize: 100, zIndex: 99, top: 50 }}
//       />
//       <ArrowForwardIosIcon
//         onClick={clickHandler}
//         sx={{ fontSize: 100, zIndex: 99 }}
//       />
//       <div className="image-container">
//         {items.map((element, index) => {
//           return <ImageBlock key={index} src={element.img} />;
//         })}
//       </div>
//     </Wrapper>
//   );
// };

// export default Slide;
