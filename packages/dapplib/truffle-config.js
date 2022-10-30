require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict forget force sugar guard render remain erosion grace casino sudden sentence'; 
let testAccounts = [
"0x9be36f171b625bfd712d8a8c8551059324ff503db8b5bec5c170bcb6fafea450",
"0xf49c434368c85beb35db6819447b5c92ba1a49213a6f0663358a2bff85c05330",
"0x25d1bffb6dc923fb880530a9521317b0ee96d98b6a98f88b466b99b58a48a2db",
"0x1d6c0524fe3556a0e0fc91fce8c718a669f9943b45230a2a92b9e6f84f5cd81f",
"0x2de2e98a6a093707f9b569581a38f8bb80c842164a0a8048c3de31f82732cf5c",
"0x805e3c0d95b7b07737e0865bf8a8def9b15dfbd49a0eef2f3710288ef4cb250b",
"0x6fe0ec21174674f8db7306be1896a5fca54b9d8b4c402c926a97c227403dec4d",
"0x59196f039c4b3c627b1dd41fc96c78f8defd3f809b31ca979d9b8aabdf0a429d",
"0x23c2d310835943323907c5d81081fd396d5ab8dd22af0f0f4af8341ba60773a6",
"0x2bcaa23ab824b97b0925de004636d2c263d3d233000be729d618c9193f20144e"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

