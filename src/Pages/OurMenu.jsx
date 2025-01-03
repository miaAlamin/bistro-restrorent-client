import { Helmet } from "react-helmet-async";
import Corver from "../components/Corver";
import coverImage from '../assets/banner3.jpg';
import dessertImage from '../assets/dessert-bg.jpeg'
import souptImage from '../assets/soup-bg.jpg'
import saladImage from '../assets/salad-bg.jpg'
import pizzaImage from '../assets/pizza-bg.jpg'
import SectionTitlel from "../components/SectionTitlel";
import PopularMenu from "../components/PopularMenu";
import UseMenu from "../Hooks/UseMenu";
import MenueCategory from "../components/MenueCategory";





const OurMenu = () => {

    const [menu] = UseMenu()
    const desserts = menu.filter(item=> item.category === 'dessert')
    const soup = menu.filter(item=> item.category === 'soup')
    const salad = menu.filter(item=> item.category === 'salad')
    const pizza = menu.filter(item=> item.category === 'pizza')
    const offered = menu.filter(item=> item.category === 'offered')

    return (
        <div>
               <Helmet>
                    <title>Bistro Boss | Our Menu</title>
                </Helmet>
            <Corver coverImage={coverImage} ourmenu='Our Menu'></Corver>

            <SectionTitlel subHeading={"Don't Miss"} Heading={"today's offer"}></SectionTitlel>
           <MenueCategory items={offered}></MenueCategory>
           
           <MenueCategory items={desserts} ourmenu='Dessert' img={dessertImage}></MenueCategory>
           <MenueCategory items={soup} ourmenu='soup' img={souptImage}></MenueCategory>
           <MenueCategory items={salad} ourmenu='salad' img={saladImage}></MenueCategory>
           <MenueCategory items={pizza} ourmenu='pizza' img={pizzaImage}></MenueCategory>

        </div>
    );
};

export default OurMenu;