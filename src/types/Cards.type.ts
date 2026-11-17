import type { ReactNode } from "react";

export type CardTypeData="Product"|"Markte"|"Dashbaord";
//TO-DO: check if thier is a better way to write a condition code , or coditino data render 
//how do you pass data from upper state

export interface PropType{
    className:string,
    imgUrl:string,
    imgType:string,
    tittle:string,
    type:CardTypeData,//TO-DO baed on selection of type ,just ask infromation to select the correct type from it.
    childNode:ReactNode,
}
