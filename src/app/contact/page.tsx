import Image from "next/image";
import { PageAnimationWrapper } from "components/PageAnimationWrapper";

const Contact = () => {
  return (
    <PageAnimationWrapper layoutId="contact">
      <div className="grid min-h-screen place-items-center">
        <div className="text-5xl">Contact</div>
      </div>
    </PageAnimationWrapper>
  );
};

export default Contact;
