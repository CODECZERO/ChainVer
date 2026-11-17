import StellarWalletsKit from "../../provider/wallet/walleteConfig";
import useUserInfo from "../../state/user/walleteConnect";

//create a hook here which get;s the info form wallete and save it and later on sate , also how will you referenc that button on or the effect which hass occure

export default function useWalleteConnect() {
    const setWalletState = useUserInfo((s) => s.connectWallet);
    const removeWalletSate = useUserInfo((s) => s.disconnectWallet);
    const connectWallet = async () => {
        try {
            const walletData = await StellarWalletsKit.authModal();
            const networkData = await StellarWalletsKit.getNetwork();

            setWalletState(walletData.address, networkData.network);

        }
        catch (err) {
            throw new Error(`Faild to get wallet:${err}`)
        }

    }

    const disconnectWallet = async () => {
        await StellarWalletsKit.disconnect?.();
        removeWalletSate();
    }

    return { connectWallet, disconnectWallet }

}
