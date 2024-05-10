"use server";

import axios from "axios";
import { revalidatePath } from "next/cache";

export async function deleteProduct(id: string) {
  try{
      const res = await axios.delete(`http://127.0.0.1:8888/products/${id}`);
      revalidatePath("/");
      return "Deleted";
  } catch(e) {
    return "Not deleted";
  }
}

export async function updateQuantity(id: string) {}

export async function create(name: string, price: any, quantity: any) {
  try {
    const response = await axios.post("http://127.0.0.1:8888/products/create", {
      name,
      price,
      quantity,
    });
    revalidatePath("/");
    return "created";
  } catch(e) {
    return "Product created."
  }
}

export async function update(name: string, price: any, quantity: any, id: any) {
  try {
    const response = await axios.put(`http://127.0.0.1:8888/products/${id}`, {
      name,
      price,
      quantity,
    });
    revalidatePath("/viewproducts");
    return "updated";
  }catch(e) {
    return "Not updated"
  }
}

export async function displayProducts(rangestring: string) {
  try {
      if (rangestring) {
        const range = rangestring.split("-");
        const data: {
          data: {
            data: [
              {
                id: string;
                name: string;
                price: number;
                quantity: number;
              }
            ];
          };
        } = await axios.get("http://127.0.0.1:8888/products/all");
        const dataArray = data.data.data.filter(
          (d) => d.price >= parseInt(range[0]) && d.price <= parseInt(range[1])
        );
        return dataArray;
      }
      const data = await axios.get("http://127.0.0.1:8888/products/all?limit=8");
      const dataArray = data.data.data;
      return dataArray;
  }catch(e) {
    
    return "Not displayed"
  }
}

export async function getSingleProduct(id: string) {
  try {
      const data: {
        productId: string;
        name: string;
        price: number;
        quantity: number;
      } = await axios.get(`http://127.0.0.1:8888/products/${id}`);
      return data;
  }catch(e) {
    return "No single product"
  }
}

// order items

export async function createOrder(id: string, quantity: any, name: string) {
  try {
      const response = await axios.post("http://127.0.0.1:8888/orders/create", {
        items: [
          {
            productId: id,
            boughtQuantity: quantity,
            productName: name,
          },
        ],
        userAddress: {
          City: "Bangalore",
          Country: "India",
          ZipCode: "2312",
        },
      });
      revalidatePath("/order");
      return "ordered";
  }catch(e) {
    return "Cannot create product"
  }
}

export async function deleteOrder(id: string) {
  try {
      const res = await axios.delete(`http://127.0.0.1:8888/orders/${id}`);
      revalidatePath("/order");
      return "Deleted order item";
  }catch(e) {
    return "Cannot delete order"
  }
}

export async function displayOrders() {
  try {
    const data = await axios.get("http://127.0.0.1:8888/orders/all?limit=30");
    const dataArray = data.data;
  
    return dataArray;
  }catch(e) {
    
    return "No order displayed"
  }
}
