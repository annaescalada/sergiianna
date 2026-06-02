import { BRIDE, GROOM } from '../config'

const milestones = [
  {
    year: '2018',
    label: 'El primer encontre',
    text: 'Expliqueu aquí com us vau conèixer — on era, qui hi havia, i aquell moment que va canviar-ho tot.',
  },
  {
    year: '2020',
    label: 'La primera cita',
    text: 'Descriviu la primera cita: el lloc, el que vau parlar, si hi havia nervis… i si ja sabíeu que era especial.',
  },
  {
    year: '2022',
    label: 'Un gran pas',
    text: 'Algun moment important — mudar-se junts, un viatge especial, o qualsevol fita que recordeu amb somriure.',
  },
  {
    year: '2024',
    label: 'La proposta',
    text: 'Com va ser la proposta? On éreu, com us sentíeu, i la resposta que ho va canviar tot.',
  },
]

export default function StorySection() {
  return (
    <section id="historia" className="py-24 px-6 bg-cream">
      <div className="max-w-4xl mx-auto">
        {/* Capçalera */}
        <div className="text-center mb-16">
          <p className="font-sans font-light tracking-widest text-terracotta text-xs uppercase mb-4">
            La nostra història
          </p>
          <h2 className="font-serif text-5xl font-light text-ocean-deep mb-6">
            {BRIDE} i {GROOM}
          </h2>
          <div className="section-divider" />
          <p className="font-serif italic text-stone text-xl font-light max-w-xl mx-auto leading-relaxed">
            Dues vides que es van trobar i van decidir no tornar a separar-se.
          </p>
        </div>

        {/* Foto principal */}
        <div className="relative mb-20">
          {/* Substituïu per <img src="/sergiianna/foto-historia.jpg" … /> */}
          <div
            className="w-full aspect-[4/3] md:aspect-[16/7] rounded-sm overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #2E7D96 0%, #5C7048 50%, #C1714B 100%)',
            }}
          >
            <div className="w-full h-full flex items-center justify-center">
              <p className="text-cream/60 font-serif text-lg italic">
                Foto vostra aquí
              </p>
            </div>
          </div>
          {/* Etiqueta decorativa */}
          <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-cream px-8 py-2 border border-sand-dark/40 shadow-sm">
            <p className="font-serif italic text-stone text-sm whitespace-nowrap">
              {BRIDE} &amp; {GROOM}
            </p>
          </div>
        </div>

        {/* Línia del temps */}
        <div className="relative mt-8">
          {/* Línia central (desktop) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-sand-dark/40 -translate-x-px" />

          <div className="space-y-12">
            {milestones.map((m, i) => (
              <div
                key={m.year}
                className={`flex flex-col md:flex-row gap-6 md:gap-0 items-start md:items-center ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Text */}
                <div className={`md:w-[calc(50%-2rem)] ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <span className="font-sans font-light tracking-widest text-terracotta text-xs uppercase">
                    {m.year}
                  </span>
                  <h3 className="font-serif text-2xl font-light text-ocean-deep mt-1 mb-2">
                    {m.label}
                  </h3>
                  <p className="font-sans font-light text-stone leading-relaxed text-sm">
                    {m.text}
                  </p>
                </div>

                {/* Punt central */}
                <div className="hidden md:flex w-16 items-center justify-center flex-shrink-0">
                  <div className="w-3 h-3 rounded-full bg-terracotta border-2 border-cream shadow-sm" />
                </div>

                {/* Espai buit per l'altre costat */}
                <div className="hidden md:block md:w-[calc(50%-2rem)]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
