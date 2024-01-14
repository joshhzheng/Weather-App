# Weather App 

## Installation and Usage

1. **Set Up Environment Variables:**
   - Navigate to the `SERVER` directory.
   - Create a new file named `.env`.
   - Open the `.env` file and set the OpenWeatherMap API key:
     ```plaintext
     api="your-api-key-here"
     ```
   - Obtain a free OpenWeatherMap API key from [here](https://openweathermap.org/api).

2. **Install Dependencies:**
   - Change directory to the `SERVER` directory.
     ```bash
     cd SERVER
     ```
   - Run the following command to install Node.js dependencies:
     ```bash
     npm install
     ```

3. **Client Installation:**
   - Change directory to the `CLIENT` directory.
     ```bash
     cd CLIENT
     ```
   - Run the following command to install React dependencies:
     ```bash
     npm install
     ```

4. **Run the Application:**
   - To start the application, run the following command in the `CLIENT` directory:
     ```bash
     npm start
     ```

   This will launch the application in your default web browser.

### Notes:

- Ensure you have Node.js and npm installed on your machine before proceeding with the installation.
- Make sure to obtain a valid OpenWeatherMap API key here https://openweathermap.org/api 
- The application consists of a server-side component (located in the `SERVER` directory) and a client-side component (located in the `CLIENT` directory).
