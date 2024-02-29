import MainView from "@/components/MainView";
import styles from "./index.module.scss";

export default function Home() {
  return (
    <>
      <div className={styles.wrap}>
        <div className={styles.container}>
          <MainView />
        </div>
      </div>
    </>
  );
}
