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
            <p>传感层捕获光强变化，算法层完成信号重建、周期检测与趋势分析。</p>
          </div>
          <div className="media">
            <img src="/media/tech/header-cover.png" alt="核心技术展示" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>光纤传感原理</h2>
          <div className="grid-3">
            <div className="card">
              <img src="/media/tech/fibre.jpg" alt="恒定光注入" />
              <h3>恒定光注入</h3>
            </div>
            <div className="card">
              <img src="/media/tech/fibre-struct.jpg" alt="受压后光损耗变化" />
              <h3>受压后光损耗变化</h3>
            </div>
            <div className="card">
              <img src="/media/tech/ecg-heart.gif" alt="信号重建与特征提取" />
              <h3>信号重建与特征提取</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <h2>BCG-HRV 关键能力</h2>
          <div className="grid-3">
            <div className="card">
              <img src="/media/tech/bcg-1.png" alt="BCG 波形" />
              <h3>BCG 心冲击图</h3>
            </div>
            <div className="card">
              <img src="/media/tech/bcg-2.png" alt="J-J 间期" />
              <h3>J-J 间期分析</h3>
            </div>
            <div className="card">
              <img src="/media/tech/bcg-3.png" alt="HRV 一致性" />
              <h3>HRV 指标输出</h3>
            </div>
          </div>
          <div className="media" style={{ marginTop: 24 }}>
            <img src="/media/tech/bcg-4.png" alt="BCG ECG 对比" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid-3">
          <img className="media" src="/media/tech/step-2.png" alt="技术图 2" />
          <img className="media" src="/media/tech/step-3.png" alt="技术图 3" />
          <img className="media" src="/media/tech/step-4.png" alt="技术图 4" />
          <img className="media" src="/media/tech/step-5.png" alt="技术图 5" />
          <img className="media" src="/media/tech/step-6.png" alt="技术图 6" />
          <img className="media" src="/media/tech/step-7.png" alt="技术图 7" />
        </div>
      </section>
    </main>
  );
}
