import { useState } from "react";
import { fetchUserData } from "../services/githubService";

const Search = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUser(null);
    setError("");
    setLoading(true);

    try {
      const data = await fetchUserData(username);
      setUser(data);
    } catch (error) {
      setError("Looks like we cant find the user.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ padding: "8px", width: "250px" }}
        />
        <button
          type="submit"
          style={{ padding: "8px 12px", marginLeft: "10px" }}
        >
          Search
        </button>
      </form>

      <div style={{ marginTop: "20px" }}>
        {loading && <p>Loading...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
        {user && (
          <div>
            <img
              src={user.avatar_url}
              alt="avatar"
              width="100"
              style={{ borderRadius: "8px" }}
            />
            <h2>{user.name || user.login}</h2>
            <p>
              <a href={user.html_url} target="_blank" rel="noreferrer">
                View GitHub Profile
              </a>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
