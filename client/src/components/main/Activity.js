import styled from "styled-components";
import Responsive from "../common/Responsive";
import palette from "../../lib/styles/palette";
import MainItemWrapper from "../common/MainItemWrapper";
import Modal1 from "./Modal1";
import Modal2 from "./Modal2";
import Modal3 from "./Modal3";
import InfoButtons from "./InfoButtons";

const Wrapper = styled(Responsive)`
  section {
    display: grid;
    justify-items: center;
    max-width: 1180px;
    padding-bottom: 1rem;
    margin: 1rem 0;
  }
  h2 {
    font-size: 34px;
    color: ${palette.textColors[1]};
  }
  h2::after {
    content: "";
    display: block;
    width: 80%;
    height: 4px;
    background-color: ${palette.primaryColor[0]};
    margin-top: 8px;
    transform: translateX(10%);
  }
  h4,
  p {
    margin: 1rem;
  }
  .intro {
    font-size: 24px;
    color: ${palette.textColorsGray[2]};
  }
  a {
    font-size: 18px;
    margin: 0 0 20px 0;
    text-decoration-line: none;
    color: #181818;
  }
  a:hover {
    opacity: 0.7;
  }
  .recruit-button {
    padding: 11px 24px;
    background-color: ${palette.primaryColor[0]};
    border: none;
    border-radius: 5px;
    font-size: 18px;
    cursor: pointer;
    outline: none;
    margin-bottom: 25px;
  }
  .recruit-button:hover {
    opacity: 0.7;
    cursor: pointer;
  }
  .recruit-intro {
    margin: 1rem;
  }
  h3 {
    text-align: center;
    margin: 1rem;
    color: ${palette.textColors[3]};
  }
  img {
    width: 600px;
    height: 90px;
  }
  .activities {
    display: grid;
    grid-template-columns: repeat(3, 20rem);
    grid-template-rows: repeat(2, 10rem);
    row-gap: 3rem;
    column-gap: 1rem;
  }
  .activity-title {
    grid-area: title;
    font-size: 18px;
    color: ${palette.textColors[2]};
  }
  .activity-content {
    grid-area: content;
    color: ${palette.textColorsGray[1]};
    line-height: 30px;
    font-size: 16px;
    margin-top: 8px;
  }
  .application-info {
    margin-top: 5rem;
  }
`;

const Activity = () => {
  return (
    <Wrapper>
      <section>
        <h2>採用情報</h2>
        <p className="intro">正社員、各種社会保険完備、応募受付中</p>
        <a
          className="recruit-link"
          href="https://type.jp/job-1/1261556_detail/?pathway=5"
          target="_blank"
        >
          Typeの求人情報へ
        </a>
        <button className="recruit-button">応募</button>
        <div className="recruit-intro">
          <h3>SEからたった2年でもPL・PMへステップアップできる！</h3>
          <InfoButtons />
        </div>
        <div className="activities">
          <MainItemWrapper>
            <Modal1>
              <div>
                <h3>【会社取材】</h3>
                <p>
                  高い還元率！！（70％以上）
                  <br /> 自由な雰囲気（フルリモートOK）
                  <br />
                  副業OK・支援あり
                </p>
                <h5>詳細はClick!</h5>
              </div>
            </Modal1>
          </MainItemWrapper>
          <MainItemWrapper>
            <Modal2>
              <div>
                <h3>【雇用条件・応募資格】</h3>
                <p>
                  雇用形態 : 正社員
                  <br />
                  想定給与 : 前職給与以上保証
                  <br />
                  月給 : 350,000円～1,200,000円
                  <br />
                </p>
                <h5>詳細はClick!</h5>
              </div>
            </Modal2>
          </MainItemWrapper>
          <MainItemWrapper>
            <Modal3>
              <div>
                <h3>【主な仕事内容】</h3>
                <pre>
                  ・システム開発・運用・保守
                  <br />
                  ・プロジェクトマネジメント
                  <br />
                  ・ソリューション企画提案
                </pre>
                <h5>詳細はClick!</h5>
              </div>
            </Modal3>
          </MainItemWrapper>
          <MainItemWrapper>
            <h4 className="activity-title">プログラマー</h4>
            <p className="activity-content">
              業務システム開発経験・Webアプリケーション開発経験が通算して1年以上ある方
            </p>
          </MainItemWrapper>
          <MainItemWrapper>
            <h4 className="activity-title">システムエンジニア</h4>
            <p className="activity-content">
              業務システム開発経験・Webアプリケーション開発経験が通算して3年以上ある方
            </p>
          </MainItemWrapper>
          <MainItemWrapper>
            <h4 className="activity-title">プロジェクトリーダー</h4>
            <p className="activity-content">
              業務システム開発経験・Webアプリケーション開発経験が通算して5年以上
              <br />
              プロジェクトリーダー経験が通算して1年以上ある方
            </p>
          </MainItemWrapper>
        </div>
        <p className="application-info">
          採用方法：履歴書、職務経歴書による書類選考　⇒　面接（原則２回）
          <br />
          E-mail：recruit@mizkin.co.jpにてご連絡ください。
        </p>
      </section>
    </Wrapper>
  );
};

export default Activity;
