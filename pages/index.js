import Head from "next/head";
import { getSession, useSession } from "next-auth/client";

// * Components Imports
import Header from "../components/Header";
import NewDocument from "../components/NewDocument";
import UserDocuments from "../components/UserDocuments";
import Login from "../components/Login";

export default function Home() {
  const [session] = useSession();

  if (!session) return <Login />;

  return (
    <div>
      <Head>
        <title>Docs - By Google</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <NewDocument />
      <UserDocuments session={session} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession();

  return {
    props: {
      session,
    },
  };
}
