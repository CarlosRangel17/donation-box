import { ethers } from "ethers";
import donationBox from "~artifacts/contracts/DonationBox.sol/DonationBox.json";
import { useState } from "react";

/** NOTE: Useful documentation
 * How to send to payable function ~ https://ethereum.stackexchange.com/questions/45398/call-a-payable-function-and-pay-ether-with-metamask
 * How to format ethers ~ https://ethereum.stackexchange.com/questions/101356/how-to-convert-bignumber-to-normal-number-using-ethers-js/101357
 * Info on Görli Testnet ~ https://goerli.net/
 */

/** TODO: Make an environment variable
 * Create a varaible here that holds the contract address after you deploy!
 */
const contractAddress = "0x3986FD026EBF1d20ED8B69A07c5AAAaac16B9Ef8";

const useDonationBox = () => {
  // Could initialize with donations from contract
  const [totalDonations, setTotalDonations] = useState("");
  const [loading, setLoading] = useState(false);

  // Main payable method to perform donation
  const donate = async (donationAmount: number) => {
    try {
      const { ethereum } = window;

      if (ethereum) {
        // TODO: Could abstract this into a context/provider
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const donationBoxContract = new ethers.Contract(
          contractAddress,
          donationBox.abi,
          signer
        );

        const donationTrx = await donationBoxContract.donate({
          value: ethers.utils.parseEther(`${donationAmount}`),
        });
        setLoading(true);

        await donationTrx.wait();
        setLoading(false);
        console.log("Trx hash -- ", donationTrx.hash);

        // Retrieve all donations
        void (await getAllDonations());
      } else {
        // TODO: Return error messaging to display for client-side
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      // TODO: Return error messaging to display for client-side
      console.log(error);
    }
  };

  const getAllDonations = async () => {
    try {
      const { ethereum } = window;
      if (ethereum) {
        // TODO: Could abstract this into a context/provider
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const donationBoxContract = new ethers.Contract(
          contractAddress,
          donationBox.abi,
          signer
        );

        /*
         * Call the getTotalDonations method from your Smart Contract
         */
        const donations = await donationBoxContract.getTotalDonations();
        console.log("donations:", donations.toString());

        const formattedEther = ethers.utils.formatEther(donations);
        /*
         * Store our data in React State
         */
        setTotalDonations(formattedEther);
      } else {
        // TODO: Return error messaging to display for client-side
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      // TODO: Return error messaging to display for client-side
      console.log(error);
    }
  };

  return { donate, loading, setLoading, totalDonations };
};

export default useDonationBox;
