
import { useEffect, useRef, useState } from 'react'

const scenes = [
  {
    number: '01',
    eyebrow: 'EL ORIGEN',
    title: 'Todo empieza con un buen grano.',
    description:
      'Seleccionamos cafés por su origen, su aroma y su personalidad. Porque una gran taza comienza mucho antes de llegar a tus manos.',
    image:
      'https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1600&q=85',
    imageAlt: 'Granos de café seleccionados y tostados',
    note: '01 — ORIGEN Y SELECCIÓN',
  },
  {
    number: '02',
    eyebrow: 'EL OFICIO',
    title: 'Cada detalle tiene su tiempo.',
    description:
      'La molienda, la temperatura y cada segundo de extracción importan. No buscamos hacerlo rápido. Buscamos hacerlo bien.',
    image:
      'https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1600&q=85',
    imageAlt: 'Preparación artesanal de café en una cafetería',
    note: '02 — PRECISIÓN Y CUIDADO',
  },
  {
    number: '03',
    eyebrow: 'EL MOMENTO',
    title: 'Y después, simplemente disfrutá.',
    description:
      'Una taza caliente, algo recién horneado y un momento para vos. A veces, las cosas más simples son las que más importan.',
    image:
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1600&q=85',
    imageAlt: 'Una taza de café servida para disfrutar',
    note: '03 — TU MOMENTO MIGA',
  },
]

function CinematicSection() {
  const [activeScene, setActiveScene] = useState(0)
  const sceneRefs = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio,
          )

        if (visibleEntries.length > 0) {
          const index = Number(
            (visibleEntries[0].target as HTMLElement).dataset.scene,
          )

          setActiveScene(index)
        }
      },
      {
        rootMargin: '-15% 0px -15% 0px',
        threshold: [0, 0.2, 0.4, 0.6, 0.8],
      },
    )

    sceneRefs.current.forEach((scene) => {
      if (scene) observer.observe(scene)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="experiencia"
      aria-label="La experiencia MIGA"
      className="bg-[#30271F] text-[#F4EFE6]"
    >
      {/* Encabezado */}
      <div className="mx-auto max-w-7xl px-5 pb-12 pt-20 md:px-10 md:pb-16 md:pt-28">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-[#C99A70]">
          Del origen a tu mesa
        </p>

        <div className="grid gap-6 md:grid-cols-2 md:items-end">
          <h2 className="max-w-2xl text-5xl font-medium leading-[0.98] tracking-[-0.06em] sm:text-7xl">
            Las cosas buenas
            <br />
            <span className="font-serif italic text-[#C99A70]">
              llevan tiempo.
            </span>
          </h2>

          <p className="max-w-md text-sm leading-7 text-[#F4EFE6]/65 md:justify-self-end md:text-base">
            Hay una historia detrás de cada taza. Deslizá y descubrí los
            pequeños detalles que hacen de MIGA algo más que una cafetería.
          </p>
        </div>
      </div>

      {/* Experiencia cinematográfica */}
      <div className="mx-auto grid max-w-7xl gap-0 px-5 pb-16 md:grid-cols-2 md:gap-12 md:px-10 md:pb-28">
        {/* Imagen fija en escritorio */}
        <div className="hidden md:block">
          <div className="sticky top-20 h-[calc(100vh-10rem)] min-h-[480px] max-h-[760px]">
            <div className="relative h-full overflow-hidden rounded-2xl bg-[#49392E]">
              {scenes.map((scene, index) => (
                <div
                  key={scene.number}
                  aria-hidden={activeScene !== index}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out motion-reduce:transition-none ${
                    activeScene === index
                      ? 'opacity-100'
                      : 'pointer-events-none opacity-0'
                  }`}
                >
                  <img
                    src={scene.image}
                    alt={scene.imageAlt}
                    loading={index === 0 ? 'eager' : 'lazy'}
                    decoding="async"
                    className={`h-full w-full object-cover transition-transform duration-[1800ms] ease-out motion-reduce:transition-none ${
                      activeScene === index
                        ? 'scale-100'
                        : 'scale-105'
                    }`}
                  />
                </div>
              ))}

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#201811]/75 via-transparent to-[#201811]/10" />

              <div className="absolute inset-x-0 bottom-0 p-6 lg:p-8">
                <div className="mb-4 flex items-center justify-between gap-4">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/80">
                    {scenes[activeScene].note}
                  </span>

                  <span className="font-serif text-2xl italic text-white">
                    {scenes[activeScene].number}
                    <span className="text-white/50"> / 03</span>
                  </span>
                </div>

                <div className="flex gap-2">
                  {scenes.map((scene, index) => (
                    <div
                      key={scene.number}
                      className="h-0.5 flex-1 overflow-hidden bg-white/30"
                    >
                      <div
                        className={`h-full bg-[#F4EFE6] transition-all duration-500 ${
                          activeScene === index ? 'w-full' : 'w-0'
                        }`}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Relato: cada bloque activa una escena */}
        <div className="min-w-0">
          {scenes.map((scene, index) => (
            <article
              key={scene.number}
              ref={(element) => {
                sceneRefs.current[index] = element
              }}
              data-scene={index}
              className="flex min-h-[75vh] flex-col justify-center py-10 md:min-h-[85vh] md:py-16"
            >
              {/* En móvil cada relato tiene su propia fotografía */}
              <div className="mb-7 overflow-hidden rounded-xl md:hidden">
                <img
                  src={scene.image}
                  alt={scene.imageAlt}
                  loading="lazy"
                  decoding="async"
                  className="h-[38vh] min-h-[240px] max-h-[420px] w-full object-cover"
                />
              </div>

              <div className="mb-6 flex items-center gap-3">
                <span className="font-serif text-lg italic text-[#C99A70]">
                  {scene.number}
                </span>

                <span className="h-px w-10 bg-[#C99A70]/60" />

                <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#C99A70]">
                  {scene.eyebrow}
                </span>
              </div>

              <h3 className="max-w-lg text-4xl font-medium leading-[1.04] tracking-[-0.05em] sm:text-5xl lg:text-6xl">
                {scene.title}
              </h3>

              <p className="mt-6 max-w-md text-sm leading-7 text-[#F4EFE6]/65 sm:text-base sm:leading-8">
                {scene.description}
              </p>

              <div className="mt-8 flex items-center gap-3 text-xs text-[#F4EFE6]/45">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C99A70]" />
                MIGA · CAFÉ DE ESPECIALIDAD
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Cierre de la historia */}
      <div className="border-t border-white/15">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-10 sm:flex-row sm:items-center sm:justify-between md:px-10 md:py-12">
          <p className="max-w-lg font-serif text-2xl italic sm:text-3xl">
            Ahora que conocés la historia, falta la mejor parte.
          </p>

          <a
            href="#menu"
            className="inline-flex w-fit rounded-full bg-[#F4EFE6] px-6 py-3.5 text-sm font-medium text-[#30271F] transition-colors hover:bg-[#C99A70] motion-reduce:transition-none"
          >
            Elegí tu próximo café ↗
          </a>
        </div>
      </div>
    </section>
  )
}

export default CinematicSection
