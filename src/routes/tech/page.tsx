import { Helmet } from '@modern-js/runtime/head';

export default function TechPage() {
  return (
    <main>
      <Helmet>
        <title>铂慧科技 核心技术</title>
        <meta
          name="description"
          content="铂慧科技 核心技术基于光纤传感器，提供心震图 BCG 与心电图 ECG 传感能力，并拥有多项核心专利。"
        />
        <meta property="og:title" content="铂慧科技 核心技术" />
        <meta property="og:description" content="小身躯，大作为。光纤传感器的医疗级体征数据采集与算法能力。" />
        <meta property="og:url" content="https://bohuitech.cn/tech.html" />
      </Helmet>

      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">核心技术</span>
            <h1>小身躯，大作为</h1>
            <ul className="list">
              <li>易于使用</li>
              <li>接入方便</li>
              <li>多维度体征数据</li>
              <li>多样化服务功能</li>
            </ul>
            <div className="stats">
              <div className="stat">
                <strong>20 项</strong>技术专利
              </div>
              <div className="stat">
                <strong>9 项</strong>软件著作权
              </div>
              <div className="stat">
                <strong>1 项</strong>CFDA 证书
              </div>
            </div>
          </div>
          <div className="media">
            <img
              src="/bohui-logo.svg"
              alt="核心技术展示"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>核心专利技术</h2>
          <p>部分专利展示</p>
          <div className="grid-3">
            <img className="media" src="/bohui-logo.svg" alt="核心专利 1" />
            <img className="media" src="/bohui-logo.svg" alt="核心专利 2" />
            <img className="media" src="/bohui-logo.svg" alt="核心专利 3" />
            <img className="media" src="/bohui-logo.svg" alt="核心专利 4" />
            <img className="media" src="/bohui-logo.svg" alt="核心专利 5" />
            <img className="media" src="/bohui-logo.svg" alt="核心专利 6" />
            <img className="media" src="/bohui-logo.svg" alt="核心专利 7" />
            <img className="media" src="/bohui-logo.svg" alt="核心专利 8" />
            <img className="media" src="/bohui-logo.svg" alt="核心专利 9" />
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container hero-grid">
          <div>
            <h2>BCG & ECG</h2>
            <p>
              <strong>BCG（心震图）</strong>传感技术来自于光纤传感科技，用于检测人体心脏活动时产生的运动信号，通过信号处理提取心跳产生的心律及心率信息。
            </p>
            <p>
              <strong>ECG（心电图）</strong>传感技术用于检测人体心脏活动时产生的电信号，通过检测电信号揭示心脏搏动所引起的电位变化，实现心脏活动时每个阶段的波形显示。
            </p>
          </div>
          <div className="media">
            <img
              src="/bohui-logo.svg"
              alt="ECG 心脏动态"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>铂慧科技 医疗级产品 24导联 BCG & ECG & HRV</h2>
          <div className="grid-3">
            <div className="card">
              <img src="/bohui-logo.svg" alt="R-R 间期" />
              <h3>R-R 间期</h3>
              <p>正常心率间期</p>
            </div>
            <div className="card">
              <img src="/bohui-logo.svg" alt="J-J 间期" />
              <h3>J-J 间期</h3>
              <p>BCG 波形信号间隔</p>
            </div>
            <div className="card">
              <img src="/bohui-logo.svg" alt="HRV 一致性对比" />
              <h3>BCG & ECG HRV 一致性对比</h3>
              <p>心率变异性一致性分析</p>
            </div>
          </div>
          <div className="media" style={{ marginTop: 28 }}>
            <img src="/bohui-logo.svg" alt="BCG & ECG 波形" />
          </div>
        </div>
      </section>
    </main>
  );
}
