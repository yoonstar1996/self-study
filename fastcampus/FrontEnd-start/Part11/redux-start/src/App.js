import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Todos from "./pages/Todos";
import Users from "./pages/Users";
import history from "./redux/store";

function App() {
  return (
    <Router history={history}>
      <Route path="/" exact component={Home} />
      <Route path="/todos" exact component={Todos} />
      <Route path="/users" exact component={Users} />
    </Router>
  );
}

export default App;
