import type { Schema } from "../../data/resource";
type handlerType = Schema["sayHello"]["functionHandler"];
import { env } from "$amplify/env/sayHello";

export const handler: handlerType = async (event: any, context: any) => {
  const region = env.AWS_REGION;
  const { name } = event.arguments;
  return `Hello, ${name}!`;
};
