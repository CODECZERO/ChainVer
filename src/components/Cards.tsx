import type { PropType } from "../types/Cards.type";

//create a reusable card function which can be used any where, any time.
export default function Cards(props: PropType) {
    return (
        <>
            <div className={`w-full max-w-sm bg-netural-primary-soft p-6 border-default rounded-base ${props.className}`}>
                <div>
                    <img src={props.imgUrl} alt={props.imgType} className="rounded-base- mb-6" />
                </div>
                <h5 className="text-xl text-heading font-semibold tracking-tight">
                    {props.tittle}
                </h5>
            </div>

            {props.childNode&&(<div>
                {props.childNode}
            </div>)}
        </>
    )
}