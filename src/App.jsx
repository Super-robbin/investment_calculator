import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

const App = () => {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  return (
    <>
      <Header />
      <UserInput userInput={userInput} setUserInput={setUserInput} />
      <Results userInput={userInput} />
    </>
  );
};

export default App;
