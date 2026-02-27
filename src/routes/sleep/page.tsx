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
            <div className="stats">
              <div className="stat">
                <strong>非接触</strong>更适合长期连续监测
              </div>
              <div className="stat">
                <strong>自动化</strong>无需手动打卡记录
              </div>
              <div className="stat">
                <strong>可扩展</strong>支持机构级平台管理
              </div>
            </div>
          </div>
          <div className="media">
            <img src="/bohui-logo.svg" alt="铂慧智能床垫" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>核心功能</h2>
          <div className="grid-3">
            <div className="card">
              <h3>睡眠质量评分</h3>
              <p>结合睡眠连续性、觉醒次数与体动变化形成综合评分。</p>
            </div>
            <div className="card">
              <h3>夜间心肺趋势</h3>
              <p>持续监测心率、呼吸率变化，辅助发现异常波动时段。</p>
            </div>
            <div className="card">
              <h3>HRV 评估</h3>
              <p>支持压力恢复状态与自主神经平衡趋势评估。</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <h2>典型使用场景</h2>
          <div className="grid-3">
            <div className="card">
              <h3>居家健康管理</h3>
              <p>面向家庭用户的长期夜间监测与睡眠改善支持。</p>
            </div>
            <div className="card">
              <h3>养老机构照护</h3>
              <p>支持多床位统一管理，提升夜间巡视效率。</p>
            </div>
            <div className="card">
              <h3>医疗随访</h3>
              <p>为术后康复、慢病管理提供连续趋势数据。</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>产品规格</h2>
          <table className="table">
            <tbody>
              <tr>
                <th>型 号</th>
                <td>BH-SM01</td>
              </tr>
              <tr>
                <th>部署方式</th>
                <td>床垫下铺设光纤传感单元</td>
              </tr>
              <tr>
                <th>监测指标</th>
                <td>心率、呼吸率、体动、睡眠过程、HRV</td>
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
    </main>
  );
}
