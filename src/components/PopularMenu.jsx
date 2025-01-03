
import SectionTitlel from "./SectionTitlel";
import MenueItemsCard from "./MenueItemsCard";
import UseMenu from "../Hooks/UseMenu";


const PopularMenu = () => {
    const [menu] = UseMenu()

    const popular = menu.filter(item=> item.category === 'popular')



    return (
        <div>
            <SectionTitlel subHeading={'Popular Items'} Heading={'From Our Menu'}>

            </SectionTitlel>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {
                popular.map(item=> <MenueItemsCard key={item._id} item={item}></MenueItemsCard>)
            }
          </div>
        </div>
    );
};

export default PopularMenu;