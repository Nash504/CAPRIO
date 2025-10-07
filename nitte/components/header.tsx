import { Scale } from "lucide-react";

export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-11 p-6">
      <div className="flex flex-row gap-4 font-poppins">
        <Scale className="text-white mt-1 font-light  " size={48} />
        <div className="text-white text-6xl uppercase tracking-wide font-eb-garamond">
          CAPRIO
        </div>
      </div>
    </header>
  );
}
