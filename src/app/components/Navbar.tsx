export const Navbar = () => {
  return (
    <nav className="flex justify-between h-40 row-auto px-8 text-lg place-items-center">
      <div className="mt-8 text-4xl">Logo</div>
      <ul className="flex items-center h-full gap-2">
        <li className="flex items-center h-full p-8 font-bold bg-blue-700">
          <span className="mt-8">About Me</span>
        </li>
        <li className="flex items-center h-full p-8 ">
          <span className="mt-8">Services</span>
        </li>
        <li className="flex items-center h-full p-8 ">
          <span className="mt-8">Portfolio</span>
        </li>
        <li className="flex items-center h-full p-8 ">
          <span className="mt-8">Blog</span>
        </li>
        <li className="flex items-center h-full p-8 ">
          <span className="mt-8">Contact</span>
        </li>
      </ul>

      <button className="px-8 py-4 mt-8 font-bold text-black bg-white rounded-md">
        Hire Me!
      </button>
    </nav>
  );
};
