import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string

export enum ChainId {
  CORE_TESTNET = 1115
}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
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

export const FACTORY_ADDRESS = '0xDc0e504Ca2b90fA08a7d45Ff6F08d7ce33DDcc9d'

export const INIT_CODE_HASH = '0x4b79ce49ed81fea5264e35c2533dee5fcdd6a2261e78da994c40facc823dc396'

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const FEES_NUMERATOR = JSBI.BigInt(9975)
export const FEES_DENOMINATOR = JSBI.BigInt(10000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}
