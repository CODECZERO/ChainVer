import { create } from "zustand";

interface LocationState {
    lat: number;
    lan: number;
    isLocation?: boolean;
    setLocation(lat: number, lan: number): void;
    clearLocation(): void;
}

const useLocationState = create<LocationState>((set) => ({
    lat: 0,
    lan: 0,

    setLocation: (lat, lan) => set({
        lat: lat,
        lan: lan,
        isLocation: true,
    }),

    clearLocation: () => set({
        lat: 0,
        lan: 0,
        isLocation: false,
    })

}));

export default useLocationState;




