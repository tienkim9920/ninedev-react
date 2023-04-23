import { Outlet } from "react-router-dom";
import Navbar from './Navbar'

const MainLayout = () => {
    return (
        <div className="App">
            <Navbar />
            <div className="wrapper-body">
                <Outlet />
            </div>
        </div>
    )
}

export default MainLayout;