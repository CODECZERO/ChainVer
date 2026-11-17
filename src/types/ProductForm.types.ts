import type React from "react";

export type ProductFormPros = {
    handleForm: (data: React.SubmitEvent<HTMLFormElement>) => void;
    isError?: boolean;
    error?: string | undefined;
    isPending?: boolean;
}  
