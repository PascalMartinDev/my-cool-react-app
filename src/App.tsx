import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";

const client = generateClient<Schema>();

async function sayHello() {
  const result = await client.queries.sayHello({
    name: "Pascal",
  });
  console.log(result);
}

function App() {
  return (
    <>
      <button onClick={sayHello}>Click Me</button>
    </>
  );
}

export default App;
