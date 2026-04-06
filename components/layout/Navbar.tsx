import Link from 'next/link';
import { Layers } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="border-b shadow-sm bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-primary/10 text-primary p-2 rounded-lg group-hover:bg-primary group-hover:text-white transition-colors duration-300">
            <Layers className="w-6 h-6" />
          </div>
          <span className="font-bold text-xl tracking-tight text-gray-900">Tola SaaS</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="/templates" className="text-gray-600 hover:text-primary transition-colors">
            תבניות
          </Link>
          <Link href="/projects" className="text-gray-600 hover:text-primary transition-colors">
            הפרויקטים שלי
          </Link>
          <Link 
            href="/templates" 
            className="bg-primary text-white px-5 py-2 rounded-full font-medium shadow-sm hover:bg-primary/90 transition-all hover:shadow-md transform hover:-translate-y-0.5"
          >
            צור דף חדש
          </Link>
        </nav>
      </div>
    </header>
  );
}
