# User List App

This project is a simple React application that **consumes a REST API** to display a list of users.  
It was built as part of a checkpoint to practice:

- Using **Create React App**
- Using **axios** to call an external API
- Managing state with **useState**
- Fetching data with **useEffect**
- Rendering lists in React
- Styling a React app

---

## 1. Project Setup

This project was bootstrapped with [Create React App](https://create-react-app.dev/).

### Prerequisites

- Node.js (LTS recommended)
- npm (comes with Node)

### Install Dependencies

```bash
npm install
This installs:

react & react-dom

axios (for HTTP requests)

Other dependencies from Create React App

2. How It Works
API Used

The app uses the free JSONPlaceholder API:

https://jsonplaceholder.typicode.com/users


This API returns a list of fake users with fields like name, username, email, address, and company.

Main Logic

All the main logic lives in src/UserList.js:

useState is used to store:

listOfUser → array of users fetched from the API

loading → boolean to show loading state

error → string to show an error message if the request fails

useEffect runs once on component mount and calls the API using axios.

On a successful response, listOfUser is updated with response.data.

The component maps over listOfUser and displays each user inside a styled card.

3. Folder Structure (Relevant Files)
src/
├── App.js          # Root component that renders <UserList />
├── App.css         # Global styles
├── UserList.js     # Main user list component (API call + rendering)
└── UserList.css    # Styles for the user list and cards

4. Running the App

Start the development server:

npm start


Then open:

http://localhost:3000


You should see a "User Directory" page with user cards loaded from the API.

5. Features Implemented (Checklist)

✅ Project created with Create React App

✅ UserList.js created inside the src folder

✅ axios installed and imported

✅ JSONPlaceholder API used: https://jsonplaceholder.typicode.com/users

✅ useEffect hook used to fetch data when the component mounts

✅ useState hook used to store the list in listOfUser

✅ listOfUser.map() used to display the list of users on the screen

✅ Basic error and loading states handled

✅ App styled with custom CSS (UserList.css + App.css)

6. Custom Styling

The app uses a dark-themed UI with:

A centered container

Card layout using CSS Grid

Avatar circle showing the first letter of the user’s name

Hover effects on user cards

You can customize the styles in:

src/UserList.css

src/App.css

7. Scripts

Available npm scripts:

# Start development server
npm start

# Build production bundle
npm run build

# Run tests (none added yet, but command is available)
npm test

8. Possible Improvements

Add a search bar to filter users by name or username

Add pagination or "Show more" button

Show more user details in a modal or separate page

Add unit tests for the UserList component

9. Credits

API: JSONPlaceholder

Bootstrapped with::Create React App
