import coreFetch from "../coreFetch.js";

export default async function RankApi(url){
    return{
        getRank:(prev,curr,limit)=>{
            return coreFetch(`${url}/rank`,'get',{prev,curr,limit})
        },
        updateRank:()=>{
            return coreFetch(`${url}`)
        }
    }
}