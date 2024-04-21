"use client";

import { createWeb3Modal, defaultConfig } from "@web3modal/ethers/react";
import { Inter, Montserrat } from "next/font/google";

export const SUPPORTED_CHAIN = 11155111;

export const BASE_SEPOLIA_ID = 84532;
export const SEPOLIA_ID = 11155111;
export const OPTIMISM_SEPOLIA_ID = 11155420;
const montserrat = Montserrat({ subsets: ["latin"] });

const Sepolia = {
  chainId: SEPOLIA_ID,
  name: "Sepolia",
  currency: "ETH",
  explorerUrl: "https://sepolia.etherscan.io/",
  rpcUrl: process.env.NEXT_PUBLIC_SEPOLIA_RPC_URL,
};

const metadata = {
  name: "PolySwap",
  description: "My Website description",
  url: "https://mywebsite.com", // origin must match your domain & subdomain
  icons: ["https://avatars.mywebsite.com/"],
};

// const ethersConfig = defaultConfig({
//     metadata
//   })

// 5. Create a Web3Modal instance
export const configureWeb3Modal = () =>
createWeb3Modal({
  ethersConfig: defaultConfig({ metadata }),
  chains: [Sepolia],
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  enableAnalytics: false, // Optional - defaults
  themeVariables: {
    "--w3m-accent": "#006AFF",
    "--w3m-border-radius-master": "",
    "--w3m-font-size-master": "16",
  },
});

export function Web3Modal({ chcreateWeb3Modalildren }) {
  return children;
}