import { FaXTwitter } from "react-icons/fa6";

export default function Header() {
  return (
    <header className="absolute top-0 right-0 p-5 flex items-center">
      <span className="text-sm mr-2">Follow us on</span>
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-gray-300 transition-colors"
        aria-label="Follow us on Twitter/X"
      >
        <FaXTwitter size={20} />
      </a>
    </header>
  );
}
