import Image from "next/image";
import Link from "next/link";

//Set variable data types
interface productData {
  imageURL: string;
  name: string;
  price: number;
}

export const Product = ({ imageURL, name, price }: productData) => {
  return (
    //Setting the image from a dynamic URL depending on the item, as well as setting the name and price for the product
    // Button will be used to proceed with purchase or custom typescript code, for now it will redirect to youtube when pressed
      <article
        className="bg-white rounded-lg shadow-xl transform transition duration-500 
                    hover:scale-105 hover:bg-givelinkOrange border-2 border-givelinkPurple">
        
        <figure className="rounded-lg aspect-square flex justify-center items-center"> 
          <Image
            src={`https://be2.givelink.app/images/products/${imageURL}`}
            width={500}
            height={500}
            alt={`Cover image for product: ${name}`}
            className="rounded-lg m-6"
          />
        </figure>

        <div
          className="grid grid-rows-3 grid-flow-col align-middle content-center h-52">
            <h2 className="py-2 text-black col-span-2 justify-center text-center m-2">
              {name}
            </h2>

            <p className="py-6 text-black col-span-2 justify-center text-center text-lg font-bold">
              {price.toFixed(2)}€
            </p>

            <div className="text-white bg-givelinkPurple rounded-md w-32 h-10 col-span-2 justify-center 
                              justify-self-center mx-auto shadow-md flex flex-col items-center">

              <button className="m-2 col-span-2 justify-center text-center font-bold uppercase">
                <Link href="https://youtube.com" >
                  Buy Now
                </Link>
              </button>

            </div>
        </div>
      </article>
  );
};