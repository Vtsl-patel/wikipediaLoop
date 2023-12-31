# wikipediaLoop
Wikipedia Loop counter and path display.

# Wikipedia Loop Project

The Wikipedia Loop project is a full-stack application that allows users to explore the "Wikipedia Loop" phenomenon. Users can input a Wikipedia URL, and the application will follow the first link in the main body text of each page, adhering to specific rules, until it reaches the "Philosophy" page. The project is divided into two main folders: `wikipedia-loop` for the frontend and `wikipedia-loop-backend` for the backend.

## Wikipedia Loop Frontend

The frontend of the Wikipedia Loop project is built using React, creating an interactive user interface for users to input Wikipedia URLs and visualize the loop results. The project uses state management to handle user input, display results, and handle potential errors.

### Frontend Components

1. **InputForm.js:**
   - Component for user input, allowing users to input a Wikipedia URL.

2. **ResultDisplay.js:**
   - Component to display the results, including the number of requests required to reach the "Philosophy" page and a list of visited Wikipedia pages.

### Frontend Logic

- The `InputForm` component takes user input and triggers the `handleFormSubmit` function in the `App.js` file.

- The `handleFormSubmit` function makes an asynchronous request to the backend API (`http://localhost:5000/wikipedia-loop`) using Axios.

- The backend processes the request, follows the Wikipedia Loop rules, and returns the result, including the request count and visited pages.

- The frontend updates the state with the response data and displays the results through the `ResultDisplay` component.

## Wikipedia Loop Backend

The backend of the Wikipedia Loop project is built using Node.js and Express. It handles API requests from the frontend, follows the Wikipedia Loop rules, and maintains a record of visited pages in a JSON file.

### Backend Logic

- The `/wikipedia-loop` route handles incoming requests, reads the previously visited pages from the JSON file, and follows the Wikipedia Loop rules using the `followWikipediaLoop` function.

- The `followWikipediaLoop` function makes requests to Wikipedia pages, parses HTML using Cheerio, and follows the first valid link according to specific rules.

- The visited pages are recorded, and the result is sent back to the frontend.

### JSON File Management

- The `visited-pages.json` file is used to store a record of visited pages.

- For each new input, the content of the `visited-pages.json` file is cleared to start with an empty set of visited pages.

## Getting Started

1. Clone the repository:
2. in the root directory use command "npm install concurrently" in terminal
3. then run "npm start" in terminal
