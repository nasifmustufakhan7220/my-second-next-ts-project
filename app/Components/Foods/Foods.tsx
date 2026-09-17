'use client'
import { IFoodType } from "@/.next/types/food";
import { use } from "react";
import FoodCard from "../FoodCard/FoodCard";

interface IFoodPromiseProps{
    foodPromise: Promise<IFoodType[]>
}

const Foods = ({foodPromise}:IFoodPromiseProps) => {
    const foods = use(foodPromise);

    return (
        <div  className={`grid grid-cols-2 md:grid-cols-3 gap-4 mt-6`}>
            {
                foods.map(food=> <FoodCard key={food.id} food={food} />)                
            }
        </div>
    );
};

export default Foods;