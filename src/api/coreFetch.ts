import { HttpStatusCode } from "axios";
import axios from "./axiosConfig"

//TO-DO:- RIstrict methode with data and withotu it 
const errorMapMessage = {
    [HttpStatusCode.NotFound]: "404 Not Found",
    [HttpStatusCode.Unauthorized]: "401 unauthorzie access",
    [HttpStatusCode.InternalServerError]: "500 somethign went wrong"
}

const methodeHanlder = {
    'get': axios.get,
    'post': axios.post,
    'postForm': axios.postForm,
    'delete': axios.delete,
    'put': axios.put,
    'patch': axios.patch,
    'patchForm': axios.patchForm
}

export default async function coreFetch(url, methode, data?) {
    try {
        if (['get', 'delete'].includes(methode)) {
            return await methodeHanlder[methode](url, {
                params: data
            });
        }

        return await (data !== undefined ? methodeHanlder[methode](url, data) : methodeHanlder[methode](url));
    } catch (error) {
        throw new Error(errorMapMessage[error.response.status] ?? "somethign went wrong");
    }
}
