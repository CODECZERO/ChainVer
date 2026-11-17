import useCreateProduct, { type dataHanlder } from "../../../hooks/products/CreateProduct";
import React from "react";
import ProductForm from "./ProductForm";

export default function CreateProduct() {

    const { mutate, isPending, isError, error } = useCreateProduct();
    const handleForm = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();


        const formData = e.currentTarget;
        const data = {
            ...Object.fromEntries(new FormData(formData))
        } as unknown as dataHanlder;
        mutate(data, { onSuccess: () => formData.reset() });

        // i need to modife that react queyr provvide and other upper layer hooks to manger caching and other stuff proprly
    }

    return <>
        <ProductForm handleForm={handleForm} isError={isError} error={error?.message} isPending={isPending} />
    </>
}
