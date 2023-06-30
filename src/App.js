import Field from "./components/Field/Field";
import Strength from "./components/Strength/Strength";
import "./App.css";
import usePasswordStrength from "./hook/CustomHook";
import { useState } from "react";
function App() {
  const [password, setPassword] = useState("");
  const color = usePasswordStrength(password);
  return (
    <div className="container">
      <Field setPassword={setPassword} password={password} />
      <Strength color={color} password={password} />
    </div>
  );
}

export default App;
