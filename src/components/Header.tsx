import { Logo } from "./Logo";

export function Header() {
  return (
    <header className="w-full py-6 px-5 flex items-center justify-center bg-white border-b border-gray-600">
      <Logo />
      <h1 className=" text-blue-500 text-2xl font-bold leading-relaxed">eReceituario</h1>
    </header>
  )
}