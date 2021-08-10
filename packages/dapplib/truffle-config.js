require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good enter bottom solution finger deliver remain unusual grace help flee turkey'; 
let testAccounts = [
"0xa40cf90cfdc1be28f78a63329cf586a89a7a82f650aad30215d7e38530be05b6",
"0x0b55d509702bf2126ef043ffefacdcbf35cafc53dceee675b999ae7bb5d35ac2",
"0xaf55926ccc3a2aeb16938c8d054e4a1db958612803983526d1ca4ecd94f5d71d",
"0xe29fb549cb09ca8025475c05ed33a9103f3b4bdc1525f1309f26fc6f268b50dd",
"0x79ad51901a526b7ec5d850398c40b096c0934fb4709f3584face5a0438ea1c54",
"0x9eb6452871ef3dfb09cfffde2e79735ebbafcf0e5615b7d75e8063b550705bfb",
"0xf9b86974943d67b4c3d7609c5ec4fb3f523b919da51833a50717238e78e29fc7",
"0xd91c4522a7c73ea7dffb8ae61d8a477b9933d3c7348eb050d7d74545a375cc78",
"0xc39217ca52bcb9bd89140b1b7f2d11b568a7f70248651c85b5fa9cf7102f45e9",
"0xa67b9178ec8e1603a95825dde3ab94158776ac3bc49f94a25df61e63989fefbb"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

