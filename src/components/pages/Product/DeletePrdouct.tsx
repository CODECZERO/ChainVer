import UseDeleteProduct from "../../../hooks/products/DeleteProduct";
import type { DeletePros } from "../../../types/pros.types";



//delete needs to be a button which need to deattach and attatach to a 
//paticure product or page or what i want to join it to 
//which has a unique database id , so take id as a hooks or html require with the 
export default function DeleteProduct({ id, className }: DeletePros) {

    //add extra layer to confime delete
    const { mutateAsync, isPending, isError, error } = UseDeleteProduct();
    const handleData = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        mutateAsync(id as string);
        return;
    }

    return <>
        {isError && <p role="alert" className="p-4 mb-4 text-sm text-fg-brand-strong rounded-base bg-brand-softer"> `error is ${error.message}`</p >}
        <button disabled={isPending} onClick={handleData} className={`mb-5 ${className}`} >
            Delete
        </button >
    </>
}
