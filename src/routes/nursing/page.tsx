import { Helmet } from '@modern-js/runtime/head';

export default function NursingPage() {
  return (
    <main>
      <Helmet>
        <title>智慧养老方案 | 铂慧科技</title>
        <meta
          name="description"
          content="铂慧科技智慧养老方案以智能床垫为核心，提供夜间体征监测、异常提醒和机构级看板管理。"
        />
        <meta property="og:title" content="智慧养老方案 | 铂慧科技" />
        <meta property="og:description" content="面向养老机构的连续监测与照护运营平台。" />
        <meta property="og:url" content="https://bohuitech.cn/nursing" />
      </Helmet>

      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">智慧养老</span>
            <h1>夜间照护数字化监测平台</h1>
            <p>将床旁感知、风险提醒和机构管理看板打通，帮助护理团队提升响应效率。</p>
          </div>
          <div className="media">
            <img src="/bohui-logo.svg" alt="智慧养老方案" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>机构侧能力</h2>
          <div className="grid-3">
            <div className="card">
              <h3>床位全景看板</h3>
              <p>统一查看在床、离床、异常状态，快速定位高优先级对象。</p>
            </div>
            <div className="card">
              <h3>异常预警</h3>
              <p>对心率、呼吸、离床风险等进行提醒，辅助护理决策。</p>
            </div>
            <div className="card">
              <h3>数据追溯</h3>
              <p>沉淀个体与群组趋势，支持护理质量与运营复盘。</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <h2>部署模式</h2>
          <ul className="list">
            <li>单床接入：适合试点验证</li>
            <li>整层接入：适合护理单元统一管理</li>
            <li>多机构接入：支持集团化运营分析</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
