import TextEditor from "../../components/TextEditor";
import Login from "../../components/Login";
import { db } from "../../firebase";

import ContextMenu from "../../components/ContextMenu";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";

import { useRouter } from "next/dist/client/router";
import { useDocumentOnce } from "react-firebase-hooks/firestore";
import { useSession, getSession } from "next-auth/client";
import { useState } from "react";

function Doc() {
  const [session] = useSession();
  const router = useRouter();
  const { id } = router.query;

  const [showLogOut, setShowLogOut] = useState(false);
  const [alert, setAlert] = useState(false);

  if (!session) return <Login />;

  const [snapshot, loadingSnapshot] = useDocumentOnce(
    db.collection("userDocs").doc(session.user.email).collection("docs").doc(id)
  );

  if (!loadingSnapshot && !snapshot?.data()?.fileName) {
    router.replace("/");
    return <div>Loading...</div>;
  }
  return (
    <>
      <header className="flex justify-between items-center p-3 pb-1">
        <div className="flex">
          <Button
            onClick={() => router.push("/")}
            className="cursor-pointer rounded-full bg-transparent hover:bg-transparent shadow-none hover:shadow-none active:bg-transparent"
            ripple="light"
          >
            <Icon name="description" size="5xl" color="blue" />
          </Button>

          <div className="flex-grow px-2">
            <h2>{snapshot?.data()?.fileName}</h2>
            <div className="flex items-center text-sm space-x-1 -ml-1 h-8 text-gray-600">
              <span className="option">File</span>
              <span className="option">Edit</span>
              <span className="option">View</span>
              <span className="option">Insert</span>
              <span className="option">Format</span>
              <span className="option">Tools</span>
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <Button
            color="blue"
            buttonType="filled"
            size="regular"
            className="md:inline-flex h-10"
            rounded={false}
            block={false}
            iconOnly={false}
            ripple="light"
            onClick={() => {
              navigator.clipboard.writeText(window.location.href);
              setAlert(true);
            }}
          >
            <Icon name="people" size="md" />
            SHARE
          </Button>
          <Snackbar
            open={alert}
            autoHideDuration={6000}
            onClose={() => setAlert(false)}
          >
            <Alert
              onClose={() => setAlert(false)}
              severity="success"
              variant="filled"
            >
              URL has been copied to clipboard !
            </Alert>
          </Snackbar>
          <Button
            className="rounded-full bg-transparent hover:bg-transparent hover:shadow-none border-0 shadow-none p-0 focus:bg-transparent origin-center transition ease-in-out duration-75 transform hover:scale-105 ml-2"
            onClick={() => setShowLogOut(true)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setShowLogOut(true);
              }
            }}
          >
            <img
              className="cursor-pointer rounded-full h-10 w-10"
              src={session.user.image}
              loading="lazy"
              alt="User Profile"
            />
          </Button>
        </div>
      </header>
      <TextEditor />
      <ContextMenu type="logOut" states={[showLogOut, setShowLogOut]} />
    </>
  );
}

export default Doc;

export async function getServerSideProps(context) {
  const session = await getSession(context);
  return {
    props: {
      session,
    },
  };
}
