import Styles from "../styles/PageIndex.module.css";
import Header from "../components/Header";
import Layout from "../components/Layout";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <div>
        <h1 className={Styles.mytitle}>ホームページ</h1>
        <p>ここはビヨンド外山のホームページです</p>
        <Header title={"toyamaは天才"}></Header>
        <Link href="/about">
          <a>記事へ</a>
        </Link>
      </div>
    </Layout>
  );
}
