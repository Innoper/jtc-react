import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Checkbox from "./Checkbox/Checkbox";
import JTC from ".";
import Input from "./Input/Input";

function App() {
  const [checked, setChecked] = useState<boolean>(false);

  console.log(checked);

  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <JTC.Checkbox
        id={1}
        width="15px"
        height="15px"
        checked={checked}
        onChange={() => setChecked(!checked)}
        color="green"
        // icon="/public/vite.svg"
      />
      <span>gkdnld</span>
      <div>
        <h1>공통 Input 컴포넌트 예제</h1>
        <Input
          // type="placeholder"
          width="300px"
          height="30px"
          icon="/public/vite.svg"
          value={value}
          onChange={handleChange}
          placeholder="placeholder"
          bordercolor="#c993a5"
        />
        <p>입력값: {value}</p>
      </div>
    </>
  );
}

export default App;
