const ethers = require('ethers');
async function createBytes(arg){
    const name = arg[0];
    const bytes = ethers.encodeBytes32String(name);

    console.log("name:", bytes)
}

createBytes(process.argv.slice(2)); 