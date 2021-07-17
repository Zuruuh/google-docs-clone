import { db } from "../firebase";

export async function renameDocument(session, id, name) {
  await db
    .collection("userDocs")
    .doc(session.user.email)
    .collection("docs")
    .doc(id)
    .update({ fileName: name });
  window.location.reload();
}
