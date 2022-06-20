import { CHAIN_INFO, NetworkType } from 'custom/constants/chainInfo'
import { SupportedL1ChainId, SupportedL2ChainId } from 'custom/constants/chains'

export function isL1ChainId(chainId: number | undefined): chainId is SupportedL1ChainId {
  return typeof chainId === 'number' && CHAIN_INFO[chainId].networkType === NetworkType.L1
}

export function isL2ChainId(chainId: number | undefined): chainId is SupportedL2ChainId {
  return typeof chainId === 'number' && CHAIN_INFO[chainId].networkType === NetworkType.L2
}
