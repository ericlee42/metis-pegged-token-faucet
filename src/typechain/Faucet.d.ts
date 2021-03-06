/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface FaucetInterface extends ethers.utils.Interface {
  functions: {
    "addOwner(address)": FunctionFragment;
    "admin()": FunctionFragment;
    "claim(string,uint256)": FunctionFragment;
    "create(string)": FunctionFragment;
    "getTokenAddress(string)": FunctionFragment;
    "getTokens()": FunctionFragment;
    "isOwner(address)": FunctionFragment;
    "removeOwner(address)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "addOwner", values: [string]): string;
  encodeFunctionData(functionFragment: "admin", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "claim",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "create", values: [string]): string;
  encodeFunctionData(
    functionFragment: "getTokenAddress",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "getTokens", values?: undefined): string;
  encodeFunctionData(functionFragment: "isOwner", values: [string]): string;
  encodeFunctionData(functionFragment: "removeOwner", values: [string]): string;

  decodeFunctionResult(functionFragment: "addOwner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "admin", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "create", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getTokenAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getTokens", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isOwner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "removeOwner",
    data: BytesLike
  ): Result;

  events: {
    "Claim(string,address,uint256)": EventFragment;
    "Create(string,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Claim"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Create"): EventFragment;
}

export type ClaimEvent = TypedEvent<
  [string, string, BigNumber] & {
    symbol: string;
    reciever: string;
    amount: BigNumber;
  }
>;

export type CreateEvent = TypedEvent<
  [string, string] & { sybmol: string; token: string }
>;

export class Faucet extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: FaucetInterface;

  functions: {
    addOwner(
      _owner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    admin(overrides?: CallOverrides): Promise<[string]>;

    claim(
      _symbol: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    create(
      _symbol: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getTokenAddress(
      _symbol: string,
      overrides?: CallOverrides
    ): Promise<[string] & { token: string }>;

    getTokens(
      overrides?: CallOverrides
    ): Promise<
      [string[], string[]] & { symbols: string[]; addresses: string[] }
    >;

    isOwner(_owner: string, overrides?: CallOverrides): Promise<[boolean]>;

    removeOwner(
      _owner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  addOwner(
    _owner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  admin(overrides?: CallOverrides): Promise<string>;

  claim(
    _symbol: string,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  create(
    _symbol: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getTokenAddress(_symbol: string, overrides?: CallOverrides): Promise<string>;

  getTokens(
    overrides?: CallOverrides
  ): Promise<[string[], string[]] & { symbols: string[]; addresses: string[] }>;

  isOwner(_owner: string, overrides?: CallOverrides): Promise<boolean>;

  removeOwner(
    _owner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addOwner(_owner: string, overrides?: CallOverrides): Promise<void>;

    admin(overrides?: CallOverrides): Promise<string>;

    claim(
      _symbol: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    create(_symbol: string, overrides?: CallOverrides): Promise<void>;

    getTokenAddress(
      _symbol: string,
      overrides?: CallOverrides
    ): Promise<string>;

    getTokens(
      overrides?: CallOverrides
    ): Promise<
      [string[], string[]] & { symbols: string[]; addresses: string[] }
    >;

    isOwner(_owner: string, overrides?: CallOverrides): Promise<boolean>;

    removeOwner(_owner: string, overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "Claim(string,address,uint256)"(
      symbol?: null,
      reciever?: null,
      amount?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { symbol: string; reciever: string; amount: BigNumber }
    >;

    Claim(
      symbol?: null,
      reciever?: null,
      amount?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { symbol: string; reciever: string; amount: BigNumber }
    >;

    "Create(string,address)"(
      sybmol?: null,
      token?: null
    ): TypedEventFilter<[string, string], { sybmol: string; token: string }>;

    Create(
      sybmol?: null,
      token?: null
    ): TypedEventFilter<[string, string], { sybmol: string; token: string }>;
  };

  estimateGas: {
    addOwner(
      _owner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    admin(overrides?: CallOverrides): Promise<BigNumber>;

    claim(
      _symbol: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    create(
      _symbol: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getTokenAddress(
      _symbol: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTokens(overrides?: CallOverrides): Promise<BigNumber>;

    isOwner(_owner: string, overrides?: CallOverrides): Promise<BigNumber>;

    removeOwner(
      _owner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addOwner(
      _owner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    admin(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    claim(
      _symbol: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    create(
      _symbol: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getTokenAddress(
      _symbol: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTokens(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isOwner(
      _owner: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    removeOwner(
      _owner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
