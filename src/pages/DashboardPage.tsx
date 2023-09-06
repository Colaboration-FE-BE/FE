// import HeroSection from '../component/HeroSection'
import { Header } from '../component/Header'
import HeroSection from '../component/HeroSection'
import Sidebar from '../component/Sidebar'

const DashboardPage = () => {
    return (
        // <DefaultLayout>
        <div className="layout-wrapper layout content navbar">
            <div className='layout-container'>
                {/* <h1>sfdfjjdf</h1> */}
                {/* <Sidebar/> */}
                <Sidebar />

                <div className="layout-page">
                    {/* <Header/> */}
                    <div className="row">
                        <div>
                            <Header />
                        </div>

                        <div className="content-wrapper">
                            <HeroSection />
                            <div className="card">
                                <h1>skddsak</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        // </DefaultLayout>
    )
}

export default DashboardPage