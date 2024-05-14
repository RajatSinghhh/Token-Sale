// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract MyTokenSale {
    IERC20 public tokenContract;
    uint256 public tokenAllowed = 100 * 10 ** 18;
    uint256 public tokensSold;

    event Sell(address _buyer, uint256 _amount);

    constructor(IERC20 _tokenContract) {
        tokenContract = _tokenContract;
    }

    // Buy tokens
    function buyTokens(uint256 _numberOfTokens) public payable {
        require(
            tokenAllowed >= _numberOfTokens * 10 ** 18,
            "Maximum 100 is allowed"
        );
        require(
            tokenContract.balanceOf(address(this)) >=
                _numberOfTokens * 10 ** 18,
            "Not enough tokens in contract"
        );
        tokensSold += _numberOfTokens * 10 ** 18;
        emit Sell(msg.sender, _numberOfTokens);
        require(
            tokenContract.transfer(msg.sender, _numberOfTokens * 10 ** 18),
            "Token transfer failed"
        );
    }
}
// token_sale_address - "0xb9a5053D18dd00598312806086E6AFD97924bA9C"
