"use client";

import { useWeb3Modal, useWeb3ModalAccount } from "@web3modal/ethers/react";
import { configureWeb3Modal } from "../connection/index";
import { Button } from "@/components/ui/button";

export default function ConnectButton() {
    configureWeb3Modal();
  const { open } = useWeb3Modal();
  const { isConnected } = useWeb3ModalAccount();

  return (
    <>
      {isConnected ? (
        <w3m-button/>
      ) : (
        <Button
          onClick={() => open()}
          variant={"outline"}
          className="h-6 min-w-[4rem] gap-2 rounded-xl border border-purple-700 px-4 py-3 font-bold text-foreground lg:min-w-[8rem] lg:rounded-2xl"
          translate="no"
        >
          Connect Wallet
        </Button>
      )}
    </>
  );
}