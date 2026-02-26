import { Helmet } from '@modern-js/runtime/head';

export default function NursingPage() {
  return (
    <main>
      <Helmet>
        <title>DARMA 智慧养老</title>
        <meta
          name="description"
          content="DARMA 智慧养老多维度体征监测产品，健康体征数据实时采集，适用于养老机构、社区与居家养老场景。"
        />
        <meta property="og:title" content="DARMA 智慧养老" />
        <meta property="og:description" content="多维度体征监测产品，健康体征数据实时采集。" />
        <meta property="og:url" content="https://www.darma.cn/nursing.html" />
      </Helmet>

      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">智慧养老</span>
            <h1>多维度体征监测产品</h1>
            <p>健康体征数据实时采集</p>
            <ul className="list">
              <li>医疗级检测设备</li>
              <li>实时体征监测</li>
            </ul>
          </div>
          <div className="media">
            <img
              src="https://www.darma.cn/images/nursing-hero.1c7c4fc7d6298248fa26fe36d0e86dd0.png"
              alt="智慧养老产品"
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
                <td>医疗级监测设备</td>
              </tr>
              <tr>
                <th>监测方式</th>
                <td>多维度体征监测</td>
              </tr>
              <tr>
                <th>监测内容</th>
                <td>呼吸率、心率、睡眠时长、卧床时间、离床时间、翻身次数、心率变异性（HRV）</td>
              </tr>
              <tr>
                <th>监测场景</th>
                <td>养老机构、社区、居家养老</td>
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
                <td>床垫、设备、APP、平台</td>
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
              <img src="https://www.darma.cn/images/nursing-image1.68e8fed32047b7ec4c3cda6c1aa2f16c.png" alt="实时体征监测" />
              <h3>实时体征监测</h3>
            </div>
            <div className="card">
              <img src="https://www.darma.cn/images/nursing-image2.a96a4eb73a7aabaf21b735c1ae5ec253.png" alt="异常报警" />
              <h3>异常报警</h3>
            </div>
            <div className="card">
              <img src="https://www.darma.cn/images/nursing-image3.7a66b4d7a65a91b6e58b6068fd50d75d.png" alt="数据分析" />
              <h3>数据分析</h3>
            </div>
            <div className="card">
              <img src="https://www.darma.cn/images/nursing-image4.21b35b75dc2d10bdb6b38c4e36d75882.png" alt="远程管理" />
              <h3>远程管理</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container hero-grid">
          <div className="media">
            <img src="https://www.darma.cn/images/nursing-image5.47999f9cb72241f0c5e48b9d67f2ec44.png" alt="场景展示" />
          </div>
          <div>
            <h2>应用场景</h2>
            <p>适用于养老机构、社区与居家养老的体征监测与管理。</p>
            <ul className="list">
              <li>实时体征数据采集与趋势分析</li>
              <li>异常报警与护理响应</li>
              <li>远程管理与多终端查看</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container grid-3">
          <div className="media">
            <img src="https://www.darma.cn/images/nursing-image6.d16906658d4b92327c7772b2f6b3da96.png" alt="智慧养老平台" />
          </div>
          <div className="media">
            <img src="https://www.darma.cn/images/nursing-image7.101626cdfad220cb96384bd9fd80a297.png" alt="数据管理" />
          </div>
          <div className="media">
            <img src="https://www.darma.cn/images/nursing-image8.cb6f241bd30d21804decb5ee7d42d305.png" alt="护理管理" />
          </div>
        </div>
      </section>
    </main>
  );
}
