import axios from "axios";
import { GITHUB } from "./constant/urls";

const axiosAPIGithub = axios.create({
  baseURL: "https://api.github.com/",
  timeout: 100000,
});

export async function getGithubRepositories() {
  return await axiosAPIGithub.get(GITHUB.GET_REPOSITORIES_URL);
}
