import { Helmet } from '@modern-js/runtime/head';

export default function SitPage() {
  return (
    <main>
      <Helmet>
        <title>企业健康方案 | 铂慧科技</title>
        <meta
          name="description"
          content="铂慧科技企业健康方案基于光纤传感与睡眠数据，帮助企业开展员工健康关怀与长期趋势评估。"
        />
        <meta property="og:title" content="企业健康方案 | 铂慧科技" />
        <meta property="og:description" content="从睡眠与恢复数据出发，构建企业健康管理闭环。" />
        <meta property="og:url" content="https://bohuitech.cn/sit" />
      </Helmet>

      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">企业办公</span>
            <h1>企业员工健康趋势管理</h1>
            <p>以非接触监测为基础，持续采集睡眠与恢复指标，为企业健康管理提供客观数据支持。</p>
          </div>
          <div className="media">
            <img src="/bohui-logo.svg" alt="企业健康方案" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>方案价值</h2>
          <div className="grid-3">
            <div className="card">
              <h3>长期趋势评估</h3>
              <p>按周/月查看睡眠与恢复变化，减少单次测量误差影响。</p>
            </div>
            <div className="card">
              <h3>高风险人群识别</h3>
              <p>基于夜间体征与异常波动，提前发现需重点关注对象。</p>
            </div>
            <div className="card">
              <h3>健康项目量化</h3>
              <p>用于评估健康干预前后效果，支撑企业决策。</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <h2>适配场景</h2>
          <ul className="list">
            <li>企业员工健康计划</li>
            <li>高压岗位恢复管理</li>
            <li>保险与健康服务联合项目</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
