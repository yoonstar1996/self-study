import "./App.css";
import { Route, Switch, Link, NavLink, useParams } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <h1>React Router Dom example</h1>
        <ul>
          <li>
            <NavLink exact to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/topics">Topics</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
        <Switch>
          <Route path="/topics">
            <Topics></Topics>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/">Not found</Route>
        </Switch>
      </div>
    </>
  );
}

export default App;

function Home() {
  return (
    <>
      <h2>Home</h2>
      Home...
    </>
  );
}

let contents = [
  { id: 1, title: "HTML", desc: "HTML is ..." },
  { id: 2, title: "JS", desc: "JS is ..." },
  { id: 3, title: "React", desc: "React is ..." },
];

function Topic() {
  let params = useParams();
  let topic_id = params.topic_id;
  let selected_topic = {
    title: "Sorry",
    desc: "Not Found",
  };
  for (let i = 0; i < contents.length; i++) {
    if (contents[i].id === Number(topic_id)) {
      selected_topic = contents[i];
      break;
    }
  }
  return (
    <>
      <h3>{selected_topic.title}</h3>
      {selected_topic.desc}
    </>
  );
}

function Topics() {
  let lis = [];
  for (let i = 0; i < contents.length; i++) {
    lis.push(
      <li key={contents[i].id}>
        <NavLink to={"/topics/" + contents[i].id}>{contents[i].title}</NavLink>
      </li>
    );
  }
  return (
    <>
      <h2>Topics</h2>
      <ul>{lis}</ul>
      <Route path="/topics/:topic_id">
        <Topic></Topic>
      </Route>
    </>
  );
}
function Contact() {
  return (
    <>
      <h2>Contact</h2>
      Contact...
    </>
  );
}
