import api from "../../api/index.js";
import { useQueryFuc } from "../../provider/ReactQuery";
import type { getSingleProductTypes } from "../../types/getProduct.types.js";
export default function UseGetSingleProduct(getData: getSingleProductTypes) {
    return useQueryFuc(["GetSingleProduct"], () => api.productApiInst.getSingleProduct(getData.productId, getData.lat, getData.lan))
}
