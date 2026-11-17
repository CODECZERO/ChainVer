import productApi from "./Proudct/ProductApi";
import BountyApi from "./Bounty/BoundtyApi";
import JounryApi from "./Jounry/JounryApi";
import RankApi from "./Rank/RankApi";
import UserApi from "./User/UserApi";


const productApiInst = productApi(import.meta.env.VITE_SERVER_URL);
const BountyApiInst = BountyApi(import.meta.env.VITE_SERVER_URL);
const JounryApiInst = JounryApi(import.meta.env.VITE_SERVER_URL);
const userApiInst = UserApi(import.meta.env.VITE_SERVER_URL);
const RankApiInst = RankApi(import.meta.env.VITE_SERVER_URL);


export default {
    productApiInst,
    BountyApiInst,
    JounryApiInst,
    userApiInst,
    RankApiInst
}
