// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Voting {
    address public admin;
    mapping(address => bool) public hasVoted;
    mapping(uint => uint) public votes;
    uint public numCandidates;

    constructor(uint _numCandidates) {
        admin = msg.sender;
        numCandidates = _numCandidates;
    }

    function vote(uint candidate) public {
        require(!hasVoted[msg.sender], "Already voted");
        require(candidate < numCandidates, "Invalid candidate");
        hasVoted[msg.sender] = true;
        votes[candidate]++;
    }

    function getVotes(uint candidate) public view returns (uint) {
        return votes[candidate];
    }
}
