# Voting DApp — CS5363 HW8

This is a simplified blockchain-based voting DApp built using Solidity and Hardhat, and deployed on the Sepolia Ethereum testnet. The frontend allows users to vote for a candidate using MetaMask, and view real-time results.

## 🔩 Features

* Users can vote for a candidate (by ID).
* Each address can vote only once.
* Voting results (per candidate) can be queried on-chain.
* Frontend built with HTML + Ethers.js.
* Smart contract deployed to Sepolia testnet.

---

## 🛠 Development Environment

* Node.js v18+
* Hardhat v2.22+
* Ethers.js v6
* MetaMask wallet
* Deployed on Sepolia using Alchemy

---

## 📁 Project Structure

```
voting-dapp/
├── contracts/
│   └── Voting.sol
├── scripts/
│   └── deploy.js
├── test/
│   └── votingTest.js
├── frontend/
│   ├── index.html
│   └── app.js
├── hardhat.config.js
└── README.md
```

---

## 🚀 How to Run Locally

### 1. Clone and install

```bash
npm install
```

### 2. Start local Hardhat node

```bash
npx hardhat node
```

### 3. Deploy contract to localhost

```bash
npx hardhat run scripts/deploy.js --network localhost
```

### 4. Import a local account to MetaMask

Copy a private key from `npx hardhat node` and import it in MetaMask. Set network to:

* RPC URL: `http://127.0.0.1:8545`
* Chain ID: `31337`

### 5. Run frontend

```bash
cd frontend
npx serve .
```

Open the provided URL (e.g., [http://localhost:3000](http://localhost:3000))

---

## 🌐 How to Deploy to Sepolia

1. Set up `.env` or hardcode your RPC and private key in `hardhat.config.js`
2. Request test ETH from [https://sepoliafaucet.com/](https://sepoliafaucet.com/)
3. Deploy:

```bash
npx hardhat run scripts/deploy.js --network sepolia
```

4. Copy deployed contract address into `frontend/app.js`'s `CONTRACT_ADDRESS`.

5. Switch MetaMask to Sepolia and reload frontend.

---

## ✅ Test Cases

Run the unit tests:

```bash
npx hardhat test
```

Covers:

* Only one vote per user
* Rejects invalid candidate IDs
* Tracks correct vote counts
* Handles multiple users independently

---

## 🔗 Smart Contract Info

* Contract: `Voting.sol`
* Network: Sepolia
* Deployed Address: `0x8079FBDAC68bC7B9Ad56f72Fd035D7f8D0426840`

---

## 👤 Author

Po-Yu Pan
CS5363 Blockchain Technologies and Applications
National Tsing Hua University
Email: [abc35100762@gmail.com](mailto:abc35100762@gmail.com)
