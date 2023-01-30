import "./App.css";
import { RecoilRoot } from "recoil";
import FontButton from "./RecoilExample/FontButton";
import Text from "./RecoilExample/Text";
import CharacterCounter from "./RecoilExample/CharacterCount";
import TodoList from "./RecoilExample/Todo/TodoList";

function App() {
  return (
    <>
      <RecoilRoot>
        {/* <FontButton /> */}
        {/* <Text /> */}
        {/* <CharacterCounter /> */}
        <TodoList />
      </RecoilRoot>
    </>
  );
}

export default App;
