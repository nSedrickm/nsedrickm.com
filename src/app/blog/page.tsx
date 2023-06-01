import Image from "next/image";
import { PageAnimationWrapper } from "@/components";

const Blog = () => {
  return (
    <PageAnimationWrapper layoutId="blog">
      <div className="grid min-h-screen place-items-center">
        <div className="text-5xl">Blog</div>
      </div>
    </PageAnimationWrapper>
  );
};

export default Blog;
