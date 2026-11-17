import api from "../../api/index"
import { useQueryFuc } from "../../provider/ReactQuery.js";
import type { getAllProductTypes } from "../../types/getProduct.types.js";
export default function UseProductget({ prev, limit, curr, lat, lan }: getAllProductTypes) {

    //TO-DO: modife this code to propely assigen unique id to it 
    //also the reutrn from useQueryFuc is useless so remove it , to not consume that much memory form it.
    return useQueryFuc(["getProduct"], () => api.productApiInst.getAllProduct(prev, curr, limit, lat, lan))
    //create sate in zsutdan and save that function name and id in that zustand sate
    //code blewo here use react router to store that id data or use it don't use zustand as it's not correct thigns


    //new updated don't create zsutdan to manage api data , just use it to manage stgate of applicaiton 
    //and don't do anything else stuipd



}
