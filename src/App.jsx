import Counter from "./components/Counter";
import { CallGPT } from "./api/gpt";
import viteLogo from "/vite.svg";

function App() {
  const handleAPICall = async () => {
    await CallGPT();
  };
  return (
    <>
      <button onClick={handleAPICall}>GPT API call</button>
    </>
  );
}

export default App;
