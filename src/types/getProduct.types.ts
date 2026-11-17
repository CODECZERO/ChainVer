
export type getAllProductTypes = {
    curr: number;
    prev: number;
    limit: number;
    lat: bigint;
    lan: bigint;
};

export type getSingleProductTypes = {
    productId: string;
    lat: bigint;
    lan: bigint;
};
