import coreFetch from "../coreFetch";

export default async function JounryApi(url){
    return{
        recordSession:(ip=0,lat=0,lan=0)=>{
            return coreFetch(`${url}/jounry/record`,'post',{ip,lat,lan})
        },

        showJounry:(productId)=>{
            return coreFetch(`${url}/journy/getJourny/${productId}`,'get')
        },

        
    }
}