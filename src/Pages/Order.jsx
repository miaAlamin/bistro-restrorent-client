import Corver from "../components/Corver";

import orderimg from '../assets/order.jpg';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import UseMenu from "../Hooks/UseMenu";

import OrderTabs from "../components/OrderTabs";
import { useParams } from "react-router-dom";


const Order = () => {

    const categories = ['desserts', 'soup', 'pizza', 'salad', 'drinks']
    const {category} = useParams()
    const initialIndex = categories.indexOf(category)
    console.log(category)

    const [tabIndex, setTabIndex] = useState(initialIndex)

    const [menu] = UseMenu()
    const desserts = menu.filter(item=> item.category === 'dessert')
    const soup = menu.filter(item=> item.category === 'soup')
    const salad = menu.filter(item=> item.category === 'salad')
    const pizza = menu.filter(item=> item.category === 'pizza')
    const drinks = menu.filter(item=> item.category === 'drinks')


    return (
        <div>
            <Corver coverImage={orderimg} ourmenu={'Order Food'} ></Corver>

            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
            <Tab>Desserts</Tab>
            <Tab>Soup</Tab>
            <Tab>Pizza</Tab>
            
            <Tab>Salad</Tab>
            <Tab>Drinks</Tab>
           
        </TabList>
        <TabPanel>
          <OrderTabs item={desserts}></OrderTabs>
        </TabPanel>
        <TabPanel>
        <OrderTabs item={soup}></OrderTabs>
        </TabPanel>
        <TabPanel>
        <OrderTabs item={pizza}></OrderTabs>
        </TabPanel>
        <TabPanel>
        <OrderTabs item={salad}></OrderTabs>
        </TabPanel>
        <TabPanel>
        <OrderTabs item={drinks}></OrderTabs>
        </TabPanel>
      
        </Tabs>

        </div>
    );
};

export default Order;