import api from "../../api";
import { useMutationFuc } from "../../provider/ReactQuery";

export default function useGenrateQR() {
    return useMutationFuc(async (productID: string) => {
        try {
            return await api.productApiInst.genrateQrCode(productID);
        } catch (error) {
            throw new Error(`something went wrong while genrating QR code ${error}`)
        }
    }, ["useGenrateQR"])
};
