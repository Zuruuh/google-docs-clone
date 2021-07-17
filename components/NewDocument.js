import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";

import Blank from "../resources/blank.png";
import DocumentTemplate from "./DocumentTemplate";

function NewDocument(props) {
  return (
    <section className="bg-[#F8F9FA] pb-10 px-10">
      <div className="max-w-3xl mx-auto ">
        <div className="flex items-center justify-between py-6">
          <h2 className="text-gray-700 text-lg ">Start a new Document</h2>
          <Button
            color="gray"
            buttonType="outline"
            iconOnly={true}
            ripple="dark"
            className="border-0 rounded-lg"
          >
            <Icon name="more_vert" size="3xl" />
          </Button>
        </div>
        <div className="inline-flex">
          <DocumentTemplate source={Blank} text="blank" />
        </div>
      </div>
    </section>
  );
}

export default NewDocument;
