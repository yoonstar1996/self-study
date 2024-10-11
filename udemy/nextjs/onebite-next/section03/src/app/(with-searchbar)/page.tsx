import ClientComponent from "./client-component";
import styles from "./page.module.scss";
import ServerComponent from "./server-component";

export default function Home() {
  return (
    <div className={styles.container}>
      인덱스 페이지
      <ClientComponent>
        <ServerComponent />
      </ClientComponent>
    </div>
  );
}
