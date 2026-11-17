import api from "../../api/index"
import { useMutationFuc } from "../../provider/ReactQuery"
import type { ProductData } from "../../types/productData.types";

export default function useUpdateProduct() {
    return useMutationFuc(async (productData: ProductData) => {
        try {
            return await api.productApiInst.updateProduct(productData?.productId, productData);
        } catch (error) {
            throw new Error(`Something went wrong while updateing data ${error}`)
        }
    }, ["UpdateProduct"]);
}
