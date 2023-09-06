import { Header } from '../component/Header'
import Sidebar from '../component/Sidebar'

type Props = {
  children: string | JSX.Element | JSX.Element[]
}
const DefaultLayout = ({ children }: Props) => {
  return (
    <div className="layout-wrapper layout content navbar">
      <div className='layout-container'>
        {/* <h1>sfdfjjdf</h1> */}
        {/* <Sidebar/> */}
        <Sidebar />

        <div className="layout-page" style={{ display: 'flex', flexDirection: 'column' }}>
          <Header />
          <div className="content-wrapper">
            <div className="container mt-5">


              {children}

            </div>
          </div>
        </div>
      </div>
    </div>


  )
}

export default DefaultLayout