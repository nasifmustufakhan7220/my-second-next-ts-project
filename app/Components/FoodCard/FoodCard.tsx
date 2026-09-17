'use client'
import { IFoodType } from "@/.next/types/food";
import Image from "next/image";
import Link from "next/link";

interface IFoodProps{
    food: IFoodType;
}

const FoodCard = ({food}:IFoodProps) => {
  return (
    <div className="card bg-base-100 shadow-sm">
      <figure>
        <Image src={food.image_link} width={400} height={400} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Card Title</h2>
        <p>
          A card component has a figure, a body part, and inside body there are
          title and actions parts
        </p>
        <div className="card-actions justify-end">
          <Link href={`/foods/${food.id}`}>
                <button className="btn btn-primary">Buy Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
