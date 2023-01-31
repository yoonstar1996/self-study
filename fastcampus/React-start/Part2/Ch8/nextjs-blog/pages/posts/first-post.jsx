import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/Layout";

export default function FirstPost() {
  return (
    <>
      <Layout>
        <Head>
          <title>First Post</title>
          <meta name="author" content="패스트 캠퍼스 학생" />
          <meta name="description" content="이 페이지는 블로그" />
        </Head>
        <h1>First Post</h1>
        <h2>블로그 내용</h2>
      </Layout>
    </>
  );
}
