import { productApiInst } from "../../api/index.js";
import { useMutationFuc } from "../../provider/ReactQuery";

export default function useProductVerfication(id: string) {
    return useMutationFuc('productVerifiaction', () => productApiInst.productVerifiaction(id), id);
}
