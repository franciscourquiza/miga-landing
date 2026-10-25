
function PhilosophySection() {
  return (
    <section className="overflow-hidden bg-[#30271F] text-[#F4EFE6]">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-2 md:items-center md:px-10 md:py-28">
        <div>
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-[#C99A70]">
            Nuestra filosofía
          </p>

          <h2 className="max-w-lg text-5xl font-medium leading-[1.02] tracking-[-0.06em] sm:text-7xl">
            Menos apuro.
            <br />
            Más <span className="font-serif italic text-[#C99A70]">sabor.</span>
          </h2>

          <p className="mt-7 max-w-md text-base leading-7 text-[#F4EFE6]/70">
            Creemos que las cosas buenas llevan tiempo. Por eso elegimos
            cuidadosamente nuestro café, trabajamos con ingredientes de
            calidad y preparamos cada taza prestando atención a los detalles.
          </p>

          <div className="mt-10 grid max-w-md grid-cols-2 gap-6 border-t border-[#F4EFE6]/20 pt-6">
            <div>
              <p className="font-serif text-3xl italic text-[#C99A70]">01</p>
              <h3 className="mt-3 text-sm font-medium">Café de origen</h3>
              <p className="mt-2 text-sm leading-6 text-[#F4EFE6]/60">
                Granos seleccionados por su calidad y personalidad.
              </p>
            </div>

            <div>
              <p className="font-serif text-3xl italic text-[#C99A70]">02</p>
              <h3 className="mt-3 text-sm font-medium">Hecho cada día</h3>
              <p className="mt-2 text-sm leading-6 text-[#F4EFE6]/60">
                Pastelería artesanal y atención a cada detalle.
              </p>
            </div>
          </div>
        </div>

        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1200&q=85"
            alt="Granos de café seleccionados antes de su preparación"
            loading="lazy"
            className="h-[400px] w-full rounded-t-full object-cover sm:h-[560px]"
          />

          <div className="absolute bottom-5 right-5 max-w-[220px] bg-[#F4EFE6] p-5 text-[#30271F] sm:bottom-8 sm:right-[-16px]">
            <p className="font-serif text-2xl italic">
              Cada detalle cuenta.
            </p>
            <p className="mt-2 text-xs leading-5 text-[#62564A]">
              De la selección del grano al último sorbo.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PhilosophySection
