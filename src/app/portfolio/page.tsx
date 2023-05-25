import Image from "next/image";
import { PageAnimationWrapper } from "components/PageAnimationWrapper";

const Portfolio = () => {
  return (
    <PageAnimationWrapper layoutId="portfolio">
      <div className="grid min-h-screen place-items-center">
        <div className="text-5xl">Portfolio</div>
      </div>
    </PageAnimationWrapper>
  );
};

export default Portfolio;
