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
        <meta
          property="og:description"
          content="一次安装，无感监测，持续输出可解释的睡眠与体征趋势数据。"
        />
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
            <img src="/bohui-logo.svg" alt="铂慧科技logo" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>为什么选择光纤传感智能床垫</h2>
          <div className="grid-3">
            <div className="card">
              <h3>无感监测，依从性高</h3>
              <p>设备放置在床垫下方，不改变用户睡眠行为，适合长期持续使用。</p>
            </div>
            <div className="card">
              <h3>抗电磁干扰，安全稳定</h3>
              <p>光纤电绝缘、抗干扰，适合复杂环境下的连续测量。</p>
            </div>
            <div className="card">
              <h3>高灵敏度</h3>
              <p>微小压力变化可引起可检测的光强变化，支持精细生命体征趋势分析。</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <h2>核心监测指标</h2>
          <div className="grid-3">
            <div className="card">
              <h3>睡眠结构</h3>
              <p>睡眠时长、睡眠连续性、夜间觉醒与体动趋势。</p>
            </div>
            <div className="card">
              <h3>心肺体征</h3>
              <p>夜间心率、呼吸率与异常波动识别。</p>
            </div>
            <div className="card">
              <h3>HRV 分析</h3>
              <p>通过 BCG 心动周期提取 HRV，支持压力与自主神经状态评估。</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container hero-grid">
          <div>
            <h2>部署流程</h2>
            <ul className="list">
              <li>床垫下铺设光纤传感单元</li>
              <li>主机接电并连接 Wi-Fi</li>
              <li>自动采集并上传数据</li>
              <li>平台端查看个体与群组趋势</li>
            </ul>
          </div>
          <div className="highlight">
            目标：把睡眠监测从“单次检测”升级为“连续、低负担、可运营”的长期服务能力。
          </div>
        </div>
      </section>
    </main>
  );
}
