import { Helmet } from '@modern-js/runtime/head';

export default function SitPage() {
  return (
    <main>
      <Helmet>
        <title>铂慧科技 企业办公</title>
        <meta
          name="description"
          content="铂慧科技 职场人士健康管理系统，提供实时心率、呼吸、HRV 体征监测，适用于企业办公等场景。"
        />
        <meta property="og:title" content="铂慧科技 企业办公" />
        <meta property="og:description" content="职场人士健康管理系统，实时心率、呼吸、HRV。" />
        <meta property="og:url" content="https://bohuitech.cn/sit.html" />
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
              src="/bohui-logo.svg"
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
              <img src="/bohui-logo.svg" alt="实时体征监测" />
              <h3>实时体征监测</h3>
            </div>
            <div className="card">
              <img src="/bohui-logo.svg" alt="异常报警" />
              <h3>异常报警</h3>
            </div>
            <div className="card">
              <img src="/bohui-logo.svg" alt="数据分析" />
              <h3>数据分析</h3>
            </div>
            <div className="card">
              <img src="/bohui-logo.svg" alt="远程管理" />
              <h3>远程管理</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container hero-grid">
          <div className="media">
            <img src="/bohui-logo.svg" alt="应用场景" />
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
            <img src="/bohui-logo.svg" alt="数据平台" />
          </div>
          <div className="media">
            <img src="/bohui-logo.svg" alt="管理系统" />
          </div>
        </div>
      </section>
    </main>
  );
}
