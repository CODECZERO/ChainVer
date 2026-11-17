import coreFetch from "../coreFetch.js"

//this is a blockcahin based login not tradation login ?? 
//think how can you use block chian here

export default async function UserApi(url){
    return {
        saveAddress:(walletAddress,name,email,phoneno,address)=>{
            return coreFetch(`${url}/user/saveAddress`,'post',{walletAddress,name,email,phoneno,address})
        }
    }
}