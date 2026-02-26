import { Helmet } from '@modern-js/runtime/head';

export default function HomePage() {
  return (
    <main>
      <Helmet>
        <title>DARMA 光纤传感器</title>
        <meta
          name="description"
          content="DARMA 光纤传感器，全球领先的生命体征传感技术，医疗级采集心率、呼吸率等生命体征数据。"
        />
        <meta property="og:title" content="DARMA 光纤传感器" />
        <meta property="og:description" content="全球领先的生命体征传感技术。" />
        <meta property="og:url" content="https://www.darma.cn/" />
      </Helmet>

      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">DARMA 光纤传感器</span>
            <h1>全球领先的生命体征传感技术</h1>
            <p className="tag">光纤传感器，“我”即精确</p>
            <p>采集人体心率、呼吸率等生命体征数据达医疗级别。</p>
            <p>通过算法和大数据分析为健康保驾护航。</p>
            <div className="stats">
              <div className="stat">
                <strong>70+</strong>养老平台机构
              </div>
              <div className="stat">
                <strong>20+</strong>医疗合作实验机构
              </div>
              <div className="stat">
                <strong>135 例</strong>3家三甲医院 CFDA 临床数据
              </div>
              <div className="stat">
                <strong>80 例</strong>FDA 临床数据
              </div>
            </div>
          </div>
          <div className="media">
            <img
              src="https://www.darma.cn/images/home-cfda-fda.2b6bfef3f4862927a7cb3b86b4d15025.png"
              alt="铂慧 CFDA，FDA 认证"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>技术优势</h2>
          <div className="grid-3">
            <div className="card">
              <img
                src="https://www.darma.cn/images/home-fibre-icon-thick-active.d57cddb3fe792905aa94cba27a24d940.png"
                alt="非接触 无感 超薄"
              />
              <h3>非接触 无感 超薄</h3>
              <p>0.5 米厚床垫下数据依然准确。</p>
            </div>
            <div className="card">
              <img
                src="https://www.darma.cn/images/home-fibre-icon-case-active.1204e4e55eb7d2e1f710131abb6e5fce.png"
                alt="灵活定制 高效可靠"
              />
              <h3>灵活定制 高效可靠</h3>
              <p>X 类型，灵活定制尺寸，大小任您选择。</p>
            </div>
            <div className="card">
              <h3>适用性高 覆盖面广</h3>
              <p>N + 覆盖众多场景：床、座椅等。</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container hero-grid">
          <div>
            <h2>应用场景</h2>
            <p>物联网 + 云 + 数据展示平台</p>
          </div>
          <div className="media">
            <img
              src="https://www.darma.cn/images/home-tech-prew.5270176af8f549e21bed55956cc8bd4b.png"
              alt="铂慧解决方案概览"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
