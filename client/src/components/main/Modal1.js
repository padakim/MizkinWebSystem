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
            <pre>{`ご挨拶`}</pre>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2, px: 7 }}>
            <section>
              <pre>{`元大手コンサル企業出身の代表と
大阪拠点SI企業の黎明期から上場に導いた取締役の
2人が設立した当社。

経営陣4人の確かな実績で、
設立年数は浅くとも多くの案件依頼が
舞い込んでいます。

大きな裁量を持って働ける案件が多く、
経験に応じて“ステップアップ”に
つながる案件をお任せすることが出来ます。

そのままSEを極めるのも良し。
キャリアアップの為にPLやPMなどへ
チャレンジするのも良し。
最先端技術を扱う案件に参画し、
モダンなスキルを磨くのも良し。
ご経験豊富な方は、すぐに役職に就くことも可能です。

もちろん、お任せするばかりではなく、
皆さんが希望する案件に集中できるよう、
働きやすい環境の整備にも注力。

高性能チェアの購入や、PCのスペック選択は自由。
リモートワークの導入も積極的に行っています。
理想の就業環境があればその希望を聞き入れ、
ベストな環境を実現していきます。

PL・PMへのステップアップが
現時点では見えていない方も、
当社の環境を知れば想像できるはずです。

素早いキャリアアップを叶えたい方は、
ぜひ当社で一度チャレンジしてみませんか？`}</pre>
              <h4>特徴</h4>
              <pre>
                {`1.会社利益よりも、社員への確かな還元を実現。
収入面での不安は感じられないと思います。
2.フルリモートOKですが、出社して作業をしてもOK。
成果を出すためなら、自由な働き方も許容しています。
3.昨年設立で社員数がまだ2名。自由さがウリなので、
スキルアップの為に副業もOKにしています。`}
              </pre>
              <h4>トピックス</h4>
              <pre>
                {`“やりたい業務”に集中して働ける環境を整備します。
代表の人柄とフラットな環境がある当社では、
頑張り次第ですぐに上流への挑戦を
実現することが出来ます。

会社としても前向きに頑張るエンジニアには、
しっかり環境を整備したいと思っているので、
あなたの“やりたい”をアピールしてください。

PCはMacでもWindowsでも
あなたの希望次第で選択OK。
高性能チェアも導入し、出社時の
就業環境を準備しています。

“やりたい業務”に集中して働ける環境を整備します。
代表だけではなく、周囲のフォローを受けて着実に成長できます。
会社の更なる拡大フェーズにジョインしてみませんか？
大手コンサル企業で働いていた代表と、
大手SIerで経験を積んでいた取締役が
就業環境の整備をしている当社。

大手の良い部分も悪い部分も、
中小企業の実情も把握しているからこそ、
“両方の良いところを感じられる会社作り”を目指しています。
まず、今年から来年にかけて、売上高・従業員を
倍々に成長させていきたいと思っています。
それに向けて来年、2・3月にはオフィスの増床移転も決定！

このフェーズで入社する社員の中で
“コアメンバーとして活躍したい”と
頑張れる方は、確実に上がっていく環境です。
部長になったり、課長になったりすることができる
チャンスが広がっています。`}
              </pre>
              <h4>取材担当者より</h4>
              <pre>
                {`現在、従業員数は2名。
四大コンサルと呼ばれる大手コンサル企業での経験を積んできた代表をはじめ、
年間数億円のプロジェクトを手掛けてきた実績を持つ取締役、
大阪での様々な開発を手がけ、多くの企業から信頼を受けている創業メンバー。
そんな最強のメンバーがそろっている同社だからこそ
“自由に働ける”だけの余裕を持っているのだと感じた。
また代表、取締役のお二人はとことん好きなことを
突き詰めてやるタイプだそうだ。
代表はとにかく新しい技術やITスキルに関する勉強が大好き。
社員の方によると、
いつ質問をしてもリアルタイムにすぐ不明点を解消してくれるそう。
こういったフットワークの軽さや距離の近さは同社の環境ならではだろう。

ちなみに同社は副業OK。

残業に対して“正解はない”という考えを持っている同社では、
稼ぎたい人には多く案件をお任せするし、プライベート重視
の方にはしっかりオンオフの切り替えが出来る案件をアサインするそうだ。`}
              </pre>
            </section>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
