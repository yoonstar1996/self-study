import { useRouter } from "next/router";

export default function ProtfolioProjectPaffge() {
  const router = useRouter();

  console.log(router.query);

  // send a request to some backend server
  // to fetch the piece of data with an id of router.query.projectId

  return (
    <>
      <h1>The Portfolio Project Page</h1>
    </>
  );
}
