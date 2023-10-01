# NodeJS

This folder contains two topics, each representing a distinct Node.js project showcasing different aspects of application development using Node.js.

## Calculator

This section of the NodeJS folder contains a simple calculator application implemented in Node.js. The application is designed to perform basic mathematical operations such as addition, subtraction, multiplication, and division. It demonstrates the use of routers and controllers to handle HTTP requests for these operations.

### Files:

* **Cal.js**: It sets up the Express.js server and defines the routes for the calculator operations. Additionally, it listens on port 3000 for incoming requests.

* **calculator.js (Router)**: serves as the router for the calculator application. It handles incoming HTTP requests and routes them to the appropriate controller methods based on the requested mathematical operation.

* **calculator.js (Controller)**: contains the logic for performing mathematical calculations. It includes four controller methods, each corresponding to a specific mathematical operation: addition, subtraction, multiplication, and division. These methods retrieve input data from the request, perform the calculation, and send the result as a response to the client.

## How to Use

1. To run the calculator application, make sure you have Node.js installed on your system.

2. Navigate to NodeJS folder.

3. Open a terminal or command prompt and run the following command to start the server:

   ```bash
   node .\Cal.js

4. The server should now be running on port 3000.

5. You can use an API testing tool such as Postman or send HTTP requests from your application to the following endpoints to perform mathematical calculations:

* Addition: `POST /calculator/add`
* Subtraction: `POST /calculator/subtract`
* Multiplication: `POST /calculator/multiply`
* Division: `POST /calculator/divide`
Ensure that you include the necessary request body data (e.g., num1 and num2) in your POST requests.

6. The server will respond with the result of the mathematical operation.

#### *Feel free to explore and use this simple calculator application to understand how routers and controllers in Node.js can be used to handle API requests and perform operations.*

## NodeJS-MySQL-UserRegistration

This section of the NodeJS folder contains a comprehensive user registration application built using Node.js and MySQL. The application demonstrates the implementation of CRUD (Create, Read, Update, Delete) operations for user management, following a structured project layout with routers, controllers, models, and a database utility module.

### Files:

* **apps.js**: is the entry point for the user registration application. It sets up an Express.js server, initializes routes for handling user-related operations, and listens on port 3000 for incoming requests.

* **user.js (Router)**: serves as the router for user-related routes. It routes incoming HTTP requests to the appropriate controller methods for user registration, retrieval, update, and deletion.

* **user.js (Controller)**: contains the logic for user-related operations. It includes controller methods for user registration, retrieval, update, and deletion. These methods interact with the user model and respond to client requests accordingly.

* **user.js (Model)**: defines the data model for user registration. It includes schema definitions and methods for performing CRUD operations on user data, such as insertion, retrieval, updating, and deletion.

* **database.js (Util)**: provides utility functions for connecting to the MySQL database, executing queries, and managing database operations for the user registration application.

## How to Use

1. To run the user registration application, make sure you have Node.js installed on your system.

2. Navigate to NodeJS folder.

3. Open a terminal or command prompt and run the following command to start the server:

   ```bash
   node .\apps.js

4. The server should now be running on port 3000.

5. You can use an API testing tool like Postman or send HTTP requests from your application to the following endpoints to perform user-related operations:

* Register a User: `POST /user/register`
* Get User Information: `POST /user/get`
* Update User Information: `POST /user/update`
* Delete a User: `POST /user/delete`
Ensure that you include the necessary request body data (e.g., user details) in your POST requests.

6. The server will respond with the status and appropriate messages based on the success or failure of the requested operation.

<p align="center">
<img alt="example REQUEST RESPONSE" src="https://github.com/niveditakaur/Triweb-Learning/assets/120108968/6d217fb2-0e09-43c2-9f3c-98c222414b69" width='800'>
</p>

<p align="center">
<img alt="database" src="https://github.com/niveditakaur/Triweb-Learning/assets/120108968/867c7cf2-72af-4b73-ba2b-4a1d95f281ea" width='800'>
</p>

#### *Feel free to explore and use this comprehensive user registration application to understand how to build CRUD operations using Node.js and MySQL while following a structured project layout.*