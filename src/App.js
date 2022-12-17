import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./components/Profile";
import Signup from "./components/Signup";
import Header from "./components/Header";
import LoginForm from "./components/LoginForm";

function App() {
  return (
     <Router>
     <Header />
      <Routes>
      <Route path='/' element={ <Signup /> }/>
      <Route path='/login' element={ <LoginForm /> }/>
        <Route path='/profile' element={ <Profile /> }/>
      </Routes>
     </Router>
  );
}

export default App;
