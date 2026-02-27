import { Helmet } from '@modern-js/runtime/head';

export default function AboutPage() {
  return (
    <main>
      <Helmet>
        <title>关于我们 | 铂慧科技（深圳）有限公司</title>
        <meta
          name="description"
          content="铂慧科技（深圳）有限公司专注光纤传感器与智能床垫产品研发，面向睡眠健康、养老照护与医疗机构提供连续监测解决方案。"
        />
        <meta property="og:title" content="关于我们 | 铂慧科技（深圳）有限公司" />
        <meta property="og:description" content="以光纤传感技术为核心的智能床垫与健康数据平台提供商。" />
        <meta property="og:url" content="https://bohuitech.cn/about" />
      </Helmet>

      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">公司介绍</span>
            <h1>铂慧科技（深圳）有限公司</h1>
            <p>
              公司专注光纤传感技术在健康监测场景的工程化落地，核心产品为非接触式智能床垫系统，
              覆盖家庭、养老、医疗等连续监测需求。
            </p>
            <p>
              技术链路包括传感器硬件、主机信号处理、体征算法与平台化数据服务，
              支持从单设备到机构级部署。
            </p>
          </div>
          <div className="media">
            <img src="/bohui-logo.svg" alt="铂慧科技" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>技术与产品方向</h2>
          <div className="grid-3">
            <div className="card">
              <h3>光纤传感器</h3>
              <p>强度调制方案，非接触感知微小体征变化。</p>
            </div>
            <div className="card">
              <h3>智能床垫终端</h3>
              <p>床垫下部署，长期运行，低维护成本。</p>
            </div>
            <div className="card">
              <h3>健康数据平台</h3>
              <p>支持个体追踪、群组管理与运营分析。</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container hero-grid">
          <div>
            <h2>商务信息</h2>
            <p>地址信息：深圳市南山区西丽街道留仙大道创智云城 A7 栋 1905 室</p>
            <p>电话：0755 8654 0386</p>
          </div>
          <div className="highlight">如需机构部署方案与接口对接，请电话联系商务团队。</div>
        </div>
      </section>
    </main>
  );
}
