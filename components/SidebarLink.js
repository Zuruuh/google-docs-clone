import Icon from "@material-tailwind/react/Icon";
import PropTypes from "prop-types";

function SidebarLink({ iconName, link, text, color, newTab }) {
  if (newTab) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        id={`${iconName}-google-link`}
      >
        <li className="p-2 flex items-center hover:bg-gray-200 hover:font-semibold my-1 ">
          <Icon name={iconName} color={color} size="4xl" />
          <p className="ml-1">{text}</p>
        </li>
      </a>
    );
  }
  return (
    <a href={link} id={`${iconName}-google-link`}>
      <li className="p-2 flex items-center hover:bg-gray-200 hover:font-semibold my-1 ">
        <Icon name={iconName} color={color} size="4xl" />
        <p className="ml-1">{text}</p>
      </li>
    </a>
  );
}

SidebarLink.propTypes = {
  iconName: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  newTab: PropTypes.bool,
};

SidebarLink.defaultProps = {
  newTab: false,
};

export default SidebarLink;
