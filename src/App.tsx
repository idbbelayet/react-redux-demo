import { useState } from "react";

//import { Stack, type IStackTokens } from '@fluentui/react';
import { PrimaryButton } from "@fluentui/react/lib/Button";

// Example formatting
//const stackTokens: IStackTokens = { childrenGap: 40, padding: 20 , maxWidth: "100vw" };

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex flex-col items-center justify-center w-screen h-screen">
      
          <h1 className="text-3xl font-bold mb-4">
            React Redux Demo With TypeScript, Fluent UI and Tailwind CSS
          </h1>
       
          <PrimaryButton className="rounded-sm" onClick={() => setCount((count) => count + 1)}>
            Count is {count}
          </PrimaryButton>
        
      </div>
    </>
  );
}

export default App;
