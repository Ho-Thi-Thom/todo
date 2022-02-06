import { useState } from "react";
import "./app.css";
import Input from "./Components/Input";
import Text from "./Components/Text";

function App() {
  const [isShow, setIsShow] = useState(false);
  const [todos, setTodos] = useState([
    { id: Math.random(), value: "Hồ Thị Thoa" },
    { id: Math.random(), value: "Hồ Thị Diệu" },
  ]);
  const [temp, setTemp] = useState([]);
  const handleChange = (index, value, id) => {
    const temp = [...todos];
    temp.splice(index, 1, { id, value });
    setTodos(temp);
  };
  const handleClick = () => {
    setTodos([...todos, { id: Math.random(), value: "" }]);
  };
  const handleAdd = () => {
    setIsShow(!isShow);
    if (!isShow) {
      setTemp(todos);
    } else {
      setTodos(temp);
    }
  };
  const handleSave = () => {
    setTodos(todos.filter((item) => item.value !== ""));
    setIsShow(!isShow);
  };
  return (
    <div className="root-container">
      <button className="btn" onClick={handleAdd}>
        {!isShow ? "Thêm" : "Huỷ"}
      </button>
      <div className="wraper">
        {!isShow ? (
          <div className="wrap">
            {/* Chế độ hiển thị */}
            {todos.map((item) => (
              <Text key={item.id} value={item} />
            ))}
          </div>
        ) : (
          <>
            {/* Ché độ chỉnh sửa */}
            <button
              className="btn"
              style={{ marginBottom: 5 }}
              onClick={handleClick}
            >
              +
            </button>
            <div className="wrap">
              {todos.map((x, index) => (
                <Input
                  key={x.id}
                  value={x}
                  onChange={(value) => {
                    handleChange(index, value, x.id);
                  }}
                />
              ))}
            </div>
            <button
              className="btn"
              style={{ width: "100%" }}
              onClick={handleSave}
            >
              Save
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
