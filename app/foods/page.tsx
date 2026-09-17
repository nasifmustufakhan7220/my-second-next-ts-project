'use client'
import { IFoodType } from "@/.next/types/food";
import { Suspense } from "react";
import Foods from "../Components/Foods/Foods";
// import { Metadata } from "next";
// import { AR_One_Sans } from "next/font/google";

// export const metadata: Metadata = {
//     title :"Foods"
// }

// const ArOneSans = AR_One_Sans({
//     weight: "700",
// })

const foodFetch = async():Promise<IFoodType[]>=>{
    const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/foods");
    const data = await res.json();
    const foods: IFoodType[] = data.data;
    return foods;
}

const FoodPage = () => {
    // const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/foods");
    // const data = await res.json();
    // const foods: IFoodType[] = data.data;

    const foodPromise = foodFetch();

    return (
        <div>
            {/* {
                foods.map(food=> <FoodCard key={food.id} food={food} />)
            } */}

            <Suspense fallback={<div>Loading.......</div>}>
                <Foods foodPromise= {foodPromise}/>
            </Suspense>
        </div>
    );
};

export default FoodPage;