import { create } from "zustand";

interface WalletAccount {
    walletAddress: string | null,
    walletConnect: boolean,
    network: string | null,

    //define action here 

    connectWallet: (walletAddress: string | null, network: string | null) => void;
    disconnectWallet: () => void;
}



const useUserInfo = create<WalletAccount>((set) => ({
    walletAddress: null,
    walletConnect: false,
    network: null,
    walleteType: null,

    connectWallet: (walletAddress, network) => set({
        walletAddress: walletAddress,
        walletConnect: true,
        network: network,
    }),
    disconnectWallet: () => set({
        walletAddress: null,
        walletConnect: false,
        network: null,
    })
}));

export default useUserInfo;
