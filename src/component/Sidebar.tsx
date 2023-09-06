import { useState, useEffect } from 'react'
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  let pathname = window.location.pathname;
  useEffect(() => {
    pathname = window.location.pathname;
  }, [window.location.pathname]);

  return (
    <aside
      id="layout-menu"
      className="layout-menu menu-vertical menu bg-menu-theme"
      data-bg-class="bg-menu-theme"
      style={{ backgroundColor: 'white', borderRightWidth: 20 }}
    >
      <Helmet htmlAttributes={{ class: `light-style layout-menu-fixed ${isOpen ? `layout-menu-expanded` : ''}` }} />
      <div className="app-brand demo " style={{ minHeight: 150 }}>
        <Link to="/dashboard" className="app-brand-link">
          <span className="app-brand-logo demo" style={{ background: 'red' }}>
            <img style={{ width: "150px" }} src="data:image/png;base64,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" />
          </span>
          <span className="app-brand-text demo menu-text fw-bolder ms-2">
            {/* Altera Academy */}
          </span>
        </Link>
        <a
          onClick={() => setIsOpen(!isOpen)}
          style={{ color: 'red' }}
          className="layout-menu-toggle menu-link text-large ms-auto d-xl-none"
        >

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            style={{
              fill: "rgba(0, 0, 0, 1)", transform: "",
              //  msfilter: "" 
            }}
          >
            <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm2.707 14.293-1.414 1.414L7.586 12l5.707-5.707 1.414 1.414L10.414 12l4.293 4.293z" />
          </svg>

        </a>
      </div>

      <div className="menu-inner-shadow" />
      <ul className="menu-inner py-1 ps ps--active-y">
        <li  className={`${pathname.match('/dashboard') ? 'menu-item active' : 'menu-item'}`}>
          <Link to="/dashboard" className="menu-link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              style={{
                fill: "rgba(0, 0, 0, 1)", transform: "",
                //  msfilter: "" 
              }}
            >
              <path d="M3 13h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h1a1 1 0 0 0 .707-1.707l-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 13zm9-8.586 6 6V15l.001 5H6v-9.585l6-6.001z" />
              <path d="M12 17c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0-6c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2z" />
            </svg>

            <div data-i18n="Analytics">Dashboard</div>
          </Link>
        </li>
        <li className={`${pathname.match('/user') ? 'menu-item active' : 'menu-item'}`}>
          <Link to="/user" className="menu-link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              style={{
                fill: "rgba(0, 0, 0, 1)", transform: "",
                //  msfilter: "" 
              }}
            >
              <path d="M3 13h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h1a1 1 0 0 0 .707-1.707l-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 13zm9-8.586 6 6V15l.001 5H6v-9.585l6-6.001z" />
              <path d="M12 17c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0-6c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2z" />
            </svg>

            <div data-i18n="Analytics">User</div>
          </Link>
        </li>
        <li className={`${pathname.match('/mentee') ? 'menu-item active' : 'menu-item'}`}>
          <Link to="/mentee" className="menu-link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              style={{
                fill: "rgba(0, 0, 0, 1)", transform: "",
                //  msfilter: "" 
              }}
            >
              <path d="M3 13h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h1a1 1 0 0 0 .707-1.707l-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 13zm9-8.586 6 6V15l.001 5H6v-9.585l6-6.001z" />
              <path d="M12 17c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0-6c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2z" />
            </svg>

            <div data-i18n="Analytics">Mentee</div>
          </Link>
        </li>
        <li className={`${pathname.match('/class') ? 'menu-item active' : 'menu-item'}`}>
          <Link to="/class" className="menu-link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              style={{
                fill: "rgba(0, 0, 0, 1)", transform: "",
                //  msfilter: "" 
              }}
            >
              <path d="M3 13h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h1a1 1 0 0 0 .707-1.707l-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 13zm9-8.586 6 6V15l.001 5H6v-9.585l6-6.001z" />
              <path d="M12 17c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0-6c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2z" />
            </svg>

            <div data-i18n="Analytics">Class</div>
          </Link>
        </li>
      </ul>
    </aside>

  )
}

export default Sidebar