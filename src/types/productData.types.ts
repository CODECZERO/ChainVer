
// this is data type define for api
// to call it correct and handle it propley also begin reusable too.
export interface ProductData extends Status {
    productTittle: string,
    productDetail: string,
    imgDataUrl: string,
    price: number,
    productId?: string,

};

export interface Status {
    status: string;
};

export interface ProudctVerifiaction extends Status {
    Signature: string;
};

export interface QRCodeInterface extends Status {
    QRCodeImgFile: File | null;
};

