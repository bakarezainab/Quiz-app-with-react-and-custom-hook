const questions = [
    {
      question: "What is Solidity primarily used for?",
      options: [
        "Building smart contracts",
        "Managing databases",
        "Creating frontend applications",
        "Developing mobile apps",
      ],
      correctAnswer: "Building smart contracts",
    },
    {
      question: "Which keyword is used to define a smart contract in Solidity?",
      options: ["class", "contract", "struct", "interface"],
      correctAnswer: "contract",
    },
    {
      question: "Which data type is used for storing Ether in Solidity?",
      options: ["uint", "address", "bool", "string"],
      correctAnswer: "uint",
    },
    {
      question: "What is the purpose of the 'msg.sender' variable in Solidity?",
      options: [
        "Stores the contract owner",
        "Refers to the sender of the transaction",
        "Holds the contract's balance",
        "Defines the block number",
      ],
      correctAnswer: "Refers to the sender of the transaction",
    },
    {
      question: "Which function is executed only once when a contract is deployed?",
      options: ["receive()", "fallback()", "constructor()", "selfdestruct()"],
      correctAnswer: "constructor()",
    },
    {
      question: "How do you declare a payable function in Solidity?",
      options: [
        "function myFunc() payable public",
        "payable function myFunc() public",
        "function myFunc() public payable",
        "function payable myFunc() public",
      ],
      correctAnswer: "function myFunc() public payable",
    },
    {
      question: "Which keyword is used to store data persistently in Solidity?",
      options: ["memory", "storage", "calldata", "stack"],
      correctAnswer: "storage",
    },
    {
      question: "What does the 'require' function do in Solidity?",
      options: [
        "Stops execution and reverts the transaction if the condition is false",
        "Silently ignores errors",
        "Transfers Ether to a contract",
        "Defines a function visibility",
      ],
      correctAnswer: "Stops execution and reverts the transaction if the condition is false",
    },
    {
      question: "Which visibility modifier makes a function accessible only inside the contract?",
      options: ["public", "private", "internal", "external"],
      correctAnswer: "private",
    },
    {
      question: "What is the purpose of the 'mapping' type in Solidity?",
      options: [
        "To store key-value pairs",
        "To define loops",
        "To manage gas fees",
        "To create an array",
      ],
      correctAnswer: "To store key-value pairs",
    },
];

export default questions;