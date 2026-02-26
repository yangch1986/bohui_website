import { Outlet, useLocation } from '@modern-js/runtime/router';
import { Helmet } from '@modern-js/runtime/head';
import '../styles/global.css';

const navItems = [
  { href: '/', label: '首页' },
  { href: '/tech', label: '核心技术' },
  { href: '/sleep', label: '睡眠管理' },
  { href: '/nursing', label: '智慧养老' },
  { href: '/sit', label: '企业办公' },
  { href: '/about', label: '关于我们' },
];

export default function Layout() {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:type" content="website" />
      </Helmet>
      <header className="site-header">
        <div className="container nav">
          <a className="brand" href="/">
            铂慧科技
          </a>
          <nav className="nav-links">
            {navItems.map(item => (
              <a
                key={item.href}
                href={item.href}
                className={pathname === item.href ? 'active' : undefined}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>
      <Outlet />
      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <strong>深圳市铂慧科技有限公司</strong>
            <p>关注我们：微博 / Facebook / Twitter</p>
          </div>
          <div>
            <strong>联系我们</strong>
            <p>地址信息：深圳市南山区西丽街道留仙大道创智云城 A7 栋 1905 室</p>
            <p>邮箱：hello@darma.co</p>
            <p>电话：0755 8654 0386</p>
          </div>
          <div>
            <strong>导航</strong>
            <p>首页｜核心技术｜睡眠管理｜智慧养老｜企业办公｜关于我们</p>
            <p className="notice">Copyright © 2014-2023 Darma Inc. All rights reserved. 粤ICP备16002859号-1</p>
          </div>
        </div>
      </footer>
    </>
  );
}
