import React from "react";
import { star } from "../assets/icons";

const PopularProductsCard = ({ imgURL, name, price }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <img
        src={imgURL}
        alt={name}
        className="w-[180px] h-[80px] object-cover relative left-[-1rem]"
      />
      <div className="mt-8 flex justify-start gap-2.5 ">
        <img src={star} alt="rating" width={24} height={24} />
        <p className="font-montserrat text-xl leading-normal text-slate-gray">
          {4.5}
        </p>
      </div>
      <h3>{name}</h3>
      <p>{price}</p>
    </div>
  );
};

export default PopularProductsCard;
