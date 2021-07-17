import Image from "next/Image";

import { useState } from "react";

import ContextMenu from "../components/ContextMenu";

function DocumentTemplate(props) {
  function capitalize(s) {
    return s[0].toUpperCase() + s.slice(1);
  }
  const [showModal, setShowModal] = useState(false);
  const [input, setInput] = useState("");
  return (
    <>
      <div className="mx-2">
        <div className="relative h-52 w-40 border-2 cursor-pointer hover:border-blue-700 ">
          <Image
            src={props.source}
            layout="fill"
            onClick={() => setShowModal(true)}
          />
        </div>
        <p className="ml-2 mt-2 font-semibold text-sm text-gray-700">
          {capitalize(props.text)}
        </p>
      </div>
      <ContextMenu
        type="newDoc"
        template={props.text}
        states={[showModal, setShowModal, input, setInput]}
      />
    </>
  );
}

export default DocumentTemplate;
