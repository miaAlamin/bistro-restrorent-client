import { Link } from "react-router-dom";
import Corver from "./Corver";
import MenueItemsCard from "./MenueItemsCard";


const MenueCategory = ({items, img, ourmenu}) => {
    return (
        <div>
           
         <Corver coverImage={img} ourmenu={ourmenu}></Corver>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-8 mb-8 gap-10">
        {
              items.map(item=> <MenueItemsCard key={item._id} item={item}></MenueItemsCard>)
          }
        </div>
        <Link to={`/order/${ourmenu}`}>
        <button className="btn border-0 border-b-4 uppercase btn-outline mt-4">order Now</button>
        </Link>
        </div>
    );
};

export default MenueCategory;