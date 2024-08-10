import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
// import CreatePost from "./components/CreatePost";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import TodoListProvider from "./store/todo-list-store";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <TodoListProvider>
      <div className="app-container">
        <SideBar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <div className="content">
          <Header />

          <Outlet />

          <Footer />
        </div>
      </div>
    </TodoListProvider>
  );
}

export default App;
