import type { ProductFormPros } from "../../../types/ProductForm.types";

export default function ProductForm({ handleForm, isError, error, isPending }: ProductFormPros) {
    return <>
        <form onSubmit={handleForm} className="max-w-sm mx-auto">
            {isError && <p role="alert" className="p-4 mb-4 text-sm  text-fg-brand-strong rounded-base bg-brand-softer">`this is the error ${error.message}`</p>}
            <div className="mb-5">
                <label className="block mb-2.5 text-sm font-medium text-heading">productTittle</label>
                <input name="productTittle" type="text" maxLength={25} />
            </div>
            <div className="block mb-2.5 text-sm font-medium text-heading">
                <label>productDetail</label>
                <input name="productDetail" type="text" maxLength={225} />
            </div>
            <div className="block mb-2.5 text-sm font-medium text-heading">
                <label>uploadImg</label>
                <input name="img" type="file" accept="image/*" />
            </div>
            <div className="block mb-2.5 text-sm font-medium text-heading">
                <label>price</label>
                <input name="price" type="number" />
            </div>
            <button type="submit" disabled={isPending}>{isPending ? "..submiting" : "submit"}</button>
        </form>
    </>
}
