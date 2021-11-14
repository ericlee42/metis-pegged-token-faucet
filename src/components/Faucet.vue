<template>
  <el-container>
    <el-main v-if="disabled">
      <el-alert
        title="Please approve site to access MetaMask and switch network to Metis network"
        type="warning"
        effect="dark"
      >
      </el-alert>
    </el-main>
    <el-main v-else>
      <el-row> Welcome! <el-divider></el-divider></el-row>
      <el-row>
        <el-table :data="tokens" border>
          <el-table-column prop="symbol" label="symbol" />
          <el-table-column prop="address" label="address" />
          <el-table-column label="Operations">
            <template #default="scope">
              <el-button
                size="mini"
                type="warn"
                @click="addTokenToMetamask(scope.row)"
                >Add To Metamask</el-button
              >
              <el-button size="mini" type="success" @click="claim(scope.row)"
                >Claim</el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </el-row>
    </el-main>
  </el-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ethers } from "ethers";
import { ElMessage, ElLoading } from "element-plus";

import MetamaskSetting from "../configs/connection";
import type { Faucet } from "../typechain/Faucet";
import FaucetABI from "../configs/faucet.abi.json";

const FaucetAddress = "0xd5170cE517c4b1E8B09b1Ed0366a1676A4BAA37b";

interface Token {
  symbol: string;
  address: string;
}

interface Data {
  disabled: boolean;
  account: string;
  faucet: Faucet | null;
  tokens: Token[];
}

export default defineComponent({
  name: "Faucet",
  props: {},
  data() {
    return {
      account: "",
      disabled: true,
      faucet: null,
      tokens: [],
    } as Data;
  },
  async mounted() {
    if (!window.ethereum) {
      return;
    }

    try {
      this.account = await this.connectNetwork();
    } catch (err) {
      console.log(err);
      return;
    }

    window.ethereum.on("chainChanged", (chainId: string) => {
      if (chainId !== MetamaskSetting.chainId) {
        this.disabled = true;
      } else {
        this.disabled = false;
      }
    });

    window.ethereum.on("accountsChanged", (accounts: Array<string>) => {
      this.account = accounts[0];
      this.disabled = false;
    });

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    this.faucet = new ethers.Contract(
      FaucetAddress,
      FaucetABI,
      provider.getSigner()
    ) as Faucet;

    this.tokens = await this.getTokenList();
    this.disabled = false;
  },
  methods: {
    async connectNetwork() {
      const [account] = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      // switch network
      try {
        await window.ethereum.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: MetamaskSetting.chainId }],
        });
      } catch (switchError) {
        if ((switchError as any).code === 4902) {
          await window.ethereum.request({
            method: "wallet_addEthereumChain",
            params: [MetamaskSetting],
          });
        } else {
          throw switchError;
        }
      }
      return account;
    },
    async addTokenToMetamask(data: Token) {
      try {
        const success: boolean = await window.ethereum.request({
          method: "wallet_watchAsset",
          params: {
            type: "ERC20",
            options: {
              address: data.address,
              symbol: data.symbol,
              decimals: 18,
              image: "",
            },
          },
        });
        if (!success) {
          throw new Error("Something went wrong.");
        }
      } catch {
        ElMessage({
          type: "error",
          message: "add token failed",
        });
      }
    },
    async getTokenList() {
      const list: Array<Token> = [];
      if (!this.faucet) {
        return list;
      }

      const { symbols, addresses } = await this.faucet.getTokens();
      for (let i = 0; i < symbols.length; i++) {
        const symbol = symbols[i];
        const address = addresses[i];
        list.push({ symbol, address });
      }
      return list;
    },
    async claim(data: Token) {
      if (!this.faucet) {
        return;
      }

      try {
        const tx = await this.faucet.claim(
          data.symbol,
          ethers.utils.parseEther("10")
        );
        const loading = ElLoading.service({
          lock: true,
          text: "Waiting tx confirmed",
          background: "rgba(0, 0, 0, 0.7)",
        });
        await tx.wait().finally(() => loading.close());
      } catch (error) {
        ElMessage({
          type: "error",
          message: "withdraw failed",
        });
        console.log(error);
      }
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
