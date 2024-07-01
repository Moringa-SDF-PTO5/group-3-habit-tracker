# Habit Tracker Frontend

This is the frontend application for the Habit Tracker project. The Habit Tracker helps users to track their daily habits, visualize their progress, and stay motivated. This document will guide you through the setup process for the frontend application.

## Table of Contents

- [Habit Tracker Frontend](#habit-tracker-frontend)
  - [Table of Contents](#table-of-contents)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
  - [Project Structure](#project-structure)
  - [Available Scripts](#available-scripts)
  - [Configuration](#configuration)
  - [Contributing](#contributing)
  - [License](#license)

## Prerequisites

Before you begin, ensure you have the following installed on your local machine:

- [Node.js](https://nodejs.org/) (version 14.x or later recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) (npm is bundled with Node.js)

## Installation

Follow these steps to set up the project on your local machine:

1. *Clone the repository:*

    bash
    git clone https://github.com/Moringa-SDF-PTO5/group-3-habit-tracker.git
    cd group-3-habit-tracker
    

2. *Install dependencies:*

    Using npm:

    bash
    npm install
    

    Or using yarn:

    bash
    yarn install
    

## Running the Application

To start the development server, use the following command:

Using npm:

bash
npm start


Or using yarn:

bash
yarn start


This will run the app in development mode. Open https://group-3-habit-tracker-1-izfj.onrender.com to view it in your browser. The page will reload when you make changes.



- *public/*: Contains static assets like HTML and images.
- *src/*: Contains the source code for the application.
  - *components/*: Contains React components.
  - *services/*: Contains service modules for API calls.
  - *App.js*: The root component of the application.
  - *index.js*: The entry point of the application.
  - 

## Available Scripts

In the project directory, you can run:

- npm start or yarn start: Runs the app in development mode.
- npm build or yarn build: Builds the app for production to the build folder.
- npm test or yarn test: Launches the test runner in the interactive watch mode.
- npm eject: Ejects the create-react-app configuration. *Note:* This is a one-way operation.


## Contributors

The following people contributed to the project

1. Mary Njoroge

2. Alex Njoroge


## Habit Tracker Backend

The folowing is a link to our backend repository: https://github.com/Moringa-SDF-PTO5/backend1


This is the README.md  for the Habit Tracker application, built using Flask and PostgreSQL. It provides a RESTful API for managing users, habits, progress, and reminders.

## Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [Contributing](#contributing)
- [License](#license)

## Installation

### Prerequisites

- Python 3.8 or higher
- PostgreSQL
- Virtualenv (optional but recommended)

### Steps

1. Clone the repository:

    
    git clone https://github.com/yourusername/group-3-habit-tracker.git
    cd group-3-habit-tracker/backend
    

2. Create and activate a virtual environment:
There are two ways to create a virtual environment in Linux. See below.
    
    1. python -m venv venv 
    2. pipenv install followed by pipenv shell
    
    source venv/bin/activate  # On Windows use `venv\Scripts\activate`
    

3. Install the required packages:

    
    pip install -r requirements.txt
    

4. Install PostgreSQL and create a database:

    Follow the instructions on the [PostgreSQL website](https://www.postgresql.org/download/) to install PostgreSQL on your machine. Then create a database, in our scenario we did the following:

    
    ### Connect to PostgreSQL as a superuser
    sudo -u postgres psql

    ### Create the role habit_user with the password of your choice
    CREATE ROLE habit_user WITH LOGIN PASSWORD 'habit';

    ### Create the database habit_tracker with habit_user as the owner
    CREATE DATABASE habit_tracker OWNER habit_user;

    ### Grant all privileges on the database to habit_user
    GRANT ALL PRIVILEGES ON DATABASE habit_tracker TO habit_user;
    
    After setting up the database and role, you can connect to the new database using the following command:

    
    psql -U habit_user -d habit_tracker
    
See below some screen shots to aid you.

![Creating database.](/images/postgres.png)

![Connecting to new database.](/images/postgres2.png)


## Configuration

1. Configure the application:


    Create a .env file in the backend directory with the following content:

    env FLASK_APP=run.py

    FLASK_ENV=development

    DATABASE_URL=postgresql://habit_user:habit@localhost/habit_tracker

    SECRET_KEY=your_secret_key

    

    Replace username, password, and your_secret_key with your PostgreSQL username, password, and a secret key of your choice. In our case it is as written above

2. Initialize the database:

    
    flask db init

    flask db migrate -m "Initial migration"

    flask db upgrade
    

## Running the Application

To run the application locally, execute:


flask run or pipenv run python run.py


The application will be available at http://127.0.0.1:5000. 



## Contributing
Fork the repository. 

Create your feature branch (git checkout -b feature/my-feature). 

Commit your changes (git commit -am 'Add some feature'). 

Push to the branch (git push origin feature/my-feature). 

Create a new Pull Request.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

This README provides a comprehensive guide to setting up and using the project. If you have any questions or encounter issues, feel free to open an issue on GitHub.

## Authors
Stacy Njehia. 2024

Irene Ndinda. 2024

Notes:
. Ensure all dependencies in the requirements.txt file are accurate.

. Provide accurate paths and environment variable names based on your project's actual setup.

   
## License

This project is licensed under the MIT License.

Copyright 2024

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE
