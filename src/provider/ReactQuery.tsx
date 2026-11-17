import {
    useMutation,
    useQuery, type QueryKey
} from '@tanstack/react-query';
import { queryClinet } from '.';


//mutations:-to updateData 
//i am not sure currenlty but this function right here can cause cpu or network call blockcage

//use when somekind of data fetch is required
function useQueryFuc<TData>(queryKey: QueryKey, fn: () => Promise<TData>, timeInterval = 100000) {
    return useQuery<TData, Error>({ queryKey, queryFn: fn, refetchInterval: timeInterval });
}

//use when somekind of data update is perfromed
function useMutationFuc<TVars, TResult>(fn: (vars: TVars) => Promise<TResult>, invalidateKey: QueryKey,) {
    //modefie this code to return error , and handle that error at upper level TO_DO:-
    return useMutation<TResult, Error, TVars>({
        mutationFn: fn,
        onSuccess: () => {
            queryClinet.invalidateQueries({ queryKey: invalidateKey })
        }
    });
    //after few update data can be two type error or correct data;
    //handle that two type in upper level 
}

//use when some data wipe is need.
function useInvalidateFn(queryKey: QueryKey) {
    return () => queryClinet.invalidateQueries({ queryKey })
}



export {
    useMutationFuc,
    useQueryFuc,
    useInvalidateFn
}
