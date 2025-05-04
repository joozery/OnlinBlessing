import { useState } from "react";
import BlessForm from "./BlessForm";
import BlessList from "./BlessList";

export default function App() {
  const [blessings, setBlessings] = useState([]);

  const handleAddBless = (newBless) => {
    setBlessings([newBless, ...blessings]);
  };

  return (
    <>
      <BlessForm onAddBless={handleAddBless} />
      <BlessList blessings={blessings} />
    </>
  );
}
