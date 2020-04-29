---
title: 'FCC-APIs and Microservices --- Timestamp Microservice Project'
date: '2019-12-08'
---
### FreeCodeCamp-APIs and Microservices --- Timestamp Microservice Project

![](https://cdn-images-1.medium.com/max/800/1*83jSovab7wOQQq-MJDuRgQ.jpeg)

FreeCodeCamp

Our goal is [freeCodeCamp](https://medium.com/u/8b318225c16a) APIs and Microservices certificate. We have to do five project. First one is Timestamp Microservice 🕒🚀

I used [freeCodeCamp](https://medium.com/u/8b318225c16a) Glitch boilerplate project. Here is a starter [link](https://glitch.com/edit/#!/remix/clone-from-repo?REPO_URL=https://github.com/freeCodeCamp/boilerplate-project-timestamp/).

![](https://cdn-images-1.medium.com/max/800/1*oV14CM6kSwxPaL_Sfds4FQ.png)

package.json

I used Node.Js, Express for my project also cors for the [freeCodeCamp](https://medium.com/u/8b318225c16a) tests.

Let's get start to write our codes 👨‍💻

We have got one javascript file called as a server.js for the app run. First thing to do we need call packages to server.js file and create an [Express application.](http://expressjs.com/en/4x/api.html)

![](https://cdn-images-1.medium.com/max/800/1*1vkaNEHvyIRHn_saso5xGQ.png)

Call the Packages and Create an Express Application

We have to handle six conditions for our api.

1-) It should handle a valid date, and return the correct unix timestamp

2-) It should handle a valid date, and return the correct UTC string

3-) It should handle a valid unix date, and return the correct unix timestamp

4-) It should return the expected error message for an invalid date

5-) It should handle an empty date parameter, and return the current time in unix format

6-) It should handle an empty date parameter, and return the current time in UTC format

Our dateString input types are like this formats [2019--12--07],[1575741823145],[ ],[invalid-randomtext].

![](https://cdn-images-1.medium.com/max/800/1*_ZqB3NR17GVuwVoBZWCGdA.png)

First of all if our input is an empty value we need to check this condition and create a new Date() variable. Else we need to check input is a dateString or a unixtime. If our input is not empty or valid date types, we'll set to it is invalid.

After that we need to shows our index.html file. We used [our public(style,javascript)](https://expressjs.com/en/starter/static-files.html) folder and render the index.html file.

![](https://cdn-images-1.medium.com/max/800/1*Ig-v2GSG298_DaN_DEs34Q.png)

I used freeCodeCamp starter index.html file. I think it's explaining clearly.

Last thing we have to [listen](https://expressjs.com/en/starter/hello-world.html) request for our app on port 3000. We can check the console if it works properly we can see the force 😉

![](https://cdn-images-1.medium.com/max/800/1*AbxCwqUGP_je4MGjB5B9Eg.png)

It's working. We need to add this url to our projects url .... /api/timestamp/

Output is should be like this format .

![](https://cdn-images-1.medium.com/max/800/1*0prwJ2sIcn2Q25mMw5uJ_Q.png)

It's my birthday 👅

Here is the live version >>> <https://bdev-fcctimestamp.glitch.me>