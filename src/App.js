import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreateIdeaPage from "./pages/CreateIdeaPage";
import LogIn from "./pages/Login";
import SignUp from "./pages/SignUp";
import PrivateRoute from "./components/PrivateRoute";
import Header from "./components/Header/Header";
import ErrorPage from "./components/ErrorPage";

function App() {
  return (
    <div>
    <Header/>
      <Routes>
        <Route path="/" element={<PrivateRoute><HomePage/></PrivateRoute>} />
        <Route path="/addemployee" element={<CreateIdeaPage />} />
        <Route path="/login" element={<LogIn/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
