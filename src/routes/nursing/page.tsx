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
            <img src="/media/nursing/dashboard.jpg" alt="智慧养老仪表盘" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid-3">
          <img className="media" src="/media/nursing/case-1.jpg" alt="养老场景1" />
          <img className="media" src="/media/nursing/case-2.jpg" alt="养老场景2" />
          <img className="media" src="/media/nursing/case-3.jpg" alt="养老场景3" />
          <img className="media" src="/media/nursing/case-4.jpg" alt="养老场景4" />
        </div>
      </section>

      <section className="section alt">
        <div className="container hero-grid">
          <div className="media">
            <img src="/media/nursing/dashboard-right.png" alt="机构管理看板" />
          </div>
          <div>
            <h2>机构侧能力</h2>
            <ul className="list">
              <li>床位全景看板：统一查看在床、离床、异常状态</li>
              <li>异常预警：心率、呼吸、离床风险提醒</li>
              <li>数据追溯：个体与群组趋势复盘</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="media">
            <img src="/media/nursing/sleep-report.png" alt="睡眠报告示意" />
          </div>
        </div>
      </section>
    </main>
  );
}
