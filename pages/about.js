import Technos from "../components/Technos";

import ReactLogo from "../resources/react.svg";
import NextLogo from "../resources/nextjs.svg";
import WebpackLogo from "../resources/webpack.svg";
import FirebaseLogo from "../resources/firebase.svg";
import TailwindLogo from "../resources/tailwind.svg";
import MaterialUiLogo from "../resources/material-ui.svg";
import GithubLogo from "../resources/github.svg";
import VSCodeLogo from "../resources/vsc.svg";

function About() {
  return (
    <main className="flex justify-center flex-col w-full">
      <h1 className="text-center mt-10 text-5xl">About</h1>
      <p className="text-center mt-5">
        Here is a list of all the libraries and Frameworks I used for this
        project 👇
      </p>
      <div className="w-full flex justify-center">
        <section
          id="Technos"
          className="sm:w-4/5 w-full flex flex-wrap p-5 xs:justify-start justify-center"
        >
          <Technos
            name="React"
            image={ReactLogo}
            desc="React is a free and open-source front-end JavaScript library for building user interfaces or UI components."
            link="https://reactjs.org"
          />
          <Technos
            name="Next JS"
            image={NextLogo}
            desc="Next.js is a React framework that enables several extra features, including server-side rendering and generating static websites."
            link="https://nextjs.org/"
          />
          <Technos
            name="Webpack"
            image={WebpackLogo}
            desc="Webpack is a module bundler. It can take care of bundling alongside a separate task runner."
            link="https://webpack.js.org/"
          />
          <Technos
            name="Firebase"
            image={FirebaseLogo}
            desc="Firebase is a Backend-as-a-Service (Baas). It provides developers with a variety of tools."
            link="https:/firebase.google.com/"
          />
          <Technos
            name="Tailwind"
            image={TailwindLogo}
            desc="Tailwind CSS creates small utilities with a defined set of options enabling easy integration of existing classes directly into the HTML code."
            link="https://tailwindcss.com/"
          />{" "}
          <Technos
            name="Material UI"
            image={MaterialUiLogo}
            desc="React components for faster and easier web development. Build your own design system, or start with Material Design."
            link="https://material-ui.com/"
          />
          <Technos
            name="Github"
            image={GithubLogo}
            desc="It's an intricate platform that fosters collaboration and communication between developers."
            link="https://github.com/"
          />
          <Technos
            name="Visual Studio Code"
            image={VSCodeLogo}
            desc="Visual Studio Code is a code editor redefined and optimized for building and debugging modern web and cloud applications."
            link="https://code.visualstudio.com/"
          />
        </section>
      </div>
    </main>
  );
}

export default About;
