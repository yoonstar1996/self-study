import {
  BrowserRouter,
  Redirect,
  Route,
  Routes,
  Switch,
} from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Links from "./components/Links";
import NavLinks from "./components/NavLinks";

const isLogin = false;

function App() {
  return (
    <BrowserRouter>
      {/* <Routes> */}
      {/* v6 버전 */}
      {/* <Route path="/" element={<Home />}></Route> */}
      <Links></Links>
      <NavLinks></NavLinks>
      <Switch>
        {/* v5 버전  */}
        <Route
          path="/login"
          render={() => (isLogin ? <Redirect to="/" /> : <Login />)}
        />
        <Route path="/profile/:id" component={Profile} />
        <Route path="/profile" component={Profile} />
        <Route path="/about" component={About} />
        <Route path="/" exact component={Home} />
        <Route component={NotFound} />
      </Switch>
      {/* </Routes> */}
    </BrowserRouter>
  );
}

export default App;
