import { useEffect } from "react";
import UseProductget from "../../../hooks/products/Productget";
import { useProductPageState } from "../../../state/product/productState";
import useLocation from "../../../hooks/useLocation";
import Button from "../../Button";

export default function ProductPage(): React.ReactNode {
    const { prev, curr, limit, incrementPage, decrmentPage } = useProductPageState.getState();//this only manage the page state of proudct and nothing else 
    const [lat, lan] = useLocation() // extreact current locaiton of browser using this hooks useLocation
    const data = UseProductget({ prev, limit, curr, lat, lan });
    return <>
        <div>
            {
                //need to think how can i render data ?? here  
                // when recive data from api use map to load data here using key 
            }
            <Button onClick={incrementPage} value={"Next"} />
            <Button onClick={decrmentPage} value={"Prev"} />
        </div >
    </>
}
