# MERN Ecommerce App With Authentication

This is an eCommerce app simulation for the purpose of practicing and trying to improve my skills.
You can feel free to the page and play around with the fake products, you can't really buy anything there, it's just to show that the functionality works.

This project has been made up with Mongoose (MongoDB), Express , Passport and React Redux.

## Instalation and how to run the project

Install dependencies from the server : `npm install`

INstall dependencies from the client : `cd client && npm install`


Run server : `npm start`

Run client : ` npm run client `

 ## Usage

 ### Structure 

```
./server
    ./app
        ./controllers/ 
        ./models/
    ./bin
        ./www
    ./config
        ./express.js
        ./mongodb.js
        ./passport.js
     ./client
        ./src
            ./app
                ./store.js
            ./Components
                ./Footer.js
                ./Home.js
                ./Navbar.js
                ./Spinner.js
            ./features
                ./api
                ./auth
                ./cart
                ./items
                ./user
            ./Pages
                ./About/
                ./Error.js
            ./style
                ./sass/
        ./public
            index.html
        ./App.js
        ./index.js

    ./routes
        ./auth.js
        ./items.js
        transactions.js
        user.js
    app.js
    routes.js
```

If you want to contribuite you need the password and the secret word. If you want this information please send me a private message 