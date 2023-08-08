# VGReviews

This project was bootstrapped with [Create React App] utilizing a backend Rails with a postgresql database hosted on Render.  VGReviews is a single page applications in which users can submit reviews for videogames currently available in the database.  Administrative users have full CRUD access to both the Review and Videogame models.

## Using VGReviews

First, fork and clone this repository.  Then navigate to the vgreview-app directory and run the following scripts.

### `rails db:migrate db:seed`

Initializes the database and seeds it with data for the application to utilize

### `rails s`

Launches the api in which all neccessary data for frontend is stored.

### `npm start --prefix frontend`

Runs the app in the development mode.
Open [http://localhost:4000](http://localhost:4000) to view it in your browser.

Now utilize the application in your browser.  The following is a video demonstrating this:

https://youtu.be/pdVWP708xyA