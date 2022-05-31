import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import styled from "styled-components";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1000,
  height: 800,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  overflow: "scroll",
};

const StyledButton = styled(Button)`
  && {
    color: black;
    display: flex;
    flex-direction: column;
  }
`;

export default function BasicModal({ children }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <StyledButton onClick={handleOpen}>{children}</StyledButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            fontWeight="bold"
            paddingY={8}
            paddingX={7}
          >
            <pre>{`雇用形態:正社員`}</pre>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2, px: 7 }}>
            <section>
              <h4>想定給与</h4>
              <pre>{`【前職給与以上保証】
月給350,000円～1,200,000円
※経験やスキルに応じて決定致します
※残業代は全額支給致します
※試用期間は6ヶ月。期間内の待遇差異はございません
★エンジニアにはどんどん還元する仕組みを作っています！`}</pre>
              <h4>勤務時間</h4>
              <pre>
                {`フレックスタイム制(8時間)
※標準労働時間帯（9:00～18:00）
残業について
残業に正解はないと思っています。
ライフワークバランスを整えたい人はそれもOKですし、
稼ぎたい人は残業して稼いでいただいてもOKです！`}
              </pre>
              <h4>勤務地</h4>
              <pre>
                {`【本社】
大阪府大阪市西区阿波座1丁目15－18 西本町クリスタルビル 5F
★リモートワーク案件もあります
交通・詳細
◆大阪メトロ中央線/御堂筋線/四つ橋線『本町駅』より徒歩5分

勤務地エリア
大阪府(大阪市西区)`}
              </pre>
              <h4>休日休暇</h4>
              <pre>
                {`◆年間休日130日以上
◆完全週休二日制(土日)
◆祝日
◆夏季休暇
◆年末年始休暇
◆GW
◆有給休暇（半年後に10日付与。その後1年ごとで10日付与）
`}
              </pre>
              <h4>待遇・福利厚生</h4>
              <pre>
                {`◇給与改定年1回(5月)
◇決算賞与年1回(4月)
◇各種社会保険完備(健康・厚生年金・労災・雇用)
◇交通費全額
◇残業代全額
◇私服通勤OK
◇定期健康診断
◇役職手当
◇出張手当
◇資格手当(基本情報、応用情報など)
◇副業自由`}
              </pre>
              <h4>応募資格</h4>
              <pre>
                {`■高卒以上
■開発経験をお持ちの方(3年以上)
※Java, C#での経験を想定。それ以外の経験も大歓迎！
`}
              </pre>
              <h4>歓迎する経験・スキル</h4>
              <pre>{`□IPA情報資格（応用技術者、基本情報処理）
上記資格の他にも、保険や医療、不動産業界などの
国家資格や、IT系国家資格をお持ちの方も大歓迎！
□SE経験をお持ちの方`}</pre>
              <h4>この仕事の向き・不向き</h4>
              <pre>{`向いている人

○キャリア志向をお持ちの人
○誰かと一緒に頑張ることがモチベーションになる人
○予算管理などの業務も経験してみたい人
○エンジニアとしてのスキルは一生涯磨いていきたい方

向いていない人

△ステップアップに興味がない人`}</pre>
            </section>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
