import axios, { AxiosResponse } from "axios";
import { RepositoryNodeModel } from "../models/RepositoryNodeModel";
import { UserModel } from "../models/UserModel";
import { getRepositoriesQuery } from "../schema/getRepositoriesQuery";

axios.defaults.headers.common = {
  Authorization: `Bearer ${import.meta.env.VITE_APP_GITHUB_PUBLIC_API_KEY}`,
  "content-type": "application/json",
};

/**

    Response data structure from the user query of the Github GraphQL API.
    @typedef {Object} UserModelResponse
    @property {Object} data - Contains the requested user information.
    @property {UserModel} data.user - Represents the user data model.
    */
interface UserModelResponse {
  data: { user: UserModel };
}

/**

    Retrieves user repositories using the Github GraphQL API.
    @async
    @function getRepositories
    @param {string} username - The Github username.
    @param {number} [limit=100] - The maximum number of repositories to retrieve.
    @returns {Promise<UserModel>} A Promise that resolves with a UserModel instance.
    @throws {Error} If the request times out.
    */
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

/**

    Filters an array of RepositoryNodeModel instances based on a search string.
    @function filterRepositories
    @param {RepositoryNodeModel[]} repositores - An array of RepositoryNodeModel instances.
    @param {string} value - The search string to filter repositories by.
    @returns {RepositoryNodeModel[]} An array of filtered RepositoryNodeModel instances.
    */
export const filterRepositories = (
  repositores: RepositoryNodeModel[],
  value: string
) => {
  return repositores.filter((repo) =>
    repo.name.toLowerCase().includes(value.toLowerCase())
  );
};
