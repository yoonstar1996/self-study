import logo from "./logo.svg";
import "./App.css";
import Example1 from "./components/Example1";
import Example2 from "./components/Example2";
import Example3 from "./components/Example3";
import Example4 from "./components/Example4";
import Example5 from "./components/Example5";
import useWindowWidth from "./hooks/useWindowWidth";
import withHasMounted from "./hocs/withHasMounted";
import useHasMounted from "./hooks/useHasMounted";
import Example6 from "./components/Example6";
import Example7 from "./components/Example7";
import Example8 from "./components/Example8";

function App({ hasMounted }) {
  const width = useWindowWidth();

  const hasMountedFromHooks = useHasMounted();

  // console.log(hasMounted, hasMountedFromHooks);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {/* <Example1></Example1> */}
        {/* <Example2></Example2> */}
        {/* <Example3></Example3> */}
        {/* <Example4></Example4> */}
        {/* <Example5></Example5> */}
        {/* <Example6></Example6> */}
        {/* <Example7></Example7> */}
        <Example8></Example8>
        {/* {width} */}
      </header>
    </div>
  );
}

export default withHasMounted(App);
