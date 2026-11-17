import useUpdateProduct from "../../../hooks/products/UpdateProduct";
import ProductForm from "./ProductForm.tsx";
import type { ProductData } from "../../../types/productData.types.ts";
//this component is same as CreateProduct but thier is no difference except at api level as it suppose to check
//for product first and then take action on it , as a prodcut suppose to exist at first level and then only create it 
// the ui and prametter is same , let's see how can i import ui only??
// let's create a commone ui file for the form and call it.
export default function UpdateProduct() {
    const { mutate, isError, isPending, error } = useUpdateProduct();

    const handleDataUpdate = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = e.currentTarget;
        const data = {
            ...Object.fromEntries(new FormData(formData))
        } as unknown as ProductData;

        mutate(data, { onSuccess: () => formData.reset() });
    }

    return <>
        <ProductForm handleForm={handleDataUpdate} isError={isError} error={error?.message} isPending={isPending} />
    </>
}
