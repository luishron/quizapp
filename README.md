# Frontend Challenge - Membrane

![Project Overview](https://github.com/luishron/FrontendChallenge-Membrane/blob/5de6ecec762d0b0391b95e216023a85c143c3df0/public/img/screen/home.png)

## Project Overview

Surveys are loaded in JSON format. Users can answer these surveys and submit their results, earning tokens in the process. This application also integrates blockchain features like connecting to a Metamask wallet and handling $QUIZ tokens.

## Key Technologies

- **Vite:** Used for the front-end infrastructure, ensuring efficient project hierarchy, organization of directories, and routing conventions.
- **React Query:** Manages the app state effectively.
- **Material UI with React Hook Form:** Enhances UI components.
- **TypeScript:** Ensures type safety and improves code quality.

## Technologies Used

- **Vite:** A modern and fast module bundler.
- **React Icons:** To easily include icons in your React project.
- **React Router Dom:** For managing navigation within the application.
- **Wagmi & Ethers:** Libraries for interacting with the Ethereum blockchain.
- **Canvas Confetti:** For visually appealing effects.
- **Material-UI:** Material-UI components for React.
- **React Query:** A powerful tool for managing state and server synchronization in React.

## Features

| ![Home](https://github.com/luishron/FrontendChallenge-Membrane/blob/5de6ecec762d0b0391b95e216023a85c143c3df0/public/img/screen/home.png) | ![Metamask](https://github.com/luishron/FrontendChallenge-Membrane/blob/5de6ecec762d0b0391b95e216023a85c143c3df0/public/img/screen/metamask.png) |
|:--------------------------------------------------------------------------------------------------------------------------------------------------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------:|
| *Home*                                                                                                                                               | *Metamask*                                                                                                                                                |

| ![Goerli](https://github.com/luishron/FrontendChallenge-Membrane/blob/5de6ecec762d0b0391b95e216023a85c143c3df0/public/img/screen/goerli.png) | ![Quiz](https://github.com/luishron/FrontendChallenge-Membrane/blob/5de6ecec762d0b0391b95e216023a85c143c3df0/public/img/screen/quiz.png) |
|:--------------------------------------------------------------------------------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------------------------------------------------------------------:|
| *Goerli*                                                                                                                                              | *Quiz*                                                                                                                                               |

| ![Question](https://github.com/luishron/FrontendChallenge-Membrane/blob/5de6ecec762d0b0391b95e216023a85c143c3df0/public/img/screen/question.png) | ![Summary Lock](https://github.com/luishron/FrontendChallenge-Membrane/blob/5de6ecec762d0b0391b95e216023a85c143c3df0/public/img/screen/sumary-lock.png) |
|:----------------------------------------------------------------------------------------------------------------------------------------------------------:|:------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| *Question*                                                                                                                                                 | *Summary Lock*                                                                                                                                                      |

| ![Summary](https://github.com/luishron/FrontendChallenge-Membrane/blob/5de6ecec762d0b0391b95e216023a85c143c3df0/public/img/screen/sumary.png) | ![Earn](https://github.com/luishron/FrontendChallenge-Membrane/blob/5de6ecec762d0b0391b95e216023a85c143c3df0/public/img/screen/earn.png) |
|:----------------------------------------------------------------------------------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------------------------------------------------------------------:|
| *Summary*                                                                                                                                              | *Earn*                                                                                                                                               |





- **Metamask Wallet Integration:** Users can connect their Metamask wallets.
- **Network Switching:** Automatically switches to the Goerli network if the user is not connected.
- **Token Balance:** Displays the balance of $QUIZ tokens.
- **Quiz Interaction:** Presents daily trivia with images and a button to start the quiz.
- **Question Lifecycle:** Displays each question for a set amount of time and moves to the next one, answered or not.
- **Results Overview:** Shows an overview of all answers at the end of the quiz.
- **Answer Submission:** Allows users to submit their answers to a validator contract and refreshes the $QUIZ balance.

# Environment Variable Configuration

To ensure the application functions correctly, you will need to set up some environment variables. These variables enable the application to connect to external services like Alchemy for blockchain interactions.

Create a `.env.local` file in the root of your project and add the following variables:

VITE_ALCHEMY_API_KEY=your-alchemy-api-key
VITE_CONTRACT_ADDRESS=your-contract-address

Replace `your-alchemy-api-key` and `your-contract-address` with your actual keys.

## Resources

- **Alchemy API:** To obtain an Alchemy API key, visit [Alchemy](https://www.alchemy.com/). Alchemy provides tools for developing, deploying, and scaling dApps on Ethereum and other blockchains.

- **Contract Address:** You can find your contract's address on [Goerli Etherscan](https://goerli.etherscan.io/address/0x437ef217203452317c3c955cf282b1ee5f6aaf72#code). Etherscan is a blockchain explorer for Ethereum, allowing you to view transactions, contracts, and more on the blockchain.

## Important

Do not share your private API keys or contract addresses in your public GitHub repository. Ensure that the `.env.local` file is included in your `.gitignore` file.
