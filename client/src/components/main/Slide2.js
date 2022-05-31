// import styled from "styled-components";
// import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
// import { useState } from "react";
// import { slidesOnLeft } from "react-slick/lib/utils/innerSliderUtils";

// const items = [{ img: "/images/4.jpg" }, { img: "/images/5.jpg" }];

// const Wrapper = styled.section`
//   position: relative;
//   height: 100vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;

//   .image {
//     width: 1000px;
//     height: 600px;
//     border-radius: 10px;
//   }

//   .right-arrow {
//     position: absolute;
//     top: 50%;
//     right: 32px;
//     font-size: 3rem;
//     color: #000;
//     z-index: 10;
//     cursor: pointer;
//     user-select: none;
//   }

//   .left-arrow {
//     position: absolute;
//     top: 50%;
//     left: 32px;
//     font-size: 3rem;
//     color: #000;
//     z-index: 10;
//     cursor: pointer;
//     user-select: none;
//   }

//   .slide {
//     opacity: 0;
//     transition-duration: 1s ease;
//   }

//   .slide.active {
//     opacity: 1;
//     transition-duration: 1s;
//     transform: scale(1.02);
//   }
// `;

// // const ImageBlock = styled.img`
// //   min-width: 100vw;
// //   min-height: 100vh;
// // `;

// const Slide = () => {
//   const [current, setCurrent] = useState(0);
//   const length = items.length;

//   const nextSlide = () => {
//     setCurrent(current === length - 1 ? 0 : current + 1);
//   };

//   const prevSlide = () => {
//     setCurrent(current === 0 ? items.length - 1 : current - 1);
//   };

//   console.log(current);

//   if (!Array.isArray(items) || items.length <= 0) {
//     return null;
//   }

//   return (
//     <Wrapper>
//       <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
//       <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
//       {/* <ArrowBackIosIcon
//         sx={{
//           position: "absolute",
//           top: "60%",
//           left: 32,
//           fontSize: "3rem",
//           zIndex: 10,
//           cursor: "pointer",
//           userSelect: "none",
//           color: "#000",
//         }}
//       />
//       <ArrowForwardIosIcon
//         sx={{
//           position: "absolute",
//           top: "60%",
//           right: 32,
//           fontSize: "3rem",
//           zIndex: 10,
//           cursor: "pointer",
//           userSelect: "none",
//           color: "#000",
//         }}
//       /> */}
//       {items.map((element, index) => {
//         return (
//           <div
//             className={index === current ? "slide active" : "slide"}
//             key={index}
//           >
//             {index === current && <img src={element.img} className="image" />}
//           </div>
//         );
//       })}
//     </Wrapper>
//   );
// };

// export default Slide;
