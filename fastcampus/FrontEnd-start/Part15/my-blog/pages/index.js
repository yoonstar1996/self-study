import styles from "@/styles/Home.module.css";
import sanityClient from "@sanity/client";

export default function Home({ hello }) {
  return (
    <>
      <div className={styles.main}>
        <h1>Blog Home {hello}</h1>
      </div>
    </>
  );
}

export function getStaticProps() {
  // sanity로부터 데이터를 가져온다.
  sanityClient({
    dataset: "production",
    projectId: "",
  });
  return {
    props: {
      hello: "world",
    },
  };
}
