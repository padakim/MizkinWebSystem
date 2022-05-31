const Banner = () => {
  return (
    <>
      <div className="page-one">
        <h1>テクノロジーで生活を彩り、理想の生活に</h1>
        <h3>
          科学技術の進歩により、経済の飛躍的発展が促進されます。
          <br />
          イノベーションにより生活を彩り、理想的な社会の構築を目指します。
        </h3>
        <button className="explore-btn">More</button>
        <a href="https://tongle.mizkin.co.jp">
          <h3>
            弊社が同楽フリーランスサービスを開始いたしました。詳細はこのURLを確認してください。
          </h3>
        </a>
      </div>
      <div className="page-two">
        <h1>テクノロジーは世界を変える</h1>
        <h3>
          科学的発展を基礎とし、自主的な革新を重視し、科学技術の進歩を加速させる。{" "}
          <br />
          科学技術の創造性を集め、革新的な夢を実現する。
        </h3>
        <button className="explore-btn">More</button>
      </div>
    </>
  );
};

export default Banner;
