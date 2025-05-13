const CONTRACT_ADDRESS = "0x8079FBDAC68bC7B9Ad56f72Fd035D7f8D0426840"; // 👈 替換成部署後的位址
const ABI = [
  "function vote(uint candidate)",
  "function getVotes(uint candidate) view returns (uint)",
  "function numCandidates() view returns (uint)"
];

let provider, signer, contract;

async function connect() {
  if (window.ethereum) {
    provider = new ethers.BrowserProvider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    signer = await provider.getSigner();
    contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);
    loadResults();
  } else {
    alert("請安裝 Metamask");
  }
}

async function castVote() {
  const id = document.getElementById("candidate").value;
  try {
    const tx = await contract.vote(id);
    await tx.wait();
    alert("投票成功！");
    loadResults();
  } catch (err) {
    alert("錯誤：" + err.message);
  }
}

async function loadResults() {
  const resultDiv = document.getElementById("results");
  resultDiv.innerHTML = "";

  const count = await contract.numCandidates();
  for (let i = 0; i < count; i++) {
    const votes = await contract.getVotes(i);
    const p = document.createElement("p");
    p.textContent = `Candidate ${i}: ${votes} votes`;
    resultDiv.appendChild(p);
  }
}

window.onload = connect;
