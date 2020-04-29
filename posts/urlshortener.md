---
title: 'FCC-APIs and Microservices --- Timestamp Microservice Project'
date: '2020-03-07'
---

### FreeCodeCamp-APIs and Microservices --- URL Shortener Microservice

![](https://cdn-images-1.medium.com/max/800/1*-mfOs1DY8p5HM0TIv-m4BQ.jpeg)

FreeCodeCamp

This project is FreeCodeCamp's third [**APIs and Microservices Project**](https://www.freecodecamp.org/learn/apis-and-microservices/apis-and-microservices-projects/url-shortener-microservice)**.** In this project, we'll be create a simple URL shortener API.

We'll be using N`ode.js/Express` and M`ongoDB`

**Outline**

-   Create a MongoDB database on MongoDB Atlas.
-   Install all the required npm packages.
-   Define the environment variables.
-   Create an express server.
-   Connect to the database.
-   Create the URL Model.
-   Create the API routes post and get methods.
-   Conclusion

* * * * *

**Step 1: Create a MongoDB database on MongoDB Atlas**

We learned before create a MongoDB database on MongoDB Atlas. You can checkout the Freecodecamp M[ongoDB lecture](https://www.freecodecamp.org/learn/apis-and-microservices/mongodb-and-mongoose/) and M[ongoDB documentation](https://www.mongodb.com/) for more information.

We need to connection string like this..

![](https://cdn-images-1.medium.com/max/800/1*UDUNv_g7usmvTgaWmLkrTw.png)

MongoDB --- Connection String

Copy the connection string at the bottom and paste it somewhere for now. We will use it in our application to connect to the database.

Finally, our database set up is OK. Time to set up our project packages.

* * * * *

**Step 2: Install all the required npm packages**

Our project will need some npm packages and below is the list of\
those packages.

-   **Express :** A node.js framework that makes it easy to build web\
    applications.
-   **Mongodb :** Official MongoDB driver for Node.js
-   **Mongoose :** An object modeling tool designed to work in an\
    asynchronous environment. We will use mongoose to define database\
    schemas and interact with the database.
-   **Cors :** CORS is a node.js package for providing a [Connect](http://www.senchalabs.org/connect/)/[Express](http://expressjs.com/) middleware that can be use to enable [CORS](http://en.wikipedia.org/wiki/Cross-origin_resource_sharing) with various options.
-   **Body-parser :**Node.js body parsing middleware. Parse incoming request bodies in a middleware before your handlers, available under the `req.body` property.
-   **Valid-url :** This module collects common URI validation routines to make input validation, and untainting easier and more readable.
-   **Shortid :** Amazingly short non-sequential url-friendly unique id generator.

Now that we know what each of those packages will do, let's go ahead and\
install them. If you use freecodecamp boilerplate link you need just valid-url and shortid packages. Other packages comes with boilerplate. Open the package.json file and you can see Add Package button on the top side, install **shortid** and **valid-url** packages.

![](https://cdn-images-1.medium.com/max/800/1*XDug3ByxiHQKBBRMh49E4A.png)

package.json

* * * * *

**Step 3: Define the environment variables**

Open the **.env** file and add the following environment variable.

We have got MongoDB connection string at Step-1.Copy and paste your string from MongoDB Atlas. You have to fill your username and password area.

MONGO_URI='mongodb+srv://<yourusername>:<yourpassword>[@cluster0-lewgd.mongodb.net](mailto:Aa12345@cluster0-lewgd.mongodb.net)/test?retryWrites=true&w=majority'

* * * * *

**Step 4: Create an express server**

We used the Freecodecamp boilerplate, open the **server.js** file. You can see our express server is already created.

If you didn't use the boilerplate head over to **server.js** file and type the following code. Also you should be create your html and css files for front end. CSS file should be under the **public** folder, HTML file should be under the **views** folder.

![](https://cdn-images-1.medium.com/max/800/1*aRQinQ_EwlXhnNKeZmHqHw.png)

Open your terminal you should be seeing ;

**Node.js listening ...**

That means we've successfully set up our express server.

**Step 5: Connect to the database**

Go to **server.js** file and type the code below.

![](https://cdn-images-1.medium.com/max/800/1*zms_b8k0R-u4hMIFX6Cx-Q.png)

We required mongoose into our file on the topside. Use the mongoose ***connect*** method; first one is the database URL and second one is an object of options. We, therefore, supply the **useNewUrlParser** and **useCreateIndex** to avoid such deprecation warnings.

We have a pending connection to the test database running on localhost. We now need to get notified if we connect successfully or if a connection error occurs:

![](https://cdn-images-1.medium.com/max/800/1*cbLzFyifORQkKhABRX9Q8A.png)

You can see more information on the [**mongoosejs** docs](https://mongoosejs.com/docs/).

That's all we will need to create our connection to the database.

* * * * *

**Step 6: Create the URL model**

Now it's time to define our URL model.

![](https://cdn-images-1.medium.com/max/800/1*XxUoR7lJqp7EleXU7oonRA.png)

We create our mongoose schema which takes in an object.This object\
defines the different properties of the schema. In this project, we'll be use string properties. But mongoose provides us to with all these options that you can easily define on your properties.

On the bottom line we create a model called URL and pass it our schema and we then export the module so that it can be re-used in other files.

* * * * *

**Step 7: Create The API routes post and get methods**

Time to create our routes.

-   `HTTP POST` `/api/shorturl/new` --- Create new url
-   `HTTP GET` `/api/shorturl/:short_url?` --- Get original url via shorturl

![](https://cdn-images-1.medium.com/max/800/1*xvK41cOZnvwncoZaq89jvg.png)

In this code snippet above, we created post request route. The URL router creates a new URL along with the given information that we access from the req.body. Before the saving URL, we check the input is valid or not, after that generate a short URL. We check if it's already in the database but we can use the unique properties in our model. If we use this properties every URL will be unique. But in this project I choose this method.

Now we use the get method for the find original URL via our short URL. If we find the original url our browser will be redirect the original URL.

* * * * *

**Step 7: Conclusion**

We've come very short but useful way and I hope you've been able to learn something from this tutorial.

Here is the [link](https://github.com/baristure/FCC-urlshortener) to the repo.

Here is the [live](https://bdev-fccurl.glitch.me/) version on the glitch.\
Cheers!!