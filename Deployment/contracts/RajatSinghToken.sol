// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract RajatSinghToken is ERC20 {
    constructor(uint256 initialSupply) ERC20("Rajat Singh Token", "RST") {
        _mint(msg.sender, initialSupply * 10 ** 18);
    }
}
// address - "0x12fB85f5cA0a33e4ddD3081f327C3336D8Ed7DcE"
