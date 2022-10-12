# Serverless Functions

![Serverless logo](/serverless-functions/assets/img/Asset1.png?raw=true "Sereverless logo")

## About Serverless Functions

Serverless has transformed application development by eliminating the need to provision and manage any underlying infrastructure. The current serverless ecosystem has grown more mature, and it now has considerable overlap with the world of container-based technologies. The wide range of available options has led over half of organizations operating in each cloud to adopt serverless.

### The netlify.toml

This file tells netlify where the function are located. It tell netlify what Tod with the functions.

### The functions Folder

Stores the functions

# Brief Refreshers:

### Https Requests

In Serverless Functions `StatusCodes` is used for the communication the request. HTTP response status codes indicate whether a specific HTTP request has been successfully completed. Responses are grouped in five classes:

1. Info Response(100–199)
2. Successful Response(200–299) example: 201 resource created
3. Redirection Messages(300–399)
4. Client Error Response(400–499) example: 404 bad request
5. Server Error Response(500–599)

### This Project uses Axios for Https Requests

Axios is a promise based HTTP client for the browser and Node. js. Axios is a modern, Promise-based HTTP client library. This means that Axios is used to send an HTTP request and handle their responses, all using JavaScript's promises. Axios supports both Node.js and JavaScript in the browser. Axios makes it easy to send asynchronous HTTP requests to REST endpoints and perform CRUD operations. It can be used in plain JavaScript or with a library such as Vue or React. Check out [Axios Docs](https://axios-http.com/docs/intro) for more.

### API’s

Not to be confused with hoppy IPAs, or the India Pale Ale, a perfect mixture of longevity and hoppishly harsh tasting beer which was popular in colonial Britain as export beer to India. Application Programming Interface or API is used to develop http interface by interacting with front end data. API is specifically servers interaction which responsible fo requests and responses. “Let’s say you want to build a simple website used to sign clients up for appointments. You want to give your clients the ability to automatically create a Google calendar event with the details for that appointment.The idea is to have your website’s server talk directly to Google’s server with a request to create an event with the given details. Your server would then receive Google’s response, process it, and send back relevant information to the browser, such as a confirmation message to the user.” Reference: https://www.freecodecamp.org/news/what-is-an-api-in-english-please-b880a3214a82/
</br>
</br>

# SetUp

Package are Installed locally in the package.json. To do this run command:</br>
`npm install`

### Installing Packages Locally vs Globally

Installing a package globally allows you to use the code in the package as a set of tools on your local computer.
To download and install packages globally, on the command line, run the following command:</br>
` install -g <package_name>`

You can find where global packages are installed by running:</br>
`npm root -g`

Finally you can list all local installed packed with command:</br>
`npm ls -g —depth 0`

## Getting Started

To build the application in your local server run command:</br>
`npm run netlify`

### Redirects

In this file you can also change the url of the function. This is done with the `[[redirects]]`
The redirects takes the from url value and to url. Where are you redirected from and to where. Status = 200 eliminates the 301 redirect message from the network and doesn’t aching the value to original function url. This can be done directly from the browser. Remember that the original path will work. But redirect help to create your own url. In the example below the new url will be http://localhost:8888/api/1-hello. Check the Browser Network Tab for more by right clicking in the projects browser selecting `inspect` and then `Network`. [Netlify Setting Up Redirects](https://www.netlify.com/blog/2021/12/13/setting-up-redirects-on-netlify/)

`[build] functions = './functions' [[redirects]] from = '/api/*' to = '/.netlify/functions/:splat' status = '200'`

### Local API vs Headless CMS API

With this project React or Gatsby can also be used as Netlify CLI will be able to tell which project is being used. Now that is out of the way, Basic API example uses local function where the data is pulled locally. Airtable is an example which uses headless CMS to store the data and then pull it using API.

# Headless CMS

CMS stands for Content Management System and is used to, well, manage content.
Traditionally those are so called monolithic CMS', meaning the managing of data and the creation of html is one system, like one big block - a monolith.</br>
The most popular CMS is called Wordpress. It uses php scripts to aggregate the data you feed into it and then generates html pages - acting as the head of system.</br>
A headless system, on the other hand, doesn't create html pages, it has the head, stripped off, hence the name. On a headless system the CMS only takes care of the data management, no html generation is happening.
In order to view data on a website, you have to access the CMS’ data through an API (application programming interface). Because the data is pretty raw you can work with it however you like. You can feed it into a frontend framework, taking control over frontend logic, styling, formatting, choose what parts of your frontend should be computed on the server and the client and much more. In short, it stores data and makes it accessible through an API which you then custom make a front end for.
https://www.whalesync.com/blog/using-airtable-as-a-cms

# Airtable

## Hidding the API Keys

The api keys/environment variables usually contains some sensitive information. For example, token secret, db connection info, etc. If you put them into version control directly, those sensitive data may leak to unwanted parties.

Airtable-node:
Netlify-cli: package wich allows to set netlify production in the local machine
https://www.npmjs.com/package/airtable-node
