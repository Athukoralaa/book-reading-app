# Book Reading App

This project is a Book Reading App that allows users to search for books using the Google Books API. Users can search for books and view details about each book. The app provides a good reading experience with a clean and responsive design.

## Features

- Search for books by title or ISBN
- View book details including title, author, published date, and description
- Responsive design for a great user experience on all devices
- Call-to-action section to encourage users to join

## Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- Google Books API Key

### Installation

1. Clone the repository:

```sh
git clone https://github.com/Athukoralaa/book-reading-app.git
cd book-reading-app
```

2. Install the dependencies:

```sh
npm install
```

3. Create a .env file in the root of the project and add your Google Books API key:

```sh
REACT_APP_GOOGLE_BOOKS_API_KEY=your_api_key_here
```

### Running the App

In the project directory, you can run:

```sh
npm start
```
This will run the app in development mode. Open http://localhost:3000 to view it in your browser. The page will reload when you make changes. You may also see any lint errors in the console.

## Project Structure

```filetree
book-reading-app
├── public
│   ├── index.html
│   └── ...
├── src
│   ├── components
│   │   ├── BookList.jsx
│   │   ├── HomePage.jsx
│   │   └── SearchBar.jsx
│   ├── styles
│   │   ├── App.css
│   │   ├── BookList.css
│   │   ├── HomePage.css
│   │   └── SearchBar.css
│   ├── App.js
│   ├── index.js
│   └── ...
├── .env
├── package.json
└── README.md
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
