import { Button } from "./ui/button";

const navItems = ["Trust", "Checks", "Delivery", "People"];

export function NavBar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="text-white font-normal text-lg tracking-wide">InfoBeans</div>

        <div className="hidden md:flex space-x-8 text-sm">
          {navItems.map((item) => (
            <a key={item} href="#" className="hover:text-white transition-colors">
              {item}
            </a>
          ))}
        </div>

        <Button
          variant="outline"
          className="border-white/20 bg-transparent text-white hover:bg-white/5"
        >
          Get in touch
        </Button>
      </div>
    </nav>
  );
}
