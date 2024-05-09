"use client";

import { useRouter } from "next/navigation";
import { createOrder, deleteProduct } from "@/actions/user";

export default function OrderButton(props: any) {
  const router = useRouter();

  return (
    <>
      <button
        onClick={async () => {
          const res = await createOrder(
            props.productId,
            props.quantity,
            props.name
          );
          const deleteFromProduct = await deleteProduct(props.productId);
          if (deleteFromProduct) {
            router.push("/order");
          }
        }}
        type="button"
        className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Order
      </button>
    </>
  );
}
