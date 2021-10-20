import React, { useEffect, useState } from "react";
import styles from "./landingPage.module.scss";
import useConnectWallet from "~hooks/useConnectWallet";
import useDonationBox from "~hooks/useDonationBox";

const LandingPage = () => {
  const { currentAccount, checkIfWalletIsConnected, connectWallet, signUp } =
    useConnectWallet();
  const { donate, loading, totalDonations } = useDonationBox();
  const [donationAmount, setDonationAmount] = useState("");

  const handleDonate = (e) => {
    if (!loading) {
      e.preventDefault();
      donate(donationAmount as unknown as number);
    }
  };

  // TODO: Add input message validation
  const handleDonationAmountChange = (value: any) => {
    console.log("handle donation");
    // const revisedValue = e.target.value.replace(/\D/g, "");
    setDonationAmount(value.replace(/[^.\d]/g, ""));
  };

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  return (
    <section className={styles.mainContainer}>
      <div className={styles.dataContainer}>
        <h1 className={styles.header}>👋 Welcome to the Donation Box!</h1>
        <div className={styles.description}>
          We do whatever it takes for our cause but we can't do it without you.
          Connect your Ethereum wallet and donate to a great cause!
        </div>

        {/* TODO: Show user account when connected */}
        {!currentAccount && (
          <div className={styles.notConnectedSection}>
            <button
              className={styles.connectWalletButton}
              onClick={connectWallet}
            >
              Connect Wallet
            </button>
            <span>OR</span>
            <button className={styles.signUpButton} onClick={signUp}>
              Sign Up
            </button>
          </div>
        )}
        <form className={styles.donationSection} onSubmit={handleDonate}>
          <label htmlFor="donationAmount">Enter Donation Amount (ETH)</label>
          <input
            required
            autoComplete="off"
            id="donationAmount"
            name="donationAmount"
            type="text"
            value={donationAmount}
            onChange={(e) => handleDonationAmountChange(e.target.value)}
          />

          {/* TODO: Toggle active/inactive state when wallet is or isn't connected */}
          <button
            className={styles.donateButton}
            type="submit"
            disabled={loading}
          >
            Donate
          </button>
          {loading && <p> Please wait while the transaction completes...</p>}
        </form>

        {/* TODO: Add more detail (sender address, amount, balance, total) & styles */}
        {totalDonations && (
          <div className={styles.thankYouSection}>
            <div>Donation Received. Thank you!</div>
            <span>Total Donations: {totalDonations} ETH </span>
          </div>
        )}
      </div>
    </section>
  );
};

export default LandingPage;
