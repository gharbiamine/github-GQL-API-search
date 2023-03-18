import axios, { AxiosResponse } from "axios";
import { RepositoryNodeModel } from "../models/RepositoryNodeModel";
import { UserModel } from "../models/UserModel";
import { getRepositoriesQuery } from "../schema/getRepositoriesQuery";

axios.defaults.headers.common = {
  Authorization: `Bearer ${import.meta.env.VITE_APP_GITHUB_PUBLIC_API_KEY}`,
  "content-type": "application/json",
};

interface UserModelResponse {
  data: { user: UserModel };
}

export const getRepositories = async (username: string, limit = 100) => {
  const options = {
    method: "POST",
    url: import.meta.env.VITE_APP_BASE_URL,
    data: {
      query: getRepositoriesQuery,
      variables: {
        limit: limit,
        username: username,
      },
    },
  };

  const timeoutPromise = new Promise((_, reject) => {
    setTimeout(() => {
      reject("Request timed out");
    }, 10000);
  });

  const request = axios
    .request(options)
    .then(
      (response: AxiosResponse<UserModelResponse>) => response.data.data.user
    );

  const result = await Promise.race([request, timeoutPromise]);

  return result as UserModel;
};

export const filterRepositories = (
  repositores: RepositoryNodeModel[],
  value: string
) => {
  return repositores.filter((repo) =>
    repo.name.toLowerCase().includes(value.toLowerCase())
  );
};
