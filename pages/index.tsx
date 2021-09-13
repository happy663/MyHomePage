import Styles from "../styles/Index.module.css";
import Header from "../components/header";
import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <div>
        <h1 className={Styles.mytitle}>ホームページ</h1>
        <p>ここはビヨンド外山のホームページです</p>
        <Header title={"toyamaは天才"}></Header>
      </div>
    </Layout>
  );
}
