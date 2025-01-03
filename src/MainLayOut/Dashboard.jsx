import { FaAd, FaCalendar, FaHome, FaList, FaSearch, FaShoppingCart } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import UseCarts from "../Hooks/UseCarts";


const Dashboard = () => {

    const [cart] = UseCarts()
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-orange-300">
                <ul className="menu p-4">
                    <li>
                        <NavLink to='/dashbord/userHome'>
                            <FaShoppingCart></FaShoppingCart>
                            My Cart ({cart.length})
                        </NavLink>
                        
                    </li>
                    <li>
                        <NavLink to='/dashbord/reservation'>
                            <FaCalendar></FaCalendar>
                           Calendar
                        </NavLink>
                        
                    </li>
                    <li>
                        <NavLink to='/dashbord/review'>
                            <FaAd></FaAd>
                           Add Review
                        </NavLink>
                        
                    </li>
                    <li>
                        <NavLink to='/dashbord/booking'>
                            <FaList></FaList>
                           My Booking
                        </NavLink>
                        
                    </li>
                    <div className="divider"></div>
                    <li>
                        <NavLink to='/'>
                            <FaHome></FaHome>
                           Home
                        </NavLink>
                        
                    </li>
                    <li>
                        <NavLink to='/order/salad'>
                            <FaSearch></FaSearch>
                            Menu
                        </NavLink>
                        
                    </li>

                </ul>
            </div>

            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;