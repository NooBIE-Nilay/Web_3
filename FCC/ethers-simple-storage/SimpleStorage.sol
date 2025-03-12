// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleStorage {
    uint256 public favNumber;

    mapping(string => uint256) public nameToFavNumber;

    struct People {
        uint256 favNumber;
        string name;
    }
    People[] public people;

    function addPerson(string memory _name, uint256 _favNumber) public {
        people.push(People(_favNumber, _name));
        nameToFavNumber[_name] = _favNumber;
        //    OR we can use something like this
        //    People memory newPerson = People({favNumber:_favNumber, name:_name});
        //    people.push(newPerson);
    }

    function store(uint256 _number) public virtual {
        favNumber = _number;
    }

    function retrieve() public view returns (uint256) {
        return favNumber;
    }

    receive() external payable {}

    fallback() external payable {}
}
