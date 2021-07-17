import Icon from "@material-tailwind/react/Icon";

import Document from "./Document";

import { useCollectionOnce } from "react-firebase-hooks/firestore";
import { db } from "../firebase";

function UserDocuments(props) {
  const [snapshot] = useCollectionOnce(
    db
      .collection("userDocs")
      .doc(props.session.user.email)
      .collection("docs")
      .orderBy("timestamp", "desc")
  );

  return (
    <>
      <section className="bg-white px-10 md:px-0">
        <div className="max-w-3xl mx-auto py-8 text-sm text-gray-700">
          <div className="flex items-center justify-between pb-5">
            <table className="flex flex-col w-full">
              <thead className="flex items-center justify-between w-full px-3">
                <tr className="flex items-center justify-between w-full">
                  <td>
                    <h2 className="font-medium flex-grow">My Documents</h2>
                  </td>
                  <td>
                    <p className="mr-12">Date Created</p>
                  </td>
                  <td>
                    <Icon name="folder" size="3xl" color="gray" />
                  </td>
                </tr>
              </thead>
              <tbody className="px-3">
                {snapshot?.docs.map((doc) => (
                  <Document
                    key={doc.id}
                    id={doc.id}
                    name={doc.data().fileName}
                    timestamp={doc.data().timestamp}
                    session={props.session}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}

export default UserDocuments;
