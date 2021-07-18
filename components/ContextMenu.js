import { createDocument } from "../functions/createDocument";
import { renameDocument } from "../functions/renameDocument";

import PropTypes from "prop-types";
import Modal from "@material-tailwind/react/Modal";
import ModalBody from "@material-tailwind/react/ModalBody";
import ModalFooter from "@material-tailwind/react/ModalFooter";
import Button from "@material-tailwind/react/Button";
import { useRouter } from "next/dist/client/router";

import { signOut, useSession } from "next-auth/client";

function ContextMenu({ states, type, doc, template }) {
  const [session] = useSession();
  const router = useRouter();
  const showModal = states[0];
  const setShowModal = states[1];
  const input = states[2];
  const setInput = states[3];

  let body = <div>Insert body..</div>;
  let footer = <div>Insert Footer</div>;
  if (type === "newDoc") {
    body = (
      <ModalBody>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          className="outline-none w-full"
          placeholder="Enter name of document..."
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              createDocument(template, input, session, setInput, setShowModal);
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
          onClick={() => {
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
            createDocument(template, input, session, setInput, setShowModal);
          }}
          ripple="light"
        >
          Create
        </Button>
      </ModalFooter>
    );
  } else if (type === "logOut") {
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
          onClick={() => setShowModal(false)}
          ripple="dark"
        >
          Cancel
        </Button>
        <Button
          color="blue"
          onClick={() => {
            signOut();
            router.push("/");
          }}
          ripple="light"
        >
          Log Out
        </Button>
      </ModalFooter>
    );
  } else if (type === "rename") {
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
              renameDocument(session, doc, input);
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
          onClick={() => {
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
            renameDocument(session, doc, input);
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
ContextMenu.propTypes = {
  states: PropTypes.array.isRequired,
  type: PropTypes.string.isRequired,
  doc: PropTypes.string,
  template: PropTypes.string,
};

ContextMenu.defaultProps = {
  doc: "",
  template: "blank",
};

export default ContextMenu;
