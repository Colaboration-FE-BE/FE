import React from 'react'
import Sidebar from '../component/Sidebar'




type Props={
    children:string | JSX.Element| JSX.Element[]
}
const DefaultLayout = ({children}:Props) => {
  return (
    <div className="layout-wrapper layout-content-navbar">
    <div className="layout-container">
        <Sidebar/>
        {children}
      
      <div className="layout-overlay layout-menu-toggle"></div>
    </div>
    <div className="buy-now">
      <a
        href="https://themeselection.com/products/sneat-bootstrap-html-admin-template/"
        target="_blank"
        className="btn btn-danger btn-buy-now"
        >Upgrade to Pro</a
      >
    </div>
    </div>
  )
}

export default DefaultLayout