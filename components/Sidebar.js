import SidebarLink from "./SidebarLink";
import SidebarSeparator from "./SidebarSeparator";
import GoogleLogo from "../resources/google.svg";
import DriveLogo from "../resources/drive.svg";
import Drawer from "@material-ui/core/Drawer";
import PropTypes from "prop-types";

function Sidebar({ states }) {
  const drawer = states[0];
  const setDrawer = states[1];

  return (
    <div className="w-20">
      <Drawer
        anchor="left"
        open={drawer}
        onClose={() => {
          setDrawer(false);
        }}
      >
        <div className="flex items-end">
          <img src={GoogleLogo.src} alt="Google" className="w-32 ml-5 mt-5" />
          <a
            href="/"
            className="text-gray-500 underline text-xl mb-1 pr-5 ml-3"
          >
            Docs
          </a>
        </div>
        <SidebarSeparator />
        <ul>
          <SidebarLink
            link="/"
            iconName="description"
            text="Docs"
            color="blue"
          />
          <SidebarLink link="#" iconName="task" text="Sheets" color="green" />
          <SidebarLink
            link="#"
            iconName="slideshow"
            text="Slides"
            color="amber"
          />
          <SidebarLink
            link="#"
            iconName="format_list_bulleted"
            text="Forms"
            color="deepPurple"
          />
        </ul>
        <SidebarSeparator />
        <ul>
          <SidebarLink
            link="#"
            iconName="settings"
            text="Settings"
            color="gray"
          />
          <SidebarLink
            link="#"
            iconName="help_outline"
            text="Help"
            color="gray"
          />
        </ul>
        <SidebarSeparator />
        <a href="/" className="">
          <div className="p-2 flex items-center hover:bg-gray-200 hover:font-semibold my-1">
            <img src={DriveLogo.src} alt="Google" className="w-8 ml-0.5" />
            <p className="ml-1">Docs</p>
          </div>
        </a>
        <SidebarSeparator />
        <SidebarLink
          link="/about"
          iconName="construction"
          text="About"
          color="gray"
        />
      </Drawer>
    </div>
  );
}

Sidebar.propTypes = {
  states: PropTypes.array.isRequired,
};

export default Sidebar;
