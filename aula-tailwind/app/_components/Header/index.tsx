import Link from "next/link";

const Header = () => {
  return (
    <header
      className="w-full bg-blue-950 flex flex-col items-center gap-4 py-4
    text-white
    md:flex-row md:justify-between md:items-center md:h-20 md:px-10
    "
    >
      <h1 className="text-2xl font-bold md:text-3xl ">Next e Tailwind</h1>
      <nav className="w-full flex justify-center gap-6
       md:max-w-64 md:justify-between
      ">
        <Link href="/sobre">Sobre</Link>
        <Link href="/contato">Contato</Link>
      </nav>
    </header>
  );
};

export default Header;
