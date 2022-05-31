import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import styled from "styled-components";

const GridBox = styled(Box)`
  display: grid;
  grid-template-columns: repeat(6, 7rem);
  grid-template-rows: repeat(2, 3rem);
`;

export default function InfoButtons() {
  return (
    <GridBox sx={{ "& button": { m: 1 } }}>
      <Button variant="outlined" size="small" disabled>
        未経験歓迎
      </Button>
      <Button variant="outlined" size="small" disabled>
        学歴不問
      </Button>
      <Button variant="outlined" size="small">
        第二新卒OK
      </Button>
      <Button variant="outlined" size="small" disabled>
        ベテランOK
      </Button>
      <Button variant="outlined" size="small">
        複数名採用
      </Button>
      <Button variant="outlined" size="small">
        完全週休2日
      </Button>
      <Button variant="outlined" size="small">
        休日120日
      </Button>
      <Button variant="outlined" size="small" disabled>
        賞与複数回
      </Button>
      <Button variant="outlined" size="small" disabled>
        上場企業
      </Button>
      <Button variant="outlined" size="small">
        転勤なし
      </Button>
      <Button variant="outlined" size="small">
        土日面接可
      </Button>
      <Button variant="outlined" size="small">
        面接1回
      </Button>
    </GridBox>
  );
}
