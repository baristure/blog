---
title: 'FCC-APIs and Microservices ---  Request Header Parser Microservice Project'
date: '2019-12-11'
---
* * * * *

### FreeCodeCamp-APIs and Microservices --- Request Header Parser Microservice

![](https://cdn-images-1.medium.com/max/800/1*gcGiexaYtKCNRr7924RZfg.jpeg)

I built this microservice for [freeCodeCamp](https://medium.com/u/8b318225c16a)['s](http://freecodecamp.org/) second [**APIs and Microservices Project**](https://www.freecodecamp.org/learn/apis-and-microservices/apis-and-microservices-projects/request-header-parser-microservice).

Basically it accepts API requests and will respond with a JSON object containing the user's IP address, preferred language and information about their browser and operating system.

I used freeCodeCamp's Glitch boilerplate project. Here is a starter [link.](https://glitch.com/edit/#!/remix/clone-from-repo?REPO_URL=https://github.com/freeCodeCamp/boilerplate-project-headerparser/)

![](https://cdn-images-1.medium.com/max/800/1*NxzYUuv2vlqoHTNwFEBvNA.png)

* * * * *

We should use the Node.Js, Express and 'require-ip' for retrieving a request's IP address, also 'cors' for the freeCodeCamp tests for this project.

Let's start to write our main server.js file

![](https://cdn-images-1.medium.com/max/800/1*OU578wdTRoD_Nm7yHtWVOA.png)

If we don't use 'require-ip' packages the API will be standart answer for ip adress similar to this formats.

1-) If you're using localhost you'll see ;

127.0.0.1

2-) If you're using IPv4 you'll see;

::1

3-) If you're using IPv6 you'll see ;

::ffff:127.0.0.1

We can handle this problem with '[request-ip](https://www.npmjs.com/package/request-ip)' npm packages.

![](https://cdn-images-1.medium.com/max/800/1*r5nFiJM7UU_mxrCy9e6x9w.png)

Now it's time to HTTP GET request to the specified path ('/api/whoami') with the specified callback function.

![](https://cdn-images-1.medium.com/max/800/1*tLWvLXsL5u96vfns6d0Xbw.png)

After that time to serve static files such as images, CSS files, and JavaScript files, use the `express.static` built-in middleware function in Express. And app.get requests to the specified path and `res.sendFile` to provide fine-grained support for serving files.

![](https://cdn-images-1.medium.com/max/800/1*92y5rrWEBL9cOM4vSnvQOA.png)

Finally listen for connection on the specified host and port.

![](https://cdn-images-1.medium.com/max/800/1*7NtdlNsWW3tSudP4Rp32rA.png)

* * * * *

Actually this project was a little bit more simple than the [Timestamp microservice project.](https://medium.com/@baris.ture/freecodecamp-apis-and-microservices-timestamp-microservice-project-a586e0ab0e0e)

Here is the live version🦸‍♂️🦸‍♂️

[https://bdev-fccheaderparser.glitch.me](https://bdev-fccheaderparser.glitch.me/api/whoami)