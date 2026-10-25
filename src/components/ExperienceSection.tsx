
const experiences = [
  {
    number: '01',
    title: 'Una pausa para vos',
    description:
      'Desconectá un rato, pedite algo rico y disfrutá el momento sin mirar el reloj.',
    image:
      'https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=900&q=85',
    imageAlt: 'Café servido en un ambiente cálido',
  },
  {
    number: '02',
    title: 'Encuentros que importan',
    description:
      'Una charla pendiente, una primera cita o ese amigo que hace mucho no ves.',
    image:
      'https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=900&q=85',
    imageAlt: 'Mesas preparadas para compartir un café',
  },
  {
    number: '03',
    title: 'Tu rincón creativo',
    description:
      'Traé tu cuaderno, abrí la compu o dejá que las ideas aparezcan con el primer café.',
    image:
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=85',
    imageAlt: 'Espacio de trabajo luminoso y tranquilo',
  },
]

function ExperienceSection() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
      <div className="mb-12 grid gap-5 md:grid-cols-2 md:items-end">
        <div>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-[#A36E45]">
            Mucho más que café
          </p>

          <h2 className="text-5xl font-medium leading-[1.02] tracking-[-0.06em] sm:text-7xl">
            Hay mil razones
            <br />
            <span className="font-serif italic text-[#A36E45]">
              para quedarse.
            </span>
          </h2>
        </div>

        <p className="max-w-md text-base leading-7 text-[#62564A] md:justify-self-end">
          Algunos vienen por el café. Otros, por la charla. Y muchos vuelven
          porque MIGA termina sintiéndose un poquito como casa.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {experiences.map((experience) => (
          <article key={experience.number} className="group">
            <div className="overflow-hidden rounded-2xl bg-[#E8DFD2]">
              <img
                src={experience.image}
                alt={experience.imageAlt}
                loading="lazy"
                className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-80"
              />
            </div>

            <div className="flex items-start gap-4 pt-6">
              <span className="pt-1 font-serif text-xl italic text-[#A36E45]">
                {experience.number}
              </span>

              <div>
                <h3 className="text-xl font-medium tracking-tight">
                  {experience.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#62564A]">
                  {experience.description}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-14 flex flex-col items-start justify-between gap-5 border-t border-[#30271F]/15 pt-7 sm:flex-row sm:items-center">
        <p className="font-serif text-2xl italic">
          Tu mesa está esperando.
        </p>

        <a
          href="#contacto"
          className="rounded-full border border-[#30271F]/30 px-6 py-3 text-sm font-medium transition-colors hover:bg-[#30271F] hover:text-[#F4EFE6]"
        >
          Vení a conocernos ↗
        </a>
      </div>
    </section>
  )
}

export default ExperienceSection
