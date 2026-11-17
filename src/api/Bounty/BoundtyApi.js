import coreFetch from "../coreFetch.js";

export default function BountyApi(url){
    return{
        getBounty:(proudctId,userId)=>{
            if (proudctId) return coreFetch(`${url}/bounty`,'get',{proudctId})
            else if (userId) return coreFetch(`${url}/bounty`,'get',{userId})
            return coreFetch(`${url}/bounty`,'get')
        },
    }
}