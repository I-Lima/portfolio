import axios from "axios";
import { GITHUB } from "./constant/urls";

const axiosAPIGithub = axios.create({
  baseURL: "https://api.github.com/",
  timeout: 100000,
  headers: {
    "Authorization": `Bearer ${process.env.GITHUB_KEY}`,
  }
});

export async function getGithubRepositories() {
  return await axiosAPIGithub.get(GITHUB.GET_REPOSITORIES_URL);
}
