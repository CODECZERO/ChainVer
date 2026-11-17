import type { ComponentPropsWithoutRef, ReactNode } from "react";

export interface ButtonTypes extends ComponentPropsWithoutRef<'button'> {
    className?: string;
    tittle?: string;
    compName: string;// this is used to tell wheater what kind of button or where is that button is , not usualy react ref things , so don't compare it with that.
    childNode: ReactNode // this pramete is used to get or keep custome button type , or it's tollay use less 
    // it's just used to keep all the desgin on one file and varbile, rendering state on to other , etc 
}
