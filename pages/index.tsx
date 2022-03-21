import type { NextPage } from "next";
import Link from "next/link";
import { useEffect } from "react";
const Home: NextPage = () => {
  // const [wallet, setWallet] = useState<Wallet | undefined>(undefined);

  // useEffect(()=>{
  //   const a = new solana();
  // },[])

  // const connectToWallet = async () => {
  //   if (wallet) await wallet.connect();
  // };

  // console.log("wallet?.publicKey", wallet?.publicKey);

  useEffect(() => {
    // console.log("solflare", window.phantom);
    // let connection = new Connection(clusterApiUrl("devnet"));
    // let providerUrl = "https://solflare.com/provider";
    // let _wallet = new Wallet(providerUrl, "solflare");
    // setWallet(_wallet);
    // _wallet.on("connect", (publicKey) =>
    //   console.log("Connected to " + publicKey.toBase58())
    // );
    // _wallet.on("disconnect", () => console.log("Disconnected"));
  }, []);

  useEffect(() => {
    //   const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
    // web3.eth.getAccounts().then((accounts) => {
    //   console.log(accounts);
    // });
    // console.log("web3 provider: ", web3.currentProvider, Web3.givenProvider);
  }, []);
  return (
    <Link href="/landing">
      <a>Go to LANDING PAGE</a>
    </Link>
  );
};

export default Home;
