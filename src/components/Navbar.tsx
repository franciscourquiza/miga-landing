
const links = [
  { label: 'Menú', href: '#menu' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Contacto', href: '#contacto' },
]

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#30271F]/10 bg-[#F4EFE6]/95 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-10">
        <a
          href="#inicio"
          className="text-3xl font-black tracking-[-0.08em]"
          aria-label="MIGA, inicio"
        >
          MIGA<span className="text-[#A36E45]">.</span>
        </a>

        <div className="hidden items-center gap-9 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-[#62564A] transition-colors hover:text-[#A36E45]"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contacto"
          className="rounded-full bg-[#30271F] px-7 py-4 text-sm font-medium text-white transition-all hover:bg-[#A36E45]"
        >
          Visitános ↗
        </a>
      </nav>
    </header>
  )
}

export default Navbar
