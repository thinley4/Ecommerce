'use client'

import { useState } from "react"
import { useRouter } from 'next/navigation'
import { update } from "@/actions/user";

export default function Page({ params }: {params: any}) {
    const router = useRouter();
    const [name, setName] = useState("");
    const [price, setPrice]= useState(0 || "");
    const [quantity, setQuantity] = useState(0 || "");
    return (
        <div className="bg-slate-200 flex justify-center items-center h-screen">
            <div className="border bg-white p-5 rounded-lg">
                <div className="flex justify-center py-5 font-bold text-xl">Update Product</div>
                <input onChange={(e)=> {
                            setName(e.target.value)
                }} type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Priduct Name" required />
                    
                <input onChange={(e)=> {
                            setPrice(e.target.value)
                }} type="number" id="name" className="bg-gray-50 mt-3 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Prize" required />
                    
                <input onChange={(e)=> {
                            setQuantity(e.target.value)
                }} type="number" id="name" className="bg-gray-50 mt-3 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Quantity" required />
                <div className="flex justify-center">
                    <button className="mt-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" 
                        onClick={(async() => {
                            const res = await update(name, price, quantity, params.id);
                            if(res){
                                router.push('/viewproducts')
                            }
                            
                    })}>Submit</button>
                </div>
            </div>
        </div>
    )
}