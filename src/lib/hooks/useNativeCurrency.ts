import { NativeCurrency } from '@uniswap/sdk-core'
import { SupportedChainId } from 'custom/constants/chains'
import { nativeOnChain } from 'custom/constants/tokens'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { useMemo } from 'react'

export default function useNativeCurrency(): NativeCurrency {
  const { chainId } = useActiveWeb3React()
  return useMemo(
    () =>
      chainId
        ? nativeOnChain(chainId)
        : // display mainnet when not connected
          nativeOnChain(SupportedChainId.MAINNET),
    [chainId]
  )
}
