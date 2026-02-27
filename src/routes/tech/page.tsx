import { Helmet } from '@modern-js/runtime/head';

export default function TechPage() {
  return (
    <main>
      <Helmet>
        <title>核心技术 | 光纤传感与 BCG-HRV</title>
        <meta
          name="description"
          content="铂慧科技核心技术：强度调制光纤传感、BCG 心冲击图提取与 HRV 分析，用于非接触式生命体征连续监测。"
        />
        <meta property="og:title" content="核心技术 | 光纤传感与 BCG-HRV" />
        <meta property="og:description" content="从光强变化到生命体征与自主神经分析的完整技术链路。" />
        <meta property="og:url" content="https://bohuitech.cn/tech" />
      </Helmet>

      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">核心技术</span>
            <h1>强度调制光纤传感 + BCG-HRV 算法</h1>
            <p>
              传感层负责捕获压力导致的光强变化，算法层完成信号重建、周期检测与趋势分析，
              最终输出可解释的生理指标。
            </p>
            <div className="stats">
              <div className="stat">
                <strong>光源-光纤-探测器</strong>三段式感知链路
              </div>
              <div className="stat">
                <strong>J-J 间期</strong>对应心动周期
              </div>
              <div className="stat">
                <strong>HRV</strong>支持 LF/HF 等频域分析
              </div>
            </div>
          </div>
          <div className="media">
            <img src="/bohui-logo.svg" alt="光纤传感技术" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>光纤传感原理</h2>
          <div className="grid-3">
            <div className="card">
              <h3>步骤 1：恒定光注入</h3>
              <p>主机向回环光纤注入恒定强度光信号。</p>
            </div>
            <div className="card">
              <h3>步骤 2：受压后光损耗变化</h3>
              <p>人体微小压力变化引起光纤损耗变化，表现为光强波动。</p>
            </div>
            <div className="card">
              <h3>步骤 3：电流变化与信号重建</h3>
              <p>探测器将光强变化转为电信号，算法提取体征特征。</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <h2>BCG-HRV 关键能力</h2>
          <div className="grid-3">
            <div className="card">
              <h3>BCG 心冲击图</h3>
              <p>通过非接触感知捕捉心脏射血引起的微小机械振动。</p>
            </div>
            <div className="card">
              <h3>J-J 间期分析</h3>
              <p>J-J 间期可用于心动周期分析，支持与 ECG 指标进行一致性对照。</p>
            </div>
            <div className="card">
              <h3>HRV 指标输出</h3>
              <p>支持 SDNN、LF、HF 与 LF/HF 等指标，用于压力与恢复状态评估。</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>传感器优势</h2>
          <ul className="list">
            <li>高灵敏度：细微压力变化即可感知</li>
            <li>柔性可集成：可按床垫结构定制布设</li>
            <li>电绝缘与安全性高：无漏电风险</li>
            <li>抗电磁干扰：适合复杂医疗与养老环境</li>
            <li>耐久性好：支持长期连续运行</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
