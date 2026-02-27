import { Helmet } from '@modern-js/runtime/head';

export default function HomePage() {
  return (
    <main>
      <Helmet>
        <title>铂慧科技 | 光纤传感智能床垫</title>
        <meta
          name="description"
          content="铂慧科技（深圳）有限公司专注光纤传感器与智能床垫，提供非接触式心率、呼吸、体动、睡眠与HRV连续监测能力。"
        />
        <meta property="og:title" content="铂慧科技 | 光纤传感智能床垫" />
        <meta property="og:description" content="一次安装，无感监测，持续输出可解释的睡眠与体征趋势数据。" />
        <meta property="og:url" content="https://bohuitech.cn/" />
      </Helmet>

      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">光纤传感器 · 智能床垫</span>
            <h1>非接触、医疗级趋势监测</h1>
            <p className="tag">一次安装，长期连续监测</p>
            <p>
              铂慧智能床垫基于强度调制光纤传感技术，在床垫下完成心率、呼吸率、体动与睡眠过程感知，
              适用于家庭、养老机构和医疗场景。
            </p>
            <div className="stats">
              <div className="stat">
                <strong>非接触</strong>无需穿戴、无需贴片
              </div>
              <div className="stat">
                <strong>24h</strong>连续体征监测
              </div>
              <div className="stat">
                <strong>BCG/HRV</strong>支持自主神经分析
              </div>
              <div className="stat">
                <strong>Wi-Fi</strong>自动同步到平台
              </div>
            </div>
          </div>
          <div className="media">
            <video src="/media/home/hero-video.mp4" poster="/media/home/fibre-cover.png" autoPlay muted loop playsInline controls />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>技术优势</h2>
          <div className="grid-3">
            <div className="card">
              <img src="/media/home/icon-thin.png" alt="非接触 无感 超薄" />
              <h3>非接触 无感 超薄</h3>
              <p>传感模块位于床垫下方，用户无感知，适合持续监测。</p>
            </div>
            <div className="card">
              <img src="/media/home/icon-case.png" alt="灵活定制 高效可靠" />
              <h3>灵活定制 高效可靠</h3>
              <p>可按场景定制传感区域与部署规模。</p>
            </div>
            <div className="card">
              <img src="/media/home/care-bg.png" alt="适用性高 覆盖面广" />
              <h3>适用性高 覆盖面广</h3>
              <p>适配居家、养老、医疗多场景体征管理需求。</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container hero-grid">
          <div>
            <h2>应用与平台</h2>
            <p>采集端 + 算法端 + 平台端，形成完整的数据闭环。</p>
          </div>
          <div className="media">
            <img src="/media/home/tech-preview.png" alt="铂慧解决方案概览" />
          </div>
        </div>
      </section>
    </main>
  );
}
