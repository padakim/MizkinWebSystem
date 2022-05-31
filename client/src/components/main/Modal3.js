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
            <pre>{`あなたのご経験やスキルに応じた案件をお任せします。
経営陣の確かな実績・信頼からご依頼いただく案件の中から、
あなたの希望するフェーズの仕事をお任せできます。`}</pre>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2, px: 7 }}>
            <section>
              <h4>【主な仕事内容】</h4>
              <pre>{`・システム開発・運用・保守
・プロジェクトマネジメント
・ソリューション企画・提案`}</pre>
              <h4>【設計・開発事例】</h4>
              <pre>
                {`・ERP等、各種業務系アプリケーション
・AI関連、物流、製造行向けIoT・システム
・Web・オープン、組込み、スマートフォンアプリ等
・ビッグデータのBIシステムやモバイルによる監視システムを構築
・ECサイト、ポータルサイト、ホームページ等

★下記に、当社が手掛ける案件の詳細例を記載しております。
  自社内開発を強化していくため、
　これらの案件で経験を積み、あなたの得意分野を
　増やしていってください。`}
              </pre>
              <h4>開発環境・業務範囲・案件例</h4>
              <pre>
                {`■自動運転システム 次世代の自動運転システムを開発。 
・言語：Java,Python, TypeScript 
・フレームワーク：Django, React, Flux
・APサーバ：Tomcat ・DB：PostgreSQL, Zookeeper, Vertica
・クラウド：AWS ・その他：Git, VSCode, Eclipse
・フェーズ：設計～開発～テスト 
・担当フェーズ：設計～開発～テスト
・開発規模：体制50名規模 
・勤務地：フルリモート

■自社プロダクト開発＆機能追加 卸業者向けのBtoBのECプロダクト開発。
・開発言語：HTML5, CSS, PHP ・FW：Vue.js, Node.js 
・DB：MySQL
・Webサーバ：Apache 
・その他：CentOS, Git, VSCode, Element UI
・フェーズ:要件定義～システムリリース～保守
・担当フェーズ：要件定義～システムリリース～保守
・開発規模：画面50個前後 
・勤務地：社内開発

■WEBEDI既存システムリプレイスプロジェクト
WebEDI既存システムのリプレース案件。
サプライヤーの受注、入荷、出荷、支払い、
消耗品発注サブシステムのリプレース作業など。 
≪Access＋ASP ⇒ASP.NET C#≫ ≪C/S＋B/S ⇒ B/S≫ 
・言語：C# 
・OS：WindowsServer,
・FW：ASP.NET MVC, Entity Framework 
・DB：SQLServer
・その他：VisualStdio, ListCreator, Ignite UI
・フェーズ:基本設計～システムテスト
・担当フェーズ：基本設計～システムテスト
・開発規模：開発期間1年、チーム体制11名規模 
・勤務地：本町駅

■富士通ホストのマイグレーションプロジェクト
保険会社の基幹システムマイグレーション案件。 
・言語：Java, SQL,
Shell, VB.NET, PL/I, JCL 
・DB：Oracle, VSAM, SAM
・その他：WebSpere, Git 
・フェーズ:基本設計～システムテスト
・担当フェーズ：基本設計～システムテスト 
・開発規模：500人月
・勤務地：淀屋橋駅`}
              </pre>
              <h4>注目!経営層と社員間の距離感が“何でも言える環境”を作る◎</h4>
              <pre>
                {`現在、従業員数は2名。
代表と取締役2名は同じオフィス内にいるので、
案件状況や不明点の質問、キャリアの相談、
雑談など、何でも気軽に話せます。
元コンサル会社出身で、現在も現役エンジニア
・経営の二足のわらじで働く代表と、
大阪のIT業界を熟知する取締役がいれば、
分からないことは確認しながら
あなたのキャリアを支え、
夢を実現できるでしょう。 
目の届く範囲で働けるからこそ、
“自分から言いづらい”と言うときでも
周りが気づいてフォローしていきますので、
安心してお仕事いただけます。`}
              </pre>
              <h4>
                注目会社の事業拡大と共に、あなた自身も成長を遂げられます！
              </h4>
              <pre>
                {`代表と取締役の人脈から大手の案件や最先端技術などの案件も手掛ける当社。
拡大と共に、お任せできる仕事の幅も広がり続けていっています。
代表や取締役の実体験上、なんでも3年続ける事で壁を越えられると思っています。
ただ、誰の手も借りずに 実力以上のことを続けるのは厳しい。
だからこそ、当社であれば周囲にいる エンジニアの助けも借りて、乗り越えていってください。
乗り越えるためにも、スキルと希望に合わせてあなたの成長につながる案件をアサインします。`}
              </pre>
            </section>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
