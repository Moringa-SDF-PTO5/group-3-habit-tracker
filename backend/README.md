# group-3-habit-tracker
This is the backend for the Habit Tracker application, built using Flask and PostgreSQL. It provides a RESTful API for managing users, habits, progress, and reminders.

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

1. **Clone the repository:**

    ```
    git clone https://github.com/yourusername/group-3-habit-tracker.git
    cd group-3-habit-tracker/backend
    ```

2. **Create and activate a virtual environment:**
There are two ways to create a virtual environment in Linux. See below.
    ```
    1. python -m venv venv 
    2. pipenv install followed by pipenv shell
    
    source venv/bin/activate  # On Windows use `venv\Scripts\activate`
    ```

3. **Install the required packages:**

    ```
    pip install -r requirements.txt
    ```

4. **Install PostgreSQL and create a database:**

    Follow the instructions on the [PostgreSQL website](https://www.postgresql.org/download/) to install PostgreSQL on your machine. Then create a database, in our scenario we did the following:

    ```
    # Connect to PostgreSQL as a superuser
    sudo -u postgres psql
    # Create the role habit_user with the password of your choice
    CREATE ROLE habit_user WITH LOGIN PASSWORD 'habit';
    # Create the database habit_tracker with habit_user as the owner
    CREATE DATABASE habit_tracker OWNER habit_user;
    # Grant all privileges on the database to habit_user
    GRANT ALL PRIVILEGES ON DATABASE habit_tracker TO habit_user;
    ```
    After setting up the database and role, you can connect to the new database using the following command:

    ```
    psql -U habit_user -d habit_tracker
    ```
See below some screen shots to aid you.

![Creating database.](images/postgres.png)

![Connecting to new database.](images/postgres2.png)


## Configuration

1. **Configure the application:**

    Create a `.env` file in the `backend` directory with the following content:

    ```env
    FLASK_APP=app
    FLASK_ENV=development
    DATABASE_URL=postgresql://habit_user:habit@localhost/habit_tracker
    SECRET_KEY=your_secret_key
    ```

    Replace `username`, `password`, and `your_secret_key` with your PostgreSQL username, password, and a secret key of your choice. In our case it is as written above

2. **Initialize the database:**

    ```bash
    flask db init
    flask db migrate -m "Initial migration"
    flask db upgrade
    ```

## Running the Application

To run the application locally, execute:

```
flask run or pipenv run python run.py
```

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
