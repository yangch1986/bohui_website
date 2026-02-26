import { Helmet } from '@modern-js/runtime/head';

export default function SleepPage() {
  return (
    <main>
      <Helmet>
        <title>铂慧科技 睡眠管理</title>
        <meta
          name="description"
          content="铂慧科技 应用广泛的睡眠健康管理系统，实时心率、呼吸、睡眠监测，适用于家庭、社区、医院与养老院。"
        />
        <meta property="og:title" content="铂慧科技 睡眠管理" />
        <meta property="og:description" content="应用广泛的睡眠健康管理系统。" />
        <meta property="og:url" content="https://bohuitech.cn/sleep.html" />
      </Helmet>

      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">睡眠管理</span>
            <h1>应用广泛的睡眠健康管理系统</h1>
            <p>实时心率、呼吸、睡眠</p>
          </div>
          <div className="media">
            <div style={{ padding: 40, textAlign: 'center', color: 'var(--muted)' }}>睡眠管理产品图片待补充</div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>安稳睡眠，活力每一天</h2>
          <p>记录睡眠习惯及精准的睡眠分期，定期推送健康报告，预警疾病风险。</p>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <h2>睡眠质量，清晰明了</h2>
          <div className="grid-3">
            <div className="card">
              <h3>睡眠评分</h3>
              <p>量化睡眠质量，易于长期追踪。</p>
            </div>
            <div className="card">
              <h3>睡眠分期</h3>
              <p>深入了解浅睡、深睡、清醒阶段变化。</p>
            </div>
            <div className="card">
              <h3>睡眠习惯</h3>
              <p>形成可视化趋势，帮助改善作息。</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>发现睡眠问题</h2>
          <ul className="list">
            <li>入睡困难</li>
            <li>睡眠焦虑症</li>
            <li>深睡时间少</li>
            <li>醒来太早</li>
          </ul>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <h2>改善睡眠效果</h2>
          <ul className="list">
            <li>减少咖啡、茶水摄入</li>
            <li>运动放松心理调节</li>
            <li>远离手机</li>
            <li>调节睡眠环境</li>
            <li>监测睡眠改善效果</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>体验先进的睡眠跟踪</h2>
          <p>通过精准的睡眠分期，深入分析您的睡眠质量。</p>
          <div className="grid-3">
            <div className="card">
              <h3>手机 APP 睡眠分析报告</h3>
              <p>睡眠综合评分与趋势分析。</p>
            </div>
            <div className="card">
              <h3>多维度体征变化</h3>
              <p>心率、呼吸率、体动变化趋势。</p>
            </div>
            <div className="card">
              <h3>健康趋势一目了然</h3>
              <p>图片素材来源于 katemangostar / Freepik。</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <h2>产品规格</h2>
          <table className="table">
            <tbody>
              <tr>
                <th>型&nbsp;&nbsp;&nbsp;&nbsp;号</th>
                <td>DM-WS05</td>
              </tr>
              <tr>
                <th>尺&nbsp;&nbsp;&nbsp;&nbsp;寸</th>
                <td>830mm * 120mm * 8mm</td>
              </tr>
              <tr>
                <th>重&nbsp;&nbsp;&nbsp;&nbsp;量</th>
                <td>980 克</td>
              </tr>
              <tr>
                <th>颜&nbsp;&nbsp;&nbsp;&nbsp;色</th>
                <td>灰色</td>
              </tr>
              <tr>
                <th>通信方式</th>
                <td>Wi-Fi</td>
              </tr>
              <tr>
                <th>供电方式</th>
                <td>USB Type-C</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>睡眠质量分析</h2>
          <ul className="list">
            <li>睡眠评分</li>
            <li>睡眠分期</li>
            <li>睡眠习惯</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
