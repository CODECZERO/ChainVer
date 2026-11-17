import api from "../../api/index"
import { useMutationFuc } from "../../provider/ReactQuery"


//#TO-DO create types for all types of product data so function is correct 
export default function UseDeleteProduct() {
    return useMutationFuc(async (id: string) => {
        try {
            return await api.productApiInst.deleteProduct(id);
        } catch (error) {
            throw new Error(`Error occure while deleting a data ${error}`)
        }
    }, ["DeleteProduct"]);
} 
