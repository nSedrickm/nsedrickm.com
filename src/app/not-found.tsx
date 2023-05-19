import Link from "next/link";

const NotFound = () => {
  return (
    <div className="grid max-w-full min-h-screen text-center text-white bg-black place-content-center">
      <div className="prose prose-2xl prose-invert">
        <h1 className="text-8xl">4 Ugh! 4</h1>
        <p>Sorry, this page is unavailable</p>

        <Link
          href="/"
          className="px-8 py-4 text-black no-underline transition ease-in-out delay-150 bg-white rounded-md font bold hover:-translate-y-1 hover:scale-110"
        >
          Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
