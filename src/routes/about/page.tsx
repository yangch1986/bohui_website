import { Helmet } from '@modern-js/runtime/head';

export default function AboutPage() {
  return (
    <main>
      <Helmet>
        <title>DARMA 关于我们</title>
        <meta
          name="description"
          content="深圳市铂慧科技有限公司成立于2014年，核心技术为光纤传感技术（DARMA光纤传感器）。"
        />
        <meta property="og:title" content="DARMA 关于我们" />
        <meta property="og:description" content="公司介绍、管理团队、发展历程与联系方式。" />
        <meta property="og:url" content="https://www.darma.cn/about.html" />
      </Helmet>

      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">公司介绍</span>
            <h1>深圳市铂慧科技有限公司</h1>
            <p>
              成立于 2014 年，总部位于中国深圳硅谷——南山区。公司主要创始成员来自美国硅谷谷歌、惠普，核心技术为光纤传感技术（DARMA 光纤传感器）。
            </p>
            <p>公司潜心光纤传感技术研究，在微光电机和传感器方面拥有深厚积累。已获得国内外技术专利 20 项，软件著作权 9 项。</p>
          </div>
          <div className="media">
            <img src="https://www.darma.cn/images/about.9d55ca2df2d2c63c1d1efb6f67a0358a.png" alt="公司介绍" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>管理团队</h2>
          <div className="grid-3">
            <div className="card">
              <img src="https://www.darma.cn/images/about-image1.67ab7bbb2b49248066a89c9a2e2697f2.png" alt="胡俊豪 CEO" />
              <h3>胡俊豪（CEO）</h3>
              <p>铂慧科技创始人，曾任谷歌工程师、惠普研发人员，拥有产品设计与技术商业化经验。</p>
            </div>
            <div className="card">
              <img src="https://www.darma.cn/images/about-image2.24aab2fb27f77a53e8bc11499923e268.png" alt="杨超 CTO" />
              <h3>杨超（CTO）</h3>
              <p>曾任惠普、BlackBerry 高级研发工程师，擅长微光电机与传感器技术开发。</p>
            </div>
            <div className="card">
              <img src="https://www.darma.cn/images/about-image3.696a0a31df11c5be73fab7afc219eae9.png" alt="庄少春 医学主管" />
              <h3>庄少春（医学主管）</h3>
              <p>
                医疗领域资深人士，常任美国达克州州立大学教授，南方医科大学生物医学工程学院临床导师，中国人民解放军福州总医院远程医学中心顾问专家。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <h2>发展历程</h2>
          <div className="grid-3">
            <div className="card">
              <h3>2014</h3>
              <p>公司成立</p>
            </div>
            <div className="card">
              <h3>2015</h3>
              <p>获得 FDA 注册，完成天使轮融资</p>
            </div>
            <div className="card">
              <h3>2016</h3>
              <p>获得国家高新技术企业认证</p>
            </div>
            <div className="card">
              <h3>2017</h3>
              <p>通过 CFDA 注册，完成 A 轮融资</p>
            </div>
            <div className="card">
              <h3>2018</h3>
              <p>成立 DARMA 中国公司</p>
            </div>
            <div className="card">
              <h3>2019</h3>
              <p>完成 B 轮融资</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container hero-grid">
          <div>
            <h2>联系我们</h2>
            <p>地址信息：深圳市南山区西丽街道留仙大道创智云城 A7 栋 1905 室</p>
            <p>邮箱：hello@darma.co</p>
            <p>电话：0755 8654 0386</p>
          </div>
          <div className="card">
            <form>
              <label>您的姓名</label>
              <input type="text" placeholder="请输入姓名" />
              <label>您的邮箱</label>
              <input type="email" placeholder="请输入邮箱" />
              <label>您的电话</label>
              <input type="text" placeholder="请输入电话" />
              <label>邮件标题</label>
              <input type="text" placeholder="请输入标题" />
              <label>留言内容</label>
              <textarea placeholder="请输入留言" />
              <button type="button">提交</button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
