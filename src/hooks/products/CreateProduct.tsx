import api from "../../api/index.js";
import { useMutationFuc } from "../../provider/ReactQuery";
import type { ProductData } from "../../types/productData.types";

export type dataHanlder = Omit<ProductData, "img"> & {
    img: File;
};

export default function useCreateProduct() {
    return useMutationFuc(async (data: dataHanlder) => {
        if (data.productDetail.length <= 0 && data.productTittle.length <= 0) throw new Error("please provide detils correctly and fully");
        if (!(data.img instanceof Image) || data.img.size == 0 && data.img.size < (5 * 1024 * 1024)) throw new Error("img size is invalid");

        //img upload api call and database update call ,that awiat might cause some unexcepted issue i need to preper for that
        try {
            const imgUrl = await api.productApiInst.uploadImg(data.img);
            return await api.productApiInst.createProduct({ ...data, imgDataUrl: imgUrl });
        }
        catch (error) {
            throw new Error(`Error occured while uploading img ${error}`);
        }
        //data update api call 
    }, ["products"]);
}
