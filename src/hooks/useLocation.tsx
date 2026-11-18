
//this hooks is used for extracting loaction from a browser 
//so it can suggest a list of nearby prodcut or get them.

import { useEffect } from "react";
import useLocationState from "../state/location.state";

//
export default function useLocation(): [number, number] {
    const { setLocation, isLocation, lat, lan } = useLocationState();
    useEffect(() => {

        // this code pice of code is only for retreiver locaion 
        // and later on store in state
        //
        if (isLocation || !navigator.geolocation) return;
        navigator.geolocation.getCurrentPosition((position) => {
            setLocation(position.coords.latitude, position.coords.longitude)
        });

        //here is no error handling as if something happend it will auto hanlde that 
        //like throwing error at higher level will crash 
        //it insted the orgin 0,0 coords will be passed , for  which 
        //backedn return a top 10 or top data fro that time beging and page begin of it 
        //also get location of a browser of device is highly unlike 
        //so just take defautl value
        //
        //
    }, [isLocation, setLocation])

    return [lat, lan];

};

