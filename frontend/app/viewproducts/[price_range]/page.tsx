import { displayProducts } from "@/actions/user";
import Button from "../component/DeleteButton";
import Link from "next/link";
import OrderButton from "../component/OrderButton";
import { CarouselShadcn } from "../component/CarouselShadcn";
import currentImage from "../component/Images";
import Price_range from "../component/PriceRageInput";
import Image from "next/image";
import product from "../component/assets/product.jpg";

async function filter_page({ params }: { params: { price_range: string } }) {
  const dataArray = await displayProducts(params.price_range);
  return (
    <div className="w-full min-h-screen bg-gray-300">
      <div className="w-full flex justify-center">
        <CarouselShadcn />
      </div>
      <div className="w-full flex justify-end mb-5 mt-2">
        <Link href="/createproduct">
          <button
            type="button"
            className="font-bold text-xl focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 rounded-lg px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Add Product
          </button>
        </Link>
      </div>
      <div>
        <Price_range />
      </div>
      <div className="flex justify-center ">
        <div className="h-full text-[#03001C] font-medium grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3 2xl:grid-cols-4 lg:gap-5 p-5">
          {dataArray.map((d: any, index: any) => (
            <Product data={d} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Product(props: any) {
  return (
    <div
      key={props.index}
      className="p-3 rounded-sm transform w-fit lg:w-[20rem] 2xl:w-fit md:w-[22rem] sm:w-[18rem] bg-[#B6EADA] shadow-xl transition duration-300 hover:scale-105"
    >
      <div>
        <Image src={product} alt="image" className="h-72 object-cover" />
      </div>
      <div>
        <div className="flex">
          <div className="mr-2">Name:</div>
          <div className="capitalize">{props.data.name}</div>
        </div>
        <div className="flex">
          <div className="mr-2">Price:</div>
          {props.data.price}
        </div>
        <div className="flex">
          <div className="mr-2">Quantity</div>
          {props.data.quantity}
        </div>
        <Button productId={props.data.id} />
        <Link
          href={`/update/${props.data.id}`}
          className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
        >
          Update
        </Link>
        <OrderButton
          productId={props.data.id}
          quantity={props.data.quantity}
          name={props.data.name}
        />
      </div>
    </div>
  );
}

export default filter_page;
