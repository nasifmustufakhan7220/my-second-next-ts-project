import { IFoodType } from "@/.next/types/food";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface IParamsProps{
    params: Promise<{foodId: string}>
}

export const metadata: Metadata = {
    title : "Food Details",
}

const FoodDetailsPage = async({params}:IParamsProps) => {
    const {foodId} = await params;

    const res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/foods/${foodId}`);

    if(!res.ok){
        notFound();
    }
    const data= await res.json();

    
    const food: IFoodType  = data.data;

    if(!food){
        notFound()
    }

    return (
        <div className="border-2 border-amber-300 p-4">
            <h1 className="text-4xl">{food.category}</h1>
            <p>Main Ingradients: {food.main_ingredients
            .slice(0,2)
            .map(s=> <li key={s}>{s}</li>)}</p>
            <p>Alternative Name: {food.alternative_names
            .slice(1)
            .map(s=><li key={s}>{s}</li>)}</p>

            <p>{food.rating}</p>
            <p>{food.price}</p>

        </div>
    );
};

export default FoodDetailsPage;