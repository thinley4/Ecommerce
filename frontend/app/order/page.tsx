import { displayOrders, getSingleProduct } from "@/actions/user";
import DeleteOrderButton from "../viewproducts/component/DeleteOrderButton";
import Image from "next/image";
import order from '../components/assets/order.jpg'

export default async function Landing() {
  const dataArray = await displayOrders();

  // const getProductId = await getSingleProduct()

  return (
    <div className="bg-[#6244bb] dark:bg-black w-full py-5 flex justify-center min-h-screen">
      <div className="h-full text-[#03001C] font-medium">
        {dataArray.map((d: any, index: any) => (
          <Product data={d} key={index} />
        ))}
      </div>
    </div>
  );
}

function Product(props: any) {
  return (
    <div
      key={props.index}
      className="py-2 mt-2 flex rounded-sm transform bg-white dark:bg-blue-950 dark:text-white shadow-lg transition duration-300 hover:scale-95"
    >
      <div>
        <Image src={order} alt="image" className="h-32 w-28 object-cover" />
      </div>
      <div className="w-screen pl-9">
        <div>
          <div className="mr-2">OrderId:</div>
          <div className="w-[5rem]">{props.data.orderId}</div>
        </div>
        <div className="flex pt-2">
          <div className="mr-2">Total Amount:</div>
          {props.data.totalAmount}
        </div>
        <div className="flex pt-2">
          <div className="mr-2">Quantity</div>
          {props.data.items[0].boughtQuantity}
        </div>
        <div className="pt-2">
          <DeleteOrderButton orderId={props.data.orderId} />
        </div>
      </div>
    </div>
  );
}
