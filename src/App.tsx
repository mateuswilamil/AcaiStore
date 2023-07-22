import { useState } from "react";
import { RootLayoutPage } from "./pages/RootLayout";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <RootLayoutPage />
    </>
  );
}

export default App;
