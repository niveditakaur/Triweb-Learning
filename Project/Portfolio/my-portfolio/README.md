# Portfolio

This portfolio website, built using React, showcases my skills, experiences, projects, and educational background in a user-friendly format.

Live version of this portfolio:\
[![Visit My Portfolio](https://img.shields.io/badge/Visit-My_Portfolio-blueviolet?style=for-the-badge&logo=react)](https://niveditakaurportfolio.vercel.app/)

## Preview

#### About Page

<img src="https://github.com/niveditakaur/Triweb-Learning/assets/120108968/219266f8-7b88-4a40-bbc3-737f9e111800" alt="About Page" width="600" >

#### Skills Page

<img src="https://github.com/niveditakaur/Triweb-Learning/assets/120108968/8faa07d1-3715-4c65-b05b-891be61e1642" alt="Skills Page" width="600" >

#### Experience Page

<img src="https://github.com/niveditakaur/Triweb-Learning/assets/120108968/3df4300c-3a8f-4a64-ae3d-2fcc65a6a82f" alt="Experience Page" width="600" >

#### Projects Section

<img src="https://github.com/niveditakaur/Triweb-Learning/assets/120108968/a0317120-1940-47e5-b519-0eb2ea30f7ff" alt="Projects Page" width="600" >

#### Education Section

<img src="https://github.com/niveditakaur/Triweb-Learning/assets/120108968/3dba76ae-e943-4c36-b931-792c36466300" alt="Education Page" width="600" >

#### Contact Section

<img src="https://github.com/niveditakaur/Triweb-Learning/assets/120108968/ada2598c-f885-441e-a4c9-a64203079019" alt="Contact Page" width="600" >

## Folder Structure

### public

- **📁images/LogoImage.png**: Contains the portfolio logo image in PNG format.
- **index.html**: The initial HTML structure for the portfolio website, featuring meta tags and a JavaScript fallback for rendering.

### src

- **📁components**: Divided into 13 subfolders:

  - **About**: Includes an About component and styled social media icons.
  - **Cards**: Consists of Education and Experience card components showcasing details like school name, degree, professional experiences, roles, companies, dates, descriptions, and skills.
  - **Contact**: Contains a contact form component integrated with Firebase for form validation, functionality to send messages, and storing form data securely.
  - **Education**: Features a section displaying academic history with a timeline format.
  - **Experience**: Displays professional experiences in a timeline format.
  - **Footer**: Contains a component with navigation links, social media icons, and copyright details.
  - **GoToTop**: Offers a scroll-to-top functionality component.
  - **HeroSection**: Presents an introduction about the portfolio owner with an animated image and a downloadable résumé button.
  - **Navbar**: Houses a responsive navbar with mobile menu functionality and dynamic links.
  - **ProjectDetails**: Includes a modal component displaying project details, providing options to view code and live applications.
  - **Projects**: Showcases projects using a carousel format with detailed information and modal functionality.
  - **Skills**: Displays skills with corresponding images for visual representation.
  - **Firebase**: Contains a file for Firebase initialization and database connections.

- **📁data**

  - **constants.js**: Holds a constants file defining data related to bio, skills, experiences, education, and projects.

- **📁utils**

  - **Themes.js** Includes a Themes file defining color theme constants for maintaining consistent styling across the application.

- **App.css**: This file contains global styles, such as font imports, resets, scrollbar customizations, and smooth scrolling behavior.

- **App.js**: The primary application structure that integrates styled components, theme providers, and routing functionalities.

- **Index.js**: Implements React.StrictMode for the application.

### Package Files

- **package-lock.json**: An updated package lock file.
- **package.json**: Includes project dependencies and configurations.

#### This structured collection of files creates a portfolio website using React, presenting a comprehensive view of the portfolio owner's experiences, projects, skills, and educational background in an aesthetically pleasing and user-friendly manner.

## Usage

To use this portfolio website, follow these steps:

1. Clone Repository:
   `git clone https://github.com/niveditakaur/Triweb-Learning.git`

2. Navigate to Project Directory:
   `cd Project/Portfolio/my-portfolio`

3. Install Dependencies:
   `npm install`

4. Start the Development Server:
   `npm start`

This command launches the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) in your browser to view the website.

## Requirements

To use this portfolio website, ensure you have the following installed:

- [Node.js](https://nodejs.org/en/): Required to run the npm commands.
- [Git](https://git-scm.com/): Enables cloning the repository and version control.

Ensure you've installed all dependencies by running `npm install` before starting the development server with `npm start`.
