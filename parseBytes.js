const ethers = require("ethers");

async function parseBytes(arg){
    const bytes = arg[0];
    const name  = ethers.decodeBytes32String(bytes)
    console.log("bytes:", name)
}

parseBytes(process.argv.slice(2));