import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center p-8 space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-800">Welcome to Concrete Calculator</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Get accurate calculations for concrete-related projects. Our interactive calculators will help you calculate the materials required for slabs, square footings, walls, and more. Whether you're a professional or a DIY enthusiast, this tool is designed for all your construction needs.
        </p>
      </div>

      <div className="flex justify-center">
        <Link href="/calculator">
          <button className="px-8 py-3 bg-[#F1916D] text-white text-lg font-semibold rounded-lg hover:bg-[#e57d5a] transition-colors">
            Visit Concrete Calculator
          </button>
        </Link>
      </div>
    </div>
  );
}
