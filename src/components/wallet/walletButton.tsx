import { useState } from "react";
import Button from "../Button";
import StellarWaqlletsKit from "./../../provider/wallet/walleteConfig"
import useUserInfo from "../../state/user/walleteConnect";

export default function WalleteConnect() {


    const connected = useUserInfo(state => state.walletConnect);
    const connectWwallet = useUserInfo(state => state.connectWallet);
    const disconnectWallet = useUserInfo(state => state.disconnectWallet);

    //this piece of funciton handles connect and disconnect logic of wallete;
    const handleWallet = async () => {
        try {
            if (connected) disconnectWallet();

            const walletAddress = await StellarWaqlletsKit.getAddress();
            const networkType = await StellarWaqlletsKit.getNetwork();
            connectWwallet(walletAddress.address, networkType.network);
        } catch (error) {
            throw new Error(`Wallet Connection issue : { error }`);
        }
    }

    return (
        <>
            <Button tittle={connected ? 'WalletConnected' : 'Disconnect'} compName="WalletButton" type="button" onClick={handleWallet} />
        </>
    )
}
