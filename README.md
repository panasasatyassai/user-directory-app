# React User Directory App

This project is a React-based application that fetches and displays user information from the **JSONPlaceholder API**.  
Each user is displayed in a card layout with details such as name, email, phone, company, website, and address.  
Additionally, a unique avatar is generated for every user using the **DiceBear Avatars API**.  
The application also includes a loading spinner while data is being fetched.

---

## 🚀 Features

- Fetches user data from a public REST API.
- Displays user details in a clean card layout.
- Generates unique avatars for each user based on their `username`.
- Shows a **loading spinner** while data is being fetched.
- Built with **React functional components** and **hooks** (`useState`, `useEffect`).

---

## 🛠️ Tech Stack

- **ReactJS** (Frontend framework)
- **CSS3** (Styling)
- **JavaScript (ES6+)**
- **JSONPlaceholder API** (User data)
- **DiceBear Avatars API** (User avatars)

---

## 📂 Project Structure

project-folder/
│-- public/
│-- src/
│ │-- components/
│ │ │-- UserList.js # Fetches data & renders list of user cards
│ │ │-- UserList.css # Styles for user list
│ │ │-- UserCard.js # Displays a single user card
│ │ │-- UserCard.css # Styles for user card
│ │-- App.js # Root component
│ │-- index.js # Entry point
│
│-- package.json # Project dependencies & scripts
│-- package-lock.json # Dependency lock file
│-- README.md # Project documentation



---

## ⚡ Getting Started

### 1. Clone the Repository
 
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>
2. Install Dependencies
npm install

3. Start the Development Server
npm start


This will run the app at http://localhost:3000.
🔗 APIs Used

User Data (JSONPlaceholder):
https://jsonplaceholder.typicode.com/users

User Avatars (DiceBear):

https://avatars.dicebear.com/v2/avataaars/{{username}}.svg?options[mood][]=happy


Example:

https://avatars.dicebear.com/v2/avataaars/Bret.svg?options[mood][]=happy
🎨 UI Features

User information is displayed in cards.

Each card shows:

Avatar

Name

Email

Phone

Company

Website

Address

Loading spinner appears while fetching data.
🚀 Deployment on Vercel (Optional)

You can also deploy this project live using Vercel:

Push your project to a GitHub repository (exclude node_modules).

Go to Vercel
 and sign in with GitHub.

Click New Project → Import your repository.

Configure project settings:

Framework Preset: React

Build Command: npm run build

Output Directory: build

Click Deploy and wait for the process to finish.

Vercel will provide you with a live URL to share.

Example:

https://your-app-name.vercel.app


👨‍💻 Author

Developed by Panasa Satya Sai
B.Tech – Computer Science and Engineering (CSE)












