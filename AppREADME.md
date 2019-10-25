# (React) Google Books Search

[Link to Site!](https://ashleys-react-books-search.herokuapp.com/) 

## Authors
Ashley Erffmeyer, with major support from KU's Coding Boot Camp staff members:
* Ryan LaRue (Instructor)
* Eli Vargas (TA)
* Seth Willis (TA)

## Tools Used
* [Bootstrap](https://getbootstrap.com/)
* CSS	
* [Google Books API](https://developers.google.com/books/)
* [Heroku](https://www.heroku.com)
* HTML	
* JavaScript	
* JSX	
* [mLab (MongoDB for Heroku)](https://www.mlab.com/)
* [MongoDB](https://www.mongodb.com/)
* [Mongoose](https://mongoosejs.com/)
* [Node.js](https://nodejs.org/)
* [Node Package Manager (NPM)](https://npmjs.com/)
* [ReactJS](https://github.com/facebook/react)

## Prerequisites & Installations
First, clone repo. Then, `npm install` the following dependencies: axios, express, mongoose, react, and react-router-dom. Finally, `npm start`. 

## Application Overview
MERN Stack Application using Google Books API to search for books and MongoDB to save search results

This web application is a MERN Stack Application React-based Google Books Search. This app leverages React components, works with helper/util functions, and utilizes React lifecycle methods to query and display books based on user searches. It also uses Node, Express and MongoDB so users can save books to review or purchase later.

## Instructions
(React) Googe Books Search includes code to connect to a MongoDB database named `googlebooks` using the mongoose npm package. Mongoose creates a Book schema.

Books have each of the following fields:
* `title` - Title of the book from the Google Books API
* `authors` - The books's author(s) as returned from the Google Books API
* `description` - The book's description as returned from the Google Books API
* `image` - The Book's thumbnail image as returned from the Google Books API
* `link` - The Book's information link as returned from the Google Books API

The `documents` in this app's `books` collection look similar to the example below:

    ```js
    {
      authors: ["Suzanne Collins"]
      description: "Set in a dark vision of the near future, a terrifying reality TV show is taking place. Twelve boys and twelve girls are forced to appear in a live event called The Hunger Games. There is only one rule: kill or be killed. When sixteen-year-old Katniss Everdeen steps forward to take her younger sister's place in the games, she sees it as a death sentence. But Katniss has been close to death before. For her, survival is second nature."
      image: "http://books.google.com/books/content?id=sazytgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
      link: "http://books.google.com/books?id=sazytgAACAAJ&dq=title:The+Hunger+Games&hl=&source=gbs_api"
      title: "The Hunger Games"
    }
    ```

This is a SPA (Single Page Application) that uses [`react-router-dom`](https://github.com/reactjs/react-router) to navigate, hide and show your React components without changing the route within Express. The layout includes React Components for each page `Search` and `Saved`.

This app contains the following Express routes:
* `/api/books` (get) - Should return all saved books as JSON.
* `/api/books` (post) - Will be used to save a new book to the database.
* `/api/books/:id` (delete) - Will be used to delete a book from the database by Mongo `_id`.
* `*` (get) - Will load your single HTML page in `client/build/index.html`. This was added _after_ all other routes are defined.