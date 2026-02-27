import { Helmet } from '@modern-js/runtime/head';

export default function SleepPage() {
  return (
    <main>
      <Helmet>
        <title>智能床垫 | 睡眠与体征监测</title>
        <meta
          name="description"
          content="铂慧智能床垫基于光纤传感技术，提供睡眠、呼吸、心率、体动与HRV连续监测，适用于家庭、养老与医疗机构。"
        />
        <meta property="og:title" content="智能床垫 | 睡眠与体征监测" />
        <meta property="og:description" content="非接触、低负担、长期连续的睡眠与生命体征监测方案。" />
        <meta property="og:url" content="https://bohuitech.cn/sleep" />
      </Helmet>

      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">智能床垫</span>
            <h1>睡眠场景下的无感生命体征监测</h1>
            <p>设备置于床垫下方，不接触皮肤，自动输出夜间健康趋势与风险提醒。</p>
          </div>
          <div className="media">
            <img src="/media/sleep/head-bg.jpg" alt="睡眠管理场景" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid-3">
          <div className="card">
            <img src="/media/sleep/product-1.jpg" alt="智能床垫产品图1" />
            <h3>产品外观</h3>
          </div>
          <div className="card">
            <img src="/media/sleep/product-2.jpg" alt="智能床垫产品图2" />
            <h3>床下部署</h3>
          </div>
          <div className="card">
            <img src="/media/sleep/video-cover.png" alt="产品视频封面" />
            <h3>安装演示</h3>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <h2>App 分析界面</h2>
          <div className="grid-3">
            <img className="media" src="/media/sleep/app-main.png" alt="睡眠APP主界面" />
            <img className="media" src="/media/sleep/app-1.png" alt="睡眠APP界面1" />
            <img className="media" src="/media/sleep/app-2.png" alt="睡眠APP界面2" />
            <img className="media" src="/media/sleep/app-3.png" alt="睡眠APP界面3" />
            <img className="media" src="/media/sleep/product-bg.jpg" alt="产品背景图" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>产品规格</h2>
          <table className="table">
            <tbody>
              <tr><th>型 号</th><td>BH-SM01</td></tr>
              <tr><th>部署方式</th><td>床垫下铺设光纤传感单元</td></tr>
              <tr><th>监测指标</th><td>心率、呼吸率、体动、睡眠过程、HRV</td></tr>
              <tr><th>通信方式</th><td>Wi-Fi</td></tr>
              <tr><th>供电方式</th><td>USB Type-C</td></tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
