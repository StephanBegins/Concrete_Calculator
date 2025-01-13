import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-[#10002B] text-white p-4">
      <nav className="flex gap-4">
        
        <Link href="/calculator">CONCRETE CALCULATOR .</Link>
      </nav>
    </header>
  );
}
