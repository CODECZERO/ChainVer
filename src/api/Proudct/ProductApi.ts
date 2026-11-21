import coreFetch from "../coreFetch";
import type { ProductData, ProudctVerifiaction, QRCodeInterface, Status } from "../../types/productData.types"

//This service gonna have all the path of the fuctino and later on called in hook which uses react query
//let the hooks hand/<C-D-Space>uuule error, build a retry or throtlet function for the using hook so they don't infinitly hit api , or always show errror init

/*

    QRcode->hooks->productId->api->blockchainCheck->return res :- verfifcation api working
    productId->hook->api->server->save on blockchain chain ->return qrcode :- qrcode genreation
*/


export default function productApi(url: string) {
    return {
        getAllProduct: async (prev: number, curr: number, limit: number = 10, lat: number, lan: number): Promise<ProductData> => {
            //the get always gonna get the data based on client geo location or retrun whatevery data is their , if no geo data present
            return coreFetch(`${url}/product`, 'get', { prev, curr, limit, lat, lan });
        },

        deleteProduct: async (productId: string): Promise<Status> => {
            return coreFetch(`${url}/proudct/${productId}`, 'delete');
        },

        getSingleProduct: async (productId: string, lat: number, lan: number): Promise<ProductData> => {
            return coreFetch(`${url}/product/${productId}`, 'get', { lat, lan });
        },

        updateProduct: async (productId: string, productData: ProductData): Promise<Status> => {
            return coreFetch(`${url}/product/${productId}`, 'put', productData);
        },

        productVerifiaction: async (productId: string): Promise<ProudctVerifiaction> => {
            return coreFetch(`${url}/product/verification/${productId}`, 'get')
        },

        genrateQrCode: async (productID: string): Promise<QRCodeInterface> => {
            return coreFetch(`${url}/product/genrateQrcode/${productID}`, 'get')
        },

        createProduct: async (productData: ProductData): Promise<Status> => {
            return coreFetch(`${url}/product/createProduct`, 'post', productData)
        },

        uploadImg: async (img: File): Promise<Status> => {
            return coreFetch(`${url}/image`, 'post', img).then((res) => res?.url);
        }
    }
}
