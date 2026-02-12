import React from "react";

function ProductCard({ title, price, inStock }) {
  return (
    <div
      className={`max-w-sm w-full bg-white rounded-xl border-black-500 border-solid shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl ${
        !inStock && "opacity-90 "
      }`}
    >
      <div className="p-4 flex flex-col gap-2">
        <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
        <p className="text-gray-700 font-medium text-md">₹ {price}</p>


        <span
          className={`px-3 py-1 text-sm rounded-full w-fit font-semibold ${
            inStock
              ? "bg-green-200 text-green-700"
              : "bg-red-200 text-red-700"
          }`}
        >
          {inStock ? "In Stock" : "Out of Stock"}
        </span>
      </div>
    </div>
  );
}

export default ProductCard;
