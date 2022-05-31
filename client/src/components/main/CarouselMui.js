import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";

// const Item = (props) => {
//   return (
//     <Paper sx={{ width: 50 }}>
//       <h2>{props.item.name}</h2>
//       <p>{props.item.description}</p>
//       <Button className="CheckButton">Check it out!</Button>
//     </Paper>
//   );
// };

// const CarouselMui = () => {
//   var items = [
//     {
//       name: "Random Name #1",
//       description: "Probably the most random thing you have ever seen!",
//     },
//     {
//       name: "Random Name #2",
//       description: "Hello World!",
//     },
//   ];

//   return (
//     <Carousel>
//       {items.map((item, i) => (
//         <Item key={i} item={item} />
//       ))}
//     </Carousel>
//   );
// };

// export default CarouselMui;

const CarouselMui = () => {
  var items = [
    {
      imgAddress: "/images/4.jpg",
    },
    {
      imgAddress: "/images/5.jpg",
    },
  ];

  return (
    <Carousel indicators={false}>
      {items.map((item, i) => (
        <div key={i} style={{ width: "100%", height: 50 }}>
          <img
            src={item.imgAddress}
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselMui;
