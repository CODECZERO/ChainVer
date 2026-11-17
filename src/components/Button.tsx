import type { ButtonTypes } from "../types/Button.types.js";

export default function Button(props: ButtonTypes) {
    return (
        <>
            <div>
                {props.childNode}?{props.childNode}:<button type={props.type}
                    className={`text-white bg-brand box-border border border-transparent 
           hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 
           rounded-full text-sm px-4 py-2.5 focus:outline-none ${props.className} {...rest}`}>{props.tittle}
                </button>
            </div>
        </>
    )
}
