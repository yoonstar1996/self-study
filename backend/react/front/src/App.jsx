import { useEffect, useState } from "react";

import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);
  const [input, setInput] = useState("");

  const fetchUsers = async () => {
    const res = await axios.get("/users");
    setUsers(res.data);
  };

  const addUser = async () => {
    if (!input.trim()) return;
    await axios.post("/users", { name: input });
    setInput("");
    fetchUsers();
  };

  const deleteUser = async (id) => {
    await axios.delete(`/users/${id}`);
    fetchUsers();
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h1>사용자 관리</h1>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="이름 입력"
      />
      <button onClick={addUser}>추가</button>

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name}
            <button onClick={() => deleteUser(user.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
