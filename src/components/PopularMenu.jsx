import { useEffect, useState } from "react";
import SectionTitlel from "./SectionTitlel";
import MenueItemsCard from "./MenueItemsCard";


const PopularMenu = () => {
    const [menu, setMenue] = useState([])

    useEffect( ()=>{
        fetch('menu.json')
        .then(res=> res.json())
        .then(data=> {
            const PopularMenuItems = data.filter(data=> data.category === 'popular')
            setMenue(PopularMenuItems)
        })
    },[])
    return (
        <div>
            <SectionTitlel subHeading={'Popular Items'} Heading={'From Our Menu'}>

            </SectionTitlel>

          <div className="grid grid-cols-2 gap-10">
          {
                menu.map(item=> <MenueItemsCard key={item._id} item={item}></MenueItemsCard>)
            }
          </div>
        </div>
    );
};

export default PopularMenu;