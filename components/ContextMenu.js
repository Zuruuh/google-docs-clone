import Modal from "@material-tailwind/react/Modal";
import ModalBody from "@material-tailwind/react/ModalBody";
import ModalFooter from "@material-tailwind/react/ModalFooter";
import Button from "@material-tailwind/react/Button";
import { useRouter } from "next/dist/client/router";

import { signOut, useSession } from "next-auth/client";

import { createDocument } from "../functions/createDocument";
import { renameDocument } from "../functions/renameDocument";

function ContextMenu(props) {
  const [session] = useSession();
  const showModal = props.states[0];
  const setShowModal = props.states[1];
  const input = props.states[2];
  const setInput = props.states[3];
  const router = useRouter();

  var body = <div>Insert body..</div>;
  var footer = <div>Insert Footer</div>;
  if (props.type === "newDoc") {
    body = (
      <ModalBody>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          className="outline-none w-full"
          placeholder="Enter name of document..."
          onKeyDown={(e) =>
            e.key === "Enter" &&
            createDocument(
              props.template,
              input,
              session,
              setInput,
              setShowModal
            )
          }
        />
      </ModalBody>
    );
    footer = (
      <ModalFooter>
        <Button
          color="blue"
          buttonType="link"
          onClick={(e) => {
            setShowModal(false);
            setInput("");
          }}
          ripple="dark"
        >
          Cancel
        </Button>
        <Button
          color="blue"
          onClick={() =>
            createDocument(
              props.template,
              input,
              session,
              setInput,
              setShowModal
            )
          }
          ripple="light"
        >
          Create
        </Button>
      </ModalFooter>
    );
  } else if (props.type === "logOut") {
    body = (
      <ModalBody>
        <p>Do you really want to log Out ?</p>
      </ModalBody>
    );
    footer = (
      <ModalFooter>
        <Button
          color="blue"
          buttonType="link"
          onClick={(e) => setShowModal(false)}
          ripple="dark"
        >
          Cancel
        </Button>
        <Button
          color="blue"
          onClick={() => {
            signOut();
            router.push(`/`);
          }}
          ripple="light"
        >
          Log Out
        </Button>
      </ModalFooter>
    );
  } else if (props.type === "rename") {
    body = (
      <ModalBody>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          className="outline-none w-full"
          placeholder="Enter a new name..."
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              renameDocument(session, props.doc, input);
              setInput("");
              setShowModal(false);
            }
          }}
        />
      </ModalBody>
    );
    footer = (
      <ModalFooter>
        <Button
          color="blue"
          buttonType="link"
          onClick={(e) => {
            setShowModal(false);
            setInput("");
          }}
          ripple="dark"
        >
          Cancel
        </Button>
        <Button
          color="blue"
          onClick={() => {
            renameDocument(session, props.doc, input);
            setInput("");
            setShowModal(false);
          }}
          ripple="light"
        >
          Rename
        </Button>
      </ModalFooter>
    );
  }
  return (
    <Modal
      size="sm"
      active={showModal}
      toggler={() => setShowModal(false)}
      style={{ cursor: "pointer" }}
    >
      {body}
      {footer}
    </Modal>
  );
}

export default ContextMenu;
