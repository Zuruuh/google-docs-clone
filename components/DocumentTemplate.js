import ContextMenu from "./ContextMenu";
import Image from "next/image";

import PropTypes from "prop-types";
import { useState } from "react";

function DocumentTemplate({ source, text }) {
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
            src={source}
            layout="fill"
            onClick={() => setShowModal(true)}
          />
        </div>
        <p className="ml-2 mt-2 font-semibold text-sm text-gray-700">
          {capitalize(text)}
        </p>
      </div>
      <ContextMenu
        type="newDoc"
        template={text}
        states={[showModal, setShowModal, input, setInput]}
      />
    </>
  );
}

DocumentTemplate.propTypes = {
  source: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
};

export default DocumentTemplate;
