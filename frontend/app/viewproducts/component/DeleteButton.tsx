'use client'

import { useRouter } from 'next/navigation'
import { deleteProduct } from "@/actions/user"

export default function Button(props: any) {
    const router = useRouter()

    return (
        <>
            <button onClick={async() => {
                const res = await deleteProduct(props.productId);
                if(res){
                    router.push('/viewproducts');
                }
            }} type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                Delete
            </button>   
        </>
    )
}