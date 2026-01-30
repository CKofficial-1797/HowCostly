import Image from 'next/image';
import Link from 'next/link';

const navIcons = [
  { src: '/assets/icons/search.svg', alt: 'search' },
  { src: '/assets/icons/black-heart.svg', alt: 'heart' },
  { src: '/assets/icons/user.svg', alt: 'user' },
];

const Navbar = () => {
  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      <nav className="nav container mx-auto flex justify-between items-center py-4 px-6 md:px-12">
        <Link href="/" className="flex items-center gap-3">
          <Image 
            src="/assets/icons/logo.svg"
            width={40}
            height={40}
            alt="logo"
            className="rounded-full"
          />

          <p className="nav-logo text-2xl font-bold text-gray-800 hover:text-primary transition-colors duration-300">
            Price<span className="text-primary">Track</span>
          </p>
        </Link>

        <div className="flex items-center gap-6">
          {navIcons.map((icon) => (
            <Link key={icon.alt} href={`/${icon.alt}`}>
              <div className="relative">
                <Image 
                  src={icon.src}
                  alt={icon.alt}
                  width={28}
                  height={28}
                  className="object-contain cursor-pointer hover:scale-110 transition-transform duration-300"
                />
                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
              </div>
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
