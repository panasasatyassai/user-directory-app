import React from "react"
import UserList from "./components/UserList"
import "./App.css"

function App() {
  return (
    <div className="app-container">
      <h1 className="title">User Directory</h1>
      <UserList />
    </div>
  )
}

export default App
