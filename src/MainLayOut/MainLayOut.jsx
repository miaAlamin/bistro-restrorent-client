import { Outlet } from "react-router-dom";
import Header from "../Pages/Header";
import Footer from "../Pages/Footer";


const MainLayOut = () => {
    return (
        <div>
            {/* header */}
            <Header></Header>
            <Outlet></Outlet>

            {/* Footer */}
            <Footer></Footer>
        </div>
    );
};

export default MainLayOut;