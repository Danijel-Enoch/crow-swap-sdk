import JSBI from 'jsbi';
export declare type BigintIsh = JSBI | bigint | string;
export declare enum ChainId {
    CORE_TESTNET = 1115
}
export declare enum TradeType {
    EXACT_INPUT = 0,
    EXACT_OUTPUT = 1
}
export declare enum Rounding {
    ROUND_DOWN = 0,
    ROUND_HALF_UP = 1,
    ROUND_UP = 2
}
/**
 * factory:0x31E8C3fBE55978716E552d5F45D5B21c69B4A187
 * basicERC:0x0fEF6aA6363bA525C2eCf6331CB783A439B6e6e7
 * anotherbasic:0x61e6E51FD1c1E1ED13A8C51C39e9f746c2FD5d15
 *router:0xaC884abd83cf05E94ecd8431065aCAf89E8033cF

 BEP20:0xf5a60E1A21677433301B3cF554936A0EE91Cbf71
 masterChef:0xb5F3Ea331D3975FF405554e996F1d2c5EF4B8c1B
 sousChef:0x91521d7f9C3897dc64BC7e045A86c97b1Cb925D6
 mutlicall:0xDb302AB81e2d34B7665EFAFd4A46f43b5558A640
 */
export declare const FACTORY_ADDRESS = "0xDc0e504Ca2b90fA08a7d45Ff6F08d7ce33DDcc9d";
export declare const INIT_CODE_HASH = "0x4b79ce49ed81fea5264e35c2533dee5fcdd6a2261e78da994c40facc823dc396";
export declare const MINIMUM_LIQUIDITY: JSBI;
export declare const ZERO: JSBI;
export declare const ONE: JSBI;
export declare const TWO: JSBI;
export declare const THREE: JSBI;
export declare const FIVE: JSBI;
export declare const TEN: JSBI;
export declare const _100: JSBI;
export declare const FEES_NUMERATOR: JSBI;
export declare const FEES_DENOMINATOR: JSBI;
export declare enum SolidityType {
    uint8 = "uint8",
    uint256 = "uint256"
}
export declare const SOLIDITY_TYPE_MAXIMA: {
    uint8: JSBI;
    uint256: JSBI;
};
