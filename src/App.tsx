import ExperienceSection from './components/ExperienceSection'
import Navbar from './components/Navbar'
import PhilosophySection from './components/PhiloshopySection'

const products = [
  {
    number: '01',
    name: 'Flat White',
    description: 'Espresso doble, leche sedosa y el equilibrio perfecto.',
    price: '$ 4.200',
    image:
      'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=900&q=85',
    tag: 'EL FAVORITO',
  },
  {
    number: '02',
    name: 'Croissant artesanal',
    description: 'Hojaldre dorado, manteca y capas que se deshacen.',
    price: '$ 3.500',
    image:
      'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=900&q=85',
    tag: 'RECIÉN HORNEADO',
  },
  {
    number: '03',
    name: 'Iced Latte',
    description: 'Nuestro espresso de origen, leche fría y mucho hielo.',
    price: '$ 4.500',
    image:
      'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=900&q=85',
    tag: 'TODO EL AÑO',
  },
]

function App() {
  return (
    <main id="inicio" className="min-h-screen bg-[#F4EFE6] text-[#30271F]">
      <Navbar />

      {/* Hero */}
      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-2 md:items-center md:px-10 md:py-20">
        <div className="order-2 md:order-1">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-[#A36E45]">
            Café de especialidad · Buenos Aires
          </p>

          <h1 className="max-w-xl text-6xl font-medium leading-[0.95] tracking-[-0.065em] sm:text-7xl lg:text-8xl">
            Un buen café
            <br />
            <span className="font-serif italic text-[#A36E45]">
              cambia todo.
            </span>
          </h1>

          <p className="mt-7 max-w-md text-base leading-7 text-[#62564A] md:text-lg">
            Café de origen, pastelería artesanal y un lugar para bajar un
            cambio. Las mejores cosas pasan alrededor de una mesa.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-5">
            <a
              href="#menu"
              className="rounded-full bg-[#30271F] px-7 py-4 text-sm font-medium text-white transition-all hover:bg-[#A36E45]"
            >
              Descubrí nuestro menú ↗
            </a>

            <a
              href="#nosotros"
              className="text-sm font-medium underline decoration-[#A36E45]/50 underline-offset-4 hover:text-[#A36E45]"
            >
              Nuestra historia
            </a>
          </div>

          <div className="mt-12 flex items-center gap-4 border-t border-[#30271F]/15 pt-6">
            <div className="flex -space-x-3">
              <img
                className="h-10 w-10 rounded-full border-2 border-[#F4EFE6] object-cover"
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80"
                alt=""
              />
              <img
                className="h-10 w-10 rounded-full border-2 border-[#F4EFE6] object-cover"
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"
                alt=""
              />
              <img
                className="h-10 w-10 rounded-full border-2 border-[#F4EFE6] object-cover"
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80"
                alt=""
              />
            </div>
            <div>
              <p className="text-sm font-semibold">Tu nueva pausa favorita</p>
              <p className="mt-1 text-xs text-[#62564A]">
                Café rico, sin apuro.
              </p>
            </div>
          </div>
        </div>

        <div className="relative order-1 md:order-2">
          <img
            src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1400&q=90"
            alt="Café recién preparado en una cafetería cálida"
            className="h-[380px] w-full rounded-[48%_48%_8px_8px] object-cover sm:h-[480px] lg:h-[600px]"
          />

          <div className="absolute bottom-6 left-4 rounded-2xl bg-[#F4EFE6] p-4 shadow-xl sm:bottom-10 sm:left-[-24px] sm:p-5">
            <p className="font-serif text-2xl italic">Hecho con tiempo.</p>
            <p className="mt-1 text-xs text-[#62564A]">
              Del grano a tu taza.
            </p>
          </div>

          <span className="absolute right-4 top-5 flex h-16 w-16 items-center justify-center rounded-full border border-white/70 bg-[#F4EFE6]/80 text-center text-[9px] font-semibold uppercase leading-4 tracking-widest backdrop-blur-md sm:right-6 sm:top-8">
            Good
            <br />
            coffee
            <br />
            only
          </span>
        </div>
      </section>

      {/* Franja de marca */}
      <div className="overflow-hidden border-y border-[#30271F]/15 py-5">
        <div className="flex min-w-max items-center justify-around gap-8 px-4 text-xs font-medium uppercase tracking-[0.2em] text-[#62564A] sm:gap-12">
          <span>Café de origen</span>
          <span className="text-[#A36E45]">✳</span>
          <span>Pastelería artesanal</span>
          <span className="text-[#A36E45]">✳</span>
          <span>Buenos momentos</span>
          <span className="text-[#A36E45]">✳</span>
          <span>Hecho con amor</span>
        </div>
      </div>

      {/* Menú */}
      <section id="menu" className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
        <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#A36E45]">
              Una cosa rica
            </p>
            <h2 className="text-4xl font-medium tracking-[-0.05em] sm:text-6xl">
              Nuestros <span className="font-serif italic">favoritos.</span>
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-6 text-[#62564A]">
            Productos simples, ingredientes buenos y mucho cariño en cada
            preparación.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <article key={product.number} className="group">
              <div className="relative overflow-hidden rounded-2xl bg-[#E8DFD2]">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-80"
                />
                <span className="absolute left-4 top-4 rounded-full bg-[#F4EFE6] px-3 py-2 text-[10px] font-semibold tracking-wider">
                  {product.tag}
                </span>
              </div>

              <div className="flex items-start justify-between gap-4 pt-5">
                <div>
                  <p className="mb-2 text-xs text-[#A36E45]">
                    {product.number} / MIGA SELECTION
                  </p>
                  <h3 className="text-xl font-medium tracking-tight">
                    {product.name}
                  </h3>
                  <p className="mt-2 max-w-xs text-sm leading-6 text-[#62564A]">
                    {product.description}
                  </p>
                </div>
                <span className="whitespace-nowrap pt-6 text-sm font-semibold">
                  {product.price}
                </span>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-8 text-xs text-[#62564A]">
          Precios ilustrativos para esta demo.
        </p>
      </section>
          <PhilosophySection></PhilosophySection>
      {/* Nosotros */}
      <section id="nosotros" className="bg-[#E8DFD2]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-2 md:items-center md:px-10 md:py-24">
          <div className="overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=1200&q=85"
              alt="Interior cálido de una cafetería"
              loading="lazy"
              className="h-[350px] w-full object-cover sm:h-[480px]"
            />
          </div>

          <div className="py-3 md:pl-8">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-[#A36E45]">
              Un lugar para vos
            </p>
            <h2 className="text-5xl font-medium leading-[1.02] tracking-[-0.06em] sm:text-6xl">
              No es solo
              <br />
              <span className="font-serif italic text-[#A36E45]">café.</span>
              <br />
              Es el momento.
            </h2>
            <p className="mt-7 max-w-md text-base leading-7 text-[#62564A]">
              MIGA nace de una idea sencilla: hacer las cosas bien y
              disfrutarlas sin apuro. Elegimos cada grano, horneamos cada día
              y preparamos cada taza como si fuera para alguien de casa.
            </p>
            <p className="mt-4 max-w-md text-base leading-7 text-[#62564A]">
              Vení a trabajar un rato, encontrarte con alguien o simplemente
              regalarte una pausa.
            </p>
            <a
              href="#contacto"
              className="mt-8 inline-flex rounded-full border border-[#30271F]/30 px-6 py-3 text-sm font-medium transition-colors hover:bg-[#30271F] hover:text-[#F4EFE6]"
            >
              Conocé nuestro espacio ↗
            </a>
          </div>
        </div>
      </section>
          <ExperienceSection></ExperienceSection>
      {/* Contacto */}
      <section id="contacto" className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#A36E45]">
              Te esperamos
            </p>
            <h2 className="text-5xl font-medium leading-[1.02] tracking-[-0.06em] sm:text-7xl">
              Nos vemos
              <br />
              <span className="font-serif italic text-[#A36E45]">
                en MIGA.
              </span>
            </h2>
            <p className="mt-6 max-w-sm leading-7 text-[#62564A]">
              Pasá por un café, quedate por el momento. Siempre hay lugar para
              una taza más.
            </p>
            <a
              href="https://wa.me/5491100000000"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex rounded-full bg-[#30271F] px-7 py-4 text-sm font-medium text-white transition-colors hover:bg-[#A36E45]"
            >
              Escribinos por WhatsApp ↗
            </a>
            <p className="mt-3 text-xs text-[#62564A]">
              Número ficticio de demostración.
            </p>
          </div>

          <div className="rounded-2xl border border-[#30271F]/15 p-7 sm:p-10">
            <div className="border-b border-[#30271F]/15 pb-6">
              <p className="text-xs uppercase tracking-[0.2em] text-[#A36E45]">
                Encontranos
              </p>
              <p className="mt-3 text-xl font-medium">Palermo, Buenos Aires</p>
              <p className="mt-2 text-sm leading-6 text-[#62564A]">
                Dirección ilustrativa · A definir
              </p>
            </div>

            <div className="border-b border-[#30271F]/15 py-6">
              <p className="text-xs uppercase tracking-[0.2em] text-[#A36E45]">
                Horarios
              </p>
              <div className="mt-4 flex justify-between gap-4 text-sm">
                <span className="text-[#62564A]">Lunes a viernes</span>
                <span className="font-medium">08:00 – 19:00</span>
              </div>
              <div className="mt-3 flex justify-between gap-4 text-sm">
                <span className="text-[#62564A]">Sábados y domingos</span>
                <span className="font-medium">09:00 – 20:00</span>
              </div>
            </div>

            <div className="pt-6">
              <p className="text-xs uppercase tracking-[0.2em] text-[#A36E45]">
                Seguinos
              </p>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-block text-sm underline underline-offset-4 hover:text-[#A36E45]"
              >
                Instagram ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#30271F] px-5 py-8 text-[#F4EFE6] md:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <a href="#inicio" className="text-3xl font-black tracking-[-0.08em]">
            MIGA<span className="text-[#C99A70]">.</span>
          </a>
          <p className="text-xs text-[#F4EFE6]/65">
            Café rico. Buenos momentos. © {new Date().getFullYear()} MIGA.
          </p>
          <a
            href="#inicio"
            className="text-sm text-[#F4EFE6]/80 hover:text-white"
          >
            Volver arriba ↑
          </a>
        </div>
      </footer>
    </main>
  )
}

export default App
