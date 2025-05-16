import axios from "axios";

const API = "https://api.github.com";

// lib/github.ts
export async function getUserRepos(token: string) {
  const { data } = await axios.get(`${API}/user/repos`, {
    headers: { Authorization: `Bearer ${token}` },
    params: {
      // owner: 내가 소유한, collaborator: 권한 부여된, organization_member: 조직 멤버로 속한
      affiliation: "owner,collaborator,organization_member",
      per_page: 100,
    },
  });
  return data;
}

// 조직(org) 전체 저장소를 가져오는 함수
export async function getOrgRepos(token: string, org: string) {
  const { data } = await axios.get(`${API}/orgs/${org}/repos`, {
    headers: { Authorization: `Bearer ${token}` },
    params: { per_page: 100 },
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

const GQL_ENDPOINT = "https://api.github.com/graphql";

export async function getContributedRepos(token: string, login: string) {
  const query = `
    query($login: String!) {
      user(login: $login) {
        contributionsCollection {
          commitContributionsByRepository(maxRepositories: 100) {
            repository { nameWithOwner }
          }
          pullRequestContributionsByRepository(maxRepositories: 100) {
            repository { nameWithOwner }
          }
        }
      }
    }
  `;
  const res = await fetch(GQL_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query, variables: { login } }),
  });
  const { data } = await res.json();

  const byCommit =
    data.user.contributionsCollection.commitContributionsByRepository.map(
      (c: any) => c.repository.nameWithOwner
    );
  const byPR =
    data.user.contributionsCollection.pullRequestContributionsByRepository.map(
      (c: any) => c.repository.nameWithOwner
    );

  // 중복 제거
  return Array.from(new Set([...byCommit, ...byPR]));
}
