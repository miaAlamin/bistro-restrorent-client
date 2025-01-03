import FoodCard from "./FoodCard";


const OrderTabs = ({item}) => {
    return (
        <div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {
                            item.map(item=> <FoodCard key={item._id} item={item}></FoodCard>)
                        }
                        </div>
        </div>
    );
};

export default OrderTabs;