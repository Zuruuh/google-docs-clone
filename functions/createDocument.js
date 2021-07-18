import { db } from "../firebase";
import firebase from "firebase";

import Router from "next/router";

async function updateDB(editorState, session, ref) {
  const res = await db
    .collection("userDocs")
    .doc(session.user.email)
    .collection("docs")
    .doc(ref.id)
    .update({ editorState });
  return res;
}

export async function createDocument(
  docTemplate,
  name,
  session,
  setInput,
  setShowModal
) {
  if (!name) return;
  let editorState = {};
  const ref = await db
    .collection("userDocs")
    .doc(session.user.email)
    .collection("docs")
    .add({
      fileName: name,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
  const templates = await db.collection("templates").get();
  templates.docs.forEach((template) => {
    const templateContent =
      template._delegate._document.data.value.mapValue.fields;
    if (docTemplate === templateContent.name.stringValue) {
      const { fields } =
        templateContent.content.mapValue.fields.blocks.arrayValue.values[0]
          .mapValue;
      editorState = {
        blocks: [
          {
            data: {},
            depth: +fields.depth.integerValue,
            entityRanges: [],
            inlineStylesRanges: fields.inlineStylesRanges.arrayValue,
            key: templateContent.name.stringValue,
            text: fields.text.stringValue,
            type: fields.type.stringValue,
          },
        ],
        entityMap: {},
      };
    }
  });
  updateDB(editorState, session, ref);
  setInput("");
  setShowModal(false);
  Router.push(`/doc/${ref.id}`);
}
