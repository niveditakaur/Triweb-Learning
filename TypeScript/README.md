# TypeScript

This folder contains practice examples of how to convert Node.js programs to TypeScript while implementing the concept of router, controller, model, and distribution (dist).

## What's inside?

- **yarn.lock**: Yarn packages to be added in the project.

- **tsconfig.json**: tsconfig.json file generated after TypeScript initialization.

- **package.json:** Packages that the src requires to run the code. It includes dependencies and devDependencies required for this TypeScript project.

- **nodemon.json**: File to store environment variables.

- **TypeScript/src**

   * **app.ts**: TypeScript code for the main application.
   * **routes/user.ts**: Folder containing TypeScript code for routing.
   * **models/user.ts**: TypeScript code for data models.
   * **controllers/user.ts**: TypeScript code for controllers.

- **TypeScript/dist**

   * **app.js**: Compiled JavaScript code for the main application.
   * **routes/user.js**: Compiled JavaScript code for routing.
   * **models/user.js**: Compiled JavaScript code for data models.
   * **controllers/user.js**: Compiled JavaScript code for controllers.

## Usage

This folder serves as an example of how to structure and convert Node.js applications into TypeScript. The project includes a basic REST API for user registration and demonstrates TypeScript concepts such as type checking, interfaces, and more.

## How to use

1. Clone the repository.
   ```bash
   git clone https://github.com/niveditakaur/Triweb-Learning.git 

2. Navigate to the TypeScript folder.

3. Install the required dependencies using Yarn.
   ```bash
   yarn install

4. Build the TypeScript code.
   ```bash
   yarn build

5. Start the application in development mode.
   ```bash
   yarn start:dev