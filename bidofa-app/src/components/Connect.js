import  { useState } from 'react';

function Connect(){
let [account, setAccount] = useState("");
let[isConnected, setIsConnected] = useState(false);




const{ ethereum } = window;
const connectMetamask = async () => {
if (window.ethereum !== "undefined") {
    try {
    const accounts = await ethereum.request({method: "eth_requestAccounts"});
    setAccount(accounts[0]);
    setIsConnected(true);
    }
    catch (error) {
        console.error("Error connecting Metamask:", error);
    }
}
    else {
        console.warn("Metamask not available"); 
    }
}



const disconnectMetamask  = () => {
setAccount("")
setIsConnected(false);
 


}
}

export default Connect;