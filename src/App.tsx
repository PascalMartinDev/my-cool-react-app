import { useEffect, useState } from "react";
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import { Amplify } from "aws-amplify";

const client = generateClient<Schema>();

async function sayHello() {
  const result = await client.queries.sayHello({
    name: "Pascal",
  });
  console.log(result);
}

function App() {
  <>
    <button onClick={sayHello}>Click Me</button>
  </>;
}

export default App;
