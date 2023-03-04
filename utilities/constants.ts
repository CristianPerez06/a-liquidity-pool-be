import { ChainId } from '@aave/contract-helpers'

export const PROVIDERS_DATA = {
  GOERLI: {
    name: 'Ethereum G\xF6erli',
    baseAssetSymbol: 'ETH',
    wrappedBaseAssetSymbol: 'WETH',
    rcp: 'https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
    chainId: ChainId.goerli,
    poolImplementationAddress: '0x6060Cf73C79098D32c9b936F4B26283427f1BFAd',
    poolProxyAddress: '0x7b5C526B7F8dfdff278b4a3e045083FBA4028790',
    lendingPoolProviderAddress: '0xc911b590248d127ad18546b186cc6b324e99f02c',
    uiPoolDataProviderAddress: '0xb00a75686293fea5da122e8361f6815a0b0af48e',
    uiIncentiveDataProviderAddress: '0xf4ce3624c8d047af8b069d044f00bf6774b4dec0',
    walletBalanceProviderAddress: '0xe0bb4593f74B804B9aBd9a2Ec6C71663cEE64E29',
  },
  ARBITRUM: {
    name: 'Arbitrum G\xF6erli',
    baseAssetSymbol: 'ETH',
    wrappedBaseAssetSymbol: 'WETH',
    rcp: 'https://goerli-rollup.arbitrum.io/rpc',
    chainId: ChainId.arbitrum_goerli,
    poolImplementationAddress: '',
    poolProxyAddress: '0xeAA2F46aeFd7BDe8fB91Df1B277193079b727655',
    lendingPoolProviderAddress: '0x4EEE0BB72C2717310318f27628B3c8a708E4951C',
    uiPoolDataProviderAddress: '0x583F04c0C4BDE3D7706e939F3Ea890Be9A20A5CF',
    uiIncentiveDataProviderAddress: '0xB9107870a2e22b9cd4B51ED5483212Cb9eAE0329',
    walletBalanceProviderAddress: '0x39fDBFDBF1127F31F485a1228D44010F5130cCAC',
  },
  AVALANCHE: {
    name: 'Avalanche Fuji',
    baseAssetSymbol: 'AVAX',
    wrappedBaseAssetSymbol: 'WAVAX',
    rcp: 'https://api.avax-test.network/ext/bc/C/rpc',
    chainId: ChainId.fuji,
    poolImplementationAddress: '',
    poolProxyAddress: '0xf319Bb55994dD1211bC34A7A26A336C6DD0B1b00',
    lendingPoolProviderAddress: '0x220c6A7D868FC38ECB47d5E69b99e9906300286A',
    uiPoolDataProviderAddress: '0x08D07a855306400c8e499664f7f5247046274C77',
    uiIncentiveDataProviderAddress: '0xD764968BdAAdD2120F0E48a16fB29a6c73c13340',
    walletBalanceProviderAddress: '0xd2495B9f9F78092858e09e294Ed5c17Dbc5fCfA8',
  },
  OPTIMISM: {
    name: 'Optimism G\xF6erli',
    baseAssetSymbol: 'ETH',
    wrappedBaseAssetSymbol: 'WETH',
    rcp: 'https://goerli.optimism.io',
    chainId: ChainId.optimism_goerli,
    poolImplementationAddress: '',
    poolProxyAddress: '0xCAd01dAdb7E97ae45b89791D986470F3dfC256f7',
    lendingPoolProviderAddress: '0x0b8FAe5f9Bf5a1a5867FB5b39fF4C028b1C2ebA9',
    uiPoolDataProviderAddress: '0x9277eFbB991536a98a1aA8b735E9D26d887104C1',
    uiIncentiveDataProviderAddress: '0x4157398c5abB5211F51F5B551E3e240c5568dbD4',
    walletBalanceProviderAddress: '0xb463057Eb60E1575e2a69aa17C63CCd2F3161a5f',
  },
  FANTOM: {
    name: 'Fantom Testnet',
    baseAssetSymbol: 'FTM',
    wrappedBaseAssetSymbol: 'WFTM',
    rcp: 'https://rpc.testnet.fantom.network/',
    chainId: ChainId.fantom_testnet,
    poolImplementationAddress: '',
    poolProxyAddress: '0x95b1B6470eAF8cC4A03d2D44C6b54eBB8ede8C30',
    lendingPoolProviderAddress: '0xC809bea009Ca8DAA680f6A1c4Ca020D550210736',
    uiPoolDataProviderAddress: '0x9a00043F98941DD4e02E1c7e78676df64F5e37a6',
    uiIncentiveDataProviderAddress: '0xFBBdDFfFFcFBD55a6DF325d2be47077875Ef9eB9',
    walletBalanceProviderAddress: '0x4E2e1F992A2ba1137fB6e1FcfbEdcaC95cA788e5',
  },
  POLYGON: {
    name: 'Polygon Mumbai',
    baseAssetSymbol: 'MATIC',
    wrappedBaseAssetSymbol: 'WMATIC',
    rcp: 'https://rpc-mumbai.maticvigil.com/',
    chainId: ChainId.mumbai,
    poolImplementationAddress: '',
    poolProxyAddress: '0x0b913A76beFF3887d35073b8e5530755D60F78C7',
    lendingPoolProviderAddress: '0xeb7A892BB04A8f836bDEeBbf60897A7Af1Bf5d7F',
    uiPoolDataProviderAddress: '0x928d9A76705aA6e4a6650BFb7E7912e413Fe7341',
    uiIncentiveDataProviderAddress: '0xf7Dd602B3Cf90B2A20FC0F84E0419BeE104BdF16',
    walletBalanceProviderAddress: '0xdbaeF5FC90a979426E2cE5C3F0125430d0e2023e',
  },
}
