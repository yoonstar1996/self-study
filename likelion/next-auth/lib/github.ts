import axios from "axios";

const API = "https://api.github.com";

export async function getUserRepos(token: string) {
  const { data } = await axios.get(`${API}/user/repos`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data;
}

export async function getRepoCommits(
  token: string,
  owner: string,
  repo: string
) {
  const url = `${API}/repos/${owner}/${repo}/commits`;
  const { data } = await axios.get(url, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data;
}

export async function getCommitDetail(
  token: string,
  owner: string,
  repo: string,
  sha: string
) {
  const { data } = await axios.get(
    `${API}/repos/${owner}/${repo}/commits/${sha}`,
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return data;
}

export async function getRepoPRs(
  token: string,
  owner: string,
  repo: string,
  state: "open" | "closed" | "all" = "open"
) {
  const { data } = await axios.get(`${API}/repos/${owner}/${repo}/pulls`, {
    headers: { Authorization: `Bearer ${token}` },
    params: { state, per_page: 50 },
  });
  return data;
}

export async function getPRDetail(
  token: string,
  owner: string,
  repo: string,
  number: number
) {
  const { data } = await axios.get(
    `${API}/repos/${owner}/${repo}/pulls/${number}`,
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return data;
}

export async function getPRComments(
  token: string,
  owner: string,
  repo: string,
  number: number
) {
  const { data } = await axios.get(
    `${API}/repos/${owner}/${repo}/issues/${number}/comments`,
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return data;
}

export async function getPRReviews(
  token: string,
  owner: string,
  repo: string,
  number: number
) {
  const { data } = await axios.get(
    `${API}/repos/${owner}/${repo}/pulls/${number}/reviews`,
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return data;
}
