

const MenueItemsCard = ({item}) => {
    console.log(item)
    const {image,name, price, recipe} = item
    return (
        <div className="flex space-x-6 mb-9">
            <img style={{borderRadius:' 0 200px 200px 200px'}} className="w-[100px]" src={image} alt="img"/>
            <div>
                <h4 className="uppercase">{name}</h4>
                <p >{recipe}</p>
            </div>
            <p className="text-yellow-500">{price}</p>
        </div>
    );
};

export default MenueItemsCard;