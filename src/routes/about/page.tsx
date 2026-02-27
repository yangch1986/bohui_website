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
              技术链路包括传感器硬件、主机信号处理、体征算法与平台化数据服务，支持从单设备到机构级部署。
            </p>
          </div>
          <div className="media">
            <img src="/media/about/bg.jpg" alt="铂慧科技公司介绍" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>核心团队</h2>
          <div className="grid-3">
            <div className="card">
              <img src="/media/about/team-jh.jpg" alt="团队成员1" />
              <h3>产品与技术负责人</h3>
            </div>
            <div className="card">
              <img src="/media/about/team-yc.jpg" alt="团队成员2" />
              <h3>算法与系统负责人</h3>
            </div>
            <div className="card">
              <img src="/media/about/team-sc.jpg" alt="团队成员3" />
              <h3>医学与临床顾问</h3>
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
