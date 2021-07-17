import Button from "@material-tailwind/react/Button";

function Technos({ name, image, desc, link }) {
  return (
    <div className="flex sm:w-80 items-center rounded-xl border-gray-300 border-2 shadow-2xl m-10 xs:m-0 p-5 transition duration-500 ease-in-out transform hover:-translate-y-5 w-4/5">
      <div className="flex justify-center flex-col">
        <img src={image.src} className="w-72 h-72" />
        <h3 className="text-center font-semibold">{name}</h3>
        <p className="text-center pb-2">{desc}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center"
        >
          <Button ripple="light">Learn More</Button>
        </a>
      </div>
    </div>
  );
}

export default Technos;
