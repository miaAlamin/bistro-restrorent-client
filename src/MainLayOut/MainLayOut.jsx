import { Outlet, useLocation } from "react-router-dom";
import Header from "../Pages/Header";
import Footer from "../Pages/Footer";


const MainLayOut = () => {
    const location = useLocation()


    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signup')
    return (
        <div>
            {/* header */}
            {noHeaderFooter || <Header></Header>}
            <Outlet></Outlet>

            {/* Footer */}
            {noHeaderFooter ||  <Footer></Footer>}
        </div>
    );
};

export default MainLayOut;