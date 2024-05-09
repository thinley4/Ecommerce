import { displayOrders, getSingleProduct } from "@/actions/user";
import DeleteOrderButton from "../viewproducts/component/DeleteOrderButton";

export default async function Landing() {
  const dataArray = await displayOrders();

  // const getProductId = await getSingleProduct()

  return (
    <div className="bg-[#6244bb] w-full py-5 flex justify-center min-h-screen">
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
      className="py-2 mt-2 flex rounded-sm transform bg-white shadow-lg transition duration-300 hover:scale-95"
    >
      <div>
        <img
          className="h-32 w-28"
          src="https://m.media-amazon.com/images/I/51UNWtvV4nL._AC_AA270_.jpg"
          alt="image"
        />
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
