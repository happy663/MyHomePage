import Link from "next/link";
import Layout from "../../components/Layout";

const About = () => {
  return (
    <Layout>
      <div>
        <h1>About</h1>
        <Link href="/">
          <a>トップへ</a>
        </Link>
      </div>
    </Layout>
  );
};

export default About;
