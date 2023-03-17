import axios, { AxiosResponse } from "axios";
import { UserModel } from "../models/UserModel";
import { getRepositoriesQuery } from "../schema/getRepositoriesQuery";

axios.defaults.headers.common = {
  Authorization: `Bearer ${import.meta.env.VITE_APP_GITHUB_PUBLIC_API_KEY}`,
};

interface UserModelResponse {
  data: { user: UserModel };
}

export const getRepositories = async (username: string, limit = 10) => {
  const options = {
    method: "POST",
    url: import.meta.env.VITE_APP_BASE_URL,
    headers: {
      "content-type": "application/json",
    },
    data: {
      query: getRepositoriesQuery,
      variables: {
        limit: limit,
        username: username,
      },
    },
  };
  return axios
    .request(options)
    .then(
      (response: AxiosResponse<UserModelResponse>) => response.data.data.user
    );
};
