import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
// import { autoPlay } from "react-swipeable-views-utils";
import styled from "styled-components";
import StyledButton from "../common/Button";
import palette from "../../lib/styles/palette";

// const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const TextBlock = styled.div`
  position: absolute;
  top: 20%;
  z-index: 999;
  color: ${palette.textColors[0]};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 50vh;
  opacity: 1;

  h1 {
    font-size: 54px;
    font-weight: 600;
  }
  a {
    font-size: 24px;
    margin: 48px;
  }
  h4 {
    font-size: 24px;
    margin: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const images = [
  {
    imageIndex: 0,
    label: (
      <div>
        <h1>テクノロジーで生活を彩り、理想の生活に</h1>
        <h3>
          科学技術の進歩により、経済の飛躍的発展が促進されます。
          <br />
          イノベーションにより生活を彩り、理想的な社会の構築を目指します。
        </h3>
        <h4>
          <StyledButton>More</StyledButton>
        </h4>
        <a href="https://tongle.mizkin.co.jp">
          <h3>
            弊社が同楽フリーランスサービスを開始いたしました。詳細はこのURLを確認してください。
          </h3>
        </a>
      </div>
    ),
    imgPath: "images/img1.jpg",
  },
  {
    imageIndex: 1,
    label: (
      <div>
        <h1>テクノロジーは世界を変える</h1>
        <h3>
          科学的発展を基礎とし、自主的な革新を重視し、科学技術の進歩を加速させる。
          <br />
          科学技術の創造性を集め、革新的な夢を実現する。
        </h3>
        <h4>
          <StyledButton>More</StyledButton>
        </h4>
      </div>
    ),
    imgPath: "images/img2.jpg",
  },
];

function SlideMui() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ maxWidth: "100vw", flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: "flex",
          alignItems: "center",
          height: 0,
          pl: 2,
          bgcolor: "background.default",
        }}
      >
        <TextBlock>{images[activeStep].label}</TextBlock>
      </Paper>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.imageIndex}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: "100vh",
                  display: "block",
                  maxWidth: "100vw",
                  overflow: "hidden",
                  width: "100%",
                  opacity: 0.95,
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </SwipeableViews>

      <MobileStepper
        sx={{
          position: "absolute",
          width: "100vw",
          background: "transparent",
          bottom: "1%",
        }}
        steps={maxSteps}
        activeStep={activeStep}
        nextButton={
          <Button
            size="5"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
            sx={{ color: "white" }}
          >
            Next
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft sx={{ color: "white" }} />
            ) : (
              <KeyboardArrowRight sx={{ color: "white" }} />
            )}
          </Button>
        }
        backButton={
          <Button
            size="small"
            onClick={handleBack}
            disabled={activeStep === 0}
            sx={{ color: "white" }}
          >
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight sx={{ color: "white" }} />
            ) : (
              <KeyboardArrowLeft sx={{ color: "white" }} />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
}

export default SlideMui;
