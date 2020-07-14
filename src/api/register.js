import { SERVER_URL } from "./url";
import axios from "axios";

async function registerApi(request) {
  const SIGNUP_ENDPOINT = `${SERVER_URL}/api/user/register`;
  return await axios({
    method: "post",
    responseType: "json",
    url: SIGNUP_ENDPOINT,
    data: request,
  });
}
export { registerApi };
