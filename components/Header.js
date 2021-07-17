import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";

import ContextMenu from "../components/ContextMenu";

import { useState } from "react";
import { useSession } from "next-auth/client";

function Header() {
  const [session] = useSession();

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-25 flex items-center px-4 py-2 shadow-md bg-white justify-between">
        <div className="flex items-center">
          <Button
            color="grey"
            buttonType="outline"
            rounded={true}
            iconOnly={true}
            ripple="dark"
            className="h-20 w-20 border-0"
          >
            <Icon name="menu" size="3xl"></Icon>
          </Button>
          <Icon name="description" size="5xl" color="blue" />
          <h1 className="ml-2 text-gray-700 text-2xl">Docs</h1>
        </div>
        <div className="mx-5 md:mx-20 flex-grow items-center px-5 py-2 bg-gray-100 text-gray-600 rounded-lg focus-within:text-gray-600 focus-within:shadow-md hidden sm:flex">
          <Icon name="search" size="3xl" color="gray" />
          <input
            type="text"
            placeholder="Search"
            className="flex-grow px-5 text-base bg-transparent outline-none"
          />
        </div>
        <Button
          color="gray"
          rounded={true}
          iconOnly={true}
          buttonType="outline"
          ripple="dark"
          className="hidden md:inline-flex ml-5 md:ml-20 h-20 w-20 border-0"
        >
          <Icon name="apps" size="3xl" color="gray" />
        </Button>
        <img
          onClick={() => setShowModal(true)}
          loading="lazy"
          className="cursor-pointer h-12 w-12 rounded-full ml-2"
          src={session?.user?.image}
          alt="User Profile Picture"
        />
      </header>
      <ContextMenu type="logOut" states={[showModal, setShowModal]} />
    </>
  );
}

export default Header;