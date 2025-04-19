/* THIS IS EXAMPLE CODE FOR TRIGGERING A LAMBDA FUNCTION IN THE BACKEND INCLUDING THE PACKAGES TO IMPORT
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
const client = generateClient<Schema>();

async function sayHello() {
  const result = await client.queries.sayHello({
    name: "Pascal",
  });
  console.log(result);
}
--> <button onClick={sayHello}>Click Me</button>   <-- This is button that would be in app component to trigger the function!
*/

import "./App.css";
import { Auth } from "./Auth2";
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";

Amplify.configure(outputs);

function App() {
  return (
    <>
      <Auth></Auth>
    </>
  );
}

export default App;
