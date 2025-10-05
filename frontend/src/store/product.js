import {create} from "zustand"

export const useProductStore = create((set)=>({
    products:[],
    setProducts: (products)=> set({products}),
    createProduct: async (newProduct) =>{
        if(!newProduct.name || !newProduct.image || !newProduct.price){
            return {success:false,message: "please fill in all fields." }
           
        }
         const res = await fetch("/api/products", {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(newProduct)
         })
         const data = await res.json()
         set((state) => ({products:[...state.products, data.data]}))
         return {success:true,message: "product created sucessfully" }
    },
    fetchProduct: async () =>{
      const res = await fetch("/api/products")
      const data = await res.json()
      set({products: data.data})
    },
    deleteProduct: async (id) => {
        const res = await fetch(`/api/products/${id}`, {
            method: "DELETE"
        })
        const data = await res.json()
        if(!data.success){
            throw new Error(data.message)
        }
        set((state) => ({products: state.products.filter((p) => p._id !== id)}))
    },
    updateProduct: async (id, updatedProduct) => {
    const res = await fetch(`/api/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    });
    const data = await res.json();
    if (!data.success) {
      throw new Error(data.message);
    }
    set((state) => ({
      products: state.products.map((p) => (p._id === id ? data.data : p)),
    }));
    return { success: true, message: data.message}
  }
}))