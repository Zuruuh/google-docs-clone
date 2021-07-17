import { db } from "../firebase";

export async function deleteDocument(session, id) {
  await db
    .collection("userDocs")
    .doc(session.user.email)
    .collection("docs")
    .doc(id)
    .delete();
  window.location.reload();
}
