import axios from "axios";

export async function searchUsers(username, location, minRepos) {
  let query = "";

  if (username) query += `${username} in:login `;
  if (location) query += `location:${location} `;
  if (minRepos) query += `repos:>=${minRepos}`;

  const url = `https://api.github.com/search/users?q=${encodeURIComponent(
    query.trim()
  )}`;

  const headers = {
    Authorization: `token ${import.meta.env.VITE_APP_GITHUB_API_KEY}`,
  };

  const response = await axios.get(url, { headers });
  return response.data.items;
}
