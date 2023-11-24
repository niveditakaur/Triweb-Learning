# Quiz Manager Backend

This project exemplifies a robustly designed Quiz Manager Backend API, facilitating quiz creation, publishing, and management functions. This backend employs routers, controllers, and modules to handle quiz operations, integrating JWT-based authentication for enhanced security. Leveraging MongoDB for scalability, it facilitates quiz creation, publishing, user interaction, and comprehensive report generation. Ideal for integration into frontend applications or direct interaction via Postman, it provides a secure and scalable solution for managing quizzes.

## Features

- **User Authentication**: Secure your APIs with JWT-based user authentication.
- **Quiz Creation**: Create, edit, and manage quizzes.
- **Quiz Publishing**: Publish quizzes to make them accessible to users.
- **Quiz Taking**: Users can start quizzes, answer questions, and submit their tests.
- **Report Generation**: Access detailed reports for quiz analysis.
- **Database**: MongoDB is used as a scalable and robust database solution.

## API Endpoints

For API testing and interaction, you can refer to the following endpoints:

- **POST /auth/register**: Register a new user.
- **POST /auth/login**: Authenticate and log in a user.
- **POST /quizzes:** Create a new quiz.
- **GET /quizzes**: Retrieve a list of published quizzes.
- **GET /quizzes/:quizId**: Get details of a specific quiz.
- **POST /quizzes/start**: Start a quiz.
- **POST /quizzes/submit**: Submit a completed quiz.
- **GET /quizzes/reports**: View quiz reports.
