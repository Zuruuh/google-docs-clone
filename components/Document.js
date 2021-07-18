import ContextMenu from "./ContextMenu";
import { deleteDocument } from "../functions/deleteDocument";

import PropTypes from "prop-types";
import Icon from "@material-tailwind/react/Icon";
import Button from "@material-tailwind/react/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import { useState } from "react";
import { useRouter } from "next/dist/client/router";

function Document({ id, name, timestamp, session }) {
  const router = useRouter();
  const [menu, setMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [input, setInput] = useState("");

  return (
    <>
      <tr
        id={id}
        onClick={(e) => {
          if (
            e.target.nodeName !== "SPAN" &&
            e.target.nodeName !== "BUTTON" &&
            e.target.nodeName !== "LI" &&
            e.target.nodeName !== "DIV"
          ) {
            router.push(`/doc/${id}`);
          }
        }}
        className="flex w-full justify-between items-center py-4 rounded-lg hover:bg-gray-200 text-gray-700 text-sm cursor-pointer hover:font-semibold"
      >
        <td className="flex items-center">
          <Icon name="article" size="3xl" color="blue" />
          <p className="flex-grow pl-5 w-auto pr-10">{name}</p>
        </td>
        <td>
          <p className="pr-5 text-sm">
            {timestamp.toDate().toLocaleDateString()}
          </p>
        </td>
        <td>
          <Button
            id={`${id}-b`}
            color="gray"
            buttonType="outline"
            rounded
            iconOnly
            ripple="dark"
            className="border-0 z-10 hover:bg-gray-200"
            onClick={() => {
              setMenu(true);
            }}
          >
            <Icon name="more_vert" size="3xl" />
          </Button>
          {menu && (
            <Menu
              id={id}
              anchorEl={document.getElementById(`${id}-b`)}
              open
              keepMounted
              onClose={() => setMenu(false)}
            >
              <MenuItem
                onClick={() => {
                  setMenu(false);
                  setShowModal(true);
                }}
                style={{ padding: "0px" }}
              >
                <div className="flex items-center py-1.5 px-4 hover:bg-gray-200 w-full hover:font-medium">
                  <Icon
                    name="drive_file_rename_outline"
                    size="3xl"
                    color="gray"
                  />
                  Rename
                </div>
              </MenuItem>

              <MenuItem
                onClick={() => {
                  setMenu(false);
                  window.open(`/doc/${id}`, "_blank", "noopener,noreferrer");
                }}
                style={{ padding: "0px" }}
              >
                <div className="flex items-center py-1.5 px-4 hover:bg-gray-200 w-full hover:font-medium">
                  <Icon name="open_in_new" size="3xl" color="gray" />
                  Open in New
                </div>
              </MenuItem>

              <MenuItem
                onClick={() => {
                  setMenu(false);
                  deleteDocument(session, id);
                }}
                style={{ padding: "0px" }}
              >
                <div className="flex items-center py-1.5 px-4 hover:bg-gray-200 w-full hover:font-medium">
                  <Icon name="delete" size="3xl" color="gray" />
                  Delete
                </div>
              </MenuItem>
            </Menu>
          )}
          <ContextMenu
            type="rename"
            doc={id}
            session={session}
            states={[showModal, setShowModal, input, setInput]}
          />
        </td>
      </tr>
    </>
  );
}
Document.propTypes = {
  id: PropTypes.string.isRequired,
  timestamp: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  session: PropTypes.object.isRequired,
};

export default Document;
