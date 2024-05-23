# ReactJS OpenAI Frontend

This repository contains the frontend of an application that integrates with the OpenAI API, using React.js. It works in conjunction with the backend repository [expressjs-openai](https://github.com/rezadaulay/expressjs-openai).

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/rezadaulay/reactjs-openai.git
    ```

2. Navigate into the project directory:

    ```bash
    cd reactjs-openai
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

## Usage

1. Ensure the backend server from the [expressjs-openai](https://github.com/rezadaulay/expressjs-openai) repository is running.

2. Start the React development server:

    ```bash
    npm run dev
    ```

3. Visit `http://localhost:5173` in your web browser.

4. Use the provided interface to interact with the OpenAI API via the backend server.

## Configuration

You can configure the application by modifying the `.env` file. This file contains settings such as the backend server URL.