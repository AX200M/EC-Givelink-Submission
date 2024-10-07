"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { Product } from "./product";

//Set product info based off of the json response using axios from the product.tsx page

const Products = () => {
  const [products, getProducts] = useState<any>([]);

  useEffect(() => {
    axios({
        method: 'get',
        url: 'https://be2.givelink.app/data',
      }).then(function(response) 
      {
        getProducts(
            Object.values(response.data.products).filter((product: any) => product.active)
        )
      });
  }, []);

  return (
    <div className={`grid gap-4 grid-cols-5`}>
      {products &&
        products.map((product: any, index: number) => (
          <Product
            imageURL={product.imagePath}
            name={product.name}
            price={product.price}
          />
        ))}
    </div>
  );
};

export default Products;