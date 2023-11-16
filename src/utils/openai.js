import OpenAI from "openai";
import { OPEN_API_KEY } from "./const";

const openai = new OpenAI({
  apiKey: OPEN_API_KEY,
  dangerouslyAllowBrowser: true,
  // defaults to process.env["OPENAI_API_KEY"]
});
export default openai;
