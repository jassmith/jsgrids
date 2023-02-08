import { DiJqueryLogo } from "react-icons/di";
import { FaAngular, FaEmber, FaReact, FaVuejs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { FrameworkName } from "./libraries";

// An ordered set of all framework names.
export const FrameworkNames: FrameworkName[] = [
  "react",
  "vue",
  "angular",
  "ember",
  "jquery",
  "vanilla",
  "typescript",
];

export const FrameworkTitles = {
  react: "React",
  vue: "Vue.js",
  angular: "Angular",
  ember: "Ember.js",
  jquery: "jQuery",
  vanilla: "Vanilla JavaScript (no framework)",
  typescript: "TypeScript",
};

export const FrameworkIcons = {
  react: FaReact,
  vue: FaVuejs,
  angular: FaAngular,
  ember: FaEmber,
  jquery: DiJqueryLogo,
  vanilla: IoLogoJavascript,
  typescript: SiTypescript,
};
