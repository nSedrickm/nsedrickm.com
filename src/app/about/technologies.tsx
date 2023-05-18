import {
  AngularjsOriginal,
  BootstrapOriginal,
  Css3Original,
  DigitaloceanOriginal,
  FirebasePlain,
  GitOriginal,
  Html5Original,
  JavascriptOriginal,
  LinuxOriginal,
  NextjsLine,
  NodejsOriginal,
  ReactOriginal,
  ReduxOriginal,
  TailwindcssPlain,
  TypescriptOriginal,
} from "devicons-react";
import { LucideGithub } from "lucide-react";

const techList: Record<string, any>[] = [
  {
    name: "ReactJS",
    icon: <ReactOriginal size={36} />,
  },
  {
    name: "NextJS",
    icon: <NextjsLine size={36} color="white" />,
  },
  {
    name: "Angular",
    icon: <AngularjsOriginal size={36} />,
  },
  { name: "NodeJS", icon: <NodejsOriginal size={36} /> },
  {
    name: "Redux",
    icon: <ReduxOriginal size={36} />,
  },
  { name: "Git", icon: <GitOriginal size={36} /> },
  { name: "GitHub", icon: <LucideGithub size={36} /> },
  { name: "Digitalocean", icon: <DigitaloceanOriginal size={36} /> },
  { name: "JavaScript", icon: <JavascriptOriginal size={36} /> },
  { name: "TypeScript", icon: <TypescriptOriginal size={36} /> },
  { name: "TailwindCSS", icon: <TailwindcssPlain size={36} /> },
  { name: "Bootstrap", icon: <BootstrapOriginal size={36} /> },
  { name: "HTML5", icon: <Html5Original size={36} /> },
  { name: "CSS3", icon: <Css3Original size={36} /> },

  { name: "Firebase", icon: <FirebasePlain size={36} /> },
  { name: "Linux", icon: <LinuxOriginal size={36} /> },
];

export const Technologies = () => {
  return (
    <section className="grid grid-flow-row grid-cols-2 gap-4 mx-auto max-w-screen-2xl md:grid-cols-3 lg:grid-cols-4 auto-rows-fr">
      {techList.map((item, index) => (
        <div
          key={index}
          className="flex items-center gap-2 p-4 overflow-auto transition duration-300 ease-in-out border rounded-md group md:text-xl md:p-8 bg-gradient-to-br border-gray-500/5 from-black via-gray-800/25 to-gray-500/25 backdrop-blur shadow-3xl hover:animate-bounce"
        >
          <div className="">{item.icon}</div>
          <span className="font-medium">{item.name}</span>
        </div>
      ))}
    </section>
  );
};
