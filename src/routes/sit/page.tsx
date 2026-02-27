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
            <img src="/media/sit/product.png" alt="企业健康产品" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid-3">
          <div className="card">
            <img src="/media/sit/product-app.png" alt="产品与APP" />
            <h3>产品与APP联动</h3>
          </div>
          <div className="card">
            <img src="/media/sit/app-1.png" alt="企业端界面1" />
            <h3>数据趋势</h3>
          </div>
          <div className="card">
            <img src="/media/sit/app-2.png" alt="企业端界面2" />
            <h3>风险识别</h3>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container hero-grid">
          <div className="media">
            <img src="/media/sit/tips.png" alt="健康提示" />
          </div>
          <div>
            <h2>方案价值</h2>
            <ul className="list">
              <li>长期趋势评估：按周/月观察变化</li>
              <li>高风险识别：提前发现重点关注对象</li>
              <li>项目量化：评估健康干预效果</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid-3">
          <img className="media" src="/media/sit/video-cover.jpg" alt="场景视频封面" />
          <img className="media" src="/media/sit/bg-4.jpg" alt="场景图4" />
          <img className="media" src="/media/sit/bg-5.jpg" alt="场景图5" />
        </div>
      </section>
    </main>
  );
}
