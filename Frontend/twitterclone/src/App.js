import "./App.css";
import Body1 from "./components/Body1";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="App">
      <Body1 />
      <Toaster />
    </div>
  );
}

export default App;
