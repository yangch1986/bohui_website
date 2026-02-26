import { Helmet } from '@modern-js/runtime/head';

export default function SitPage() {
  return (
    <main>
      <Helmet>
        <title>DARMA 企业办公</title>
        <meta
          name="description"
          content="DARMA 职场人士健康管理系统，提供实时心率、呼吸、HRV 体征监测，适用于企业办公等场景。"
        />
        <meta property="og:title" content="DARMA 企业办公" />
        <meta property="og:description" content="职场人士健康管理系统，实时心率、呼吸、HRV。" />
        <meta property="og:url" content="https://www.darma.cn/sit.html" />
      </Helmet>

      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">企业办公</span>
            <h1>职场人士健康管理系统</h1>
            <p>实时心率、呼吸、HRV</p>
            <ul className="list">
              <li>医疗级检测设备</li>
              <li>实时体征监测</li>
            </ul>
          </div>
          <div className="media">
            <img
              src="https://www.darma.cn/images/sit-hero.81df10bd480ba1c1bf36a0c1c94e12d4.png"
              alt="企业办公系统"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>产品参数</h2>
          <table className="table">
            <tbody>
              <tr>
                <th>产品名称</th>
                <td>坐式医疗级监测设备</td>
              </tr>
              <tr>
                <th>监测方式</th>
                <td>坐式体征监测</td>
              </tr>
              <tr>
                <th>监测内容</th>
                <td>呼吸率、心率、心率变异性（HRV）</td>
              </tr>
              <tr>
                <th>监测场景</th>
                <td>企业办公、医疗机构、家庭</td>
              </tr>
              <tr>
                <th>监测时间</th>
                <td>24 小时实时监测</td>
              </tr>
              <tr>
                <th>传感器</th>
                <td>光纤传感器</td>
              </tr>
              <tr>
                <th>数据传输</th>
                <td>无线传输</td>
              </tr>
              <tr>
                <th>系统配置</th>
                <td>坐垫、设备、APP、平台</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <h2>产品功能</h2>
          <div className="grid-3">
            <div className="card">
              <img src="https://www.darma.cn/images/sit-image1.1532d77aa048ddcd554fe17c32b2c192.png" alt="实时体征监测" />
              <h3>实时体征监测</h3>
            </div>
            <div className="card">
              <img src="https://www.darma.cn/images/sit-image2.6f5b13630b69ad2dc18f9409275469de.png" alt="异常报警" />
              <h3>异常报警</h3>
            </div>
            <div className="card">
              <img src="https://www.darma.cn/images/sit-image3.30d0208ae0a2edbac6c0f120686ab511.png" alt="数据分析" />
              <h3>数据分析</h3>
            </div>
            <div className="card">
              <img src="https://www.darma.cn/images/sit-image4.cde6720bf519bb74db17776827d59c4e.png" alt="远程管理" />
              <h3>远程管理</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container hero-grid">
          <div className="media">
            <img src="https://www.darma.cn/images/sit-image5.1dfcc70d622c5ce73d464ac11977d265.png" alt="应用场景" />
          </div>
          <div>
            <h2>应用场景</h2>
            <p>覆盖企业办公、医疗机构与家庭等坐式健康监测场景。</p>
            <ul className="list">
              <li>实时体征数据采集与趋势分析</li>
              <li>异常报警与及时提醒</li>
              <li>远程管理与多终端查看</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container grid-3">
          <div className="media">
            <img src="https://www.darma.cn/images/sit-image6.f4cb635f3562cffc2967c13c3c0628f0.png" alt="数据平台" />
          </div>
          <div className="media">
            <img src="https://www.darma.cn/images/sit-image7.6f39177a3bb0e79d4547e63d137af073.png" alt="管理系统" />
          </div>
        </div>
      </section>
    </main>
  );
}
