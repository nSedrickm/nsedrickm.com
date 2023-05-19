import { url } from "inspector";
import FCC from "src/app/images/fcc_primary_small.svg";
import GSOC from "src/app/images/gsoc-2022-badge.svg";
import Udacity from "src/app/images/udacity.svg";

const badges = [
  {
    name: "React Developer Nanodegree",
    image_url: Udacity,
    url: "https://confirm.udacity.com/JX7ASNPM",
    issuer: "issued by Udacity",
  },
  {
    name: "Responsive Web Design",
    image_url: FCC,
    url: "https://www.freecodecamp.org/certification/fcca8bac2b9-6fe3-4f56-8062-2c2e7d6e7873/responsive-web-design",
    issuer: "issued by FreeCodeCamp",
  },
  {
    name: "Mobile Web Development",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/6/64/Google_Developers_icon_2020.png",
    url: "https://adscerts.com/scholar/85C9454400326328",
    issuer: "issued by Google Africa Developer Scholarship",
  },
  {
    name: "Google Cloud",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/6/64/Google_Developers_icon_2020.png",
    url: "https://adscerts.com/scholar/C55C099410C61A5",
    issuer: "issued by Google Africa Developer Scholarship",
  },
  {
    name: "Google Summer of Code Participant",
    image_url: GSOC,
    url: "https://summerofcode.withgoogle.com/archive/2022/projects/RA1hcxal",
    issuer: "issued by Google",
  },
];

export default badges;
