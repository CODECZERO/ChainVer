import { create, type ExtractState } from 'zustand';

interface ProductPageStateInterface {
    curr: number;
    limit: number;
    prev: number;
    incrementPage: () => void;
    decrmentPage: () => void;
}

//this is used to manage state of page in a maerket place 
export const useProductPageState = create<ProductPageStateInterface>((set) => ({
    curr: 0,
    prev: 0,
    limit: 10, // to retrive more pages from backedn , update this value 

    incrementPage: () => set((s) => ({
        prev: s.curr,
        curr: s.curr + 10
    })),
    decrmentPage: () => set((s) => ({
        curr: (s.curr > 0) ? s.curr = s.curr - 10 : 0
    }))

}));

export type ProductPageState = ExtractState<typeof useProductPageState>;
