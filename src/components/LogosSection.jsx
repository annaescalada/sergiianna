import olivesBranch from '/olives_branch.png'

const CEREMONY = {
  title: 'Ceremònia',
  place: 'Ajuntament de Begur',
  address: 'Plaça de l\'Ajuntament, 1, Begur',
  mapsUrl: 'https://maps.google.com/?q=Ajuntament+de+Begur',
  time: '12:30 h',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vehicula sapien at libero tincidunt.',
}

const RECEPTION_EVENTS = [
  {
    title: 'Aperitiu',
    time: '13:30 h',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus euismod eros ac orci convallis.',
  },
  {
    title: 'Dinar',
    time: '14:30 h',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec eros vel mauris volutpat ultricies.',
  },
]

const RECEPTION_PLACE = {
  place: 'Mas Ses Vinyes',
  address: 'Carretera de Palafrugell, km 3, Begur',
  mapsUrl: 'https://maps.google.com/?q=Mas+Ses+Vinyes+Begur',
}

function LocationLink({ mapsUrl }) {
  return (
    <a
      href={mapsUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 font-sans text-xs tracking-widest uppercase text-ocean border-b border-ocean pb-0.5 hover:text-ocean-dark transition-colors"
    >
      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
      </svg>
      Com arribar-hi
    </a>
  )
}

function AddressLine({ address }) {
  return (
    <p className="font-sans text-xs text-stone-light mb-2">{address}</p>
  )
}

export default function LogosSection({ guest }) {
  return (
    <section id="detalls" className="relative py-20 px-8 overflow-hidden" style={{ background: '#EDF2E8' }}>
      <img src={olivesBranch} className="absolute top-0 left-0 w-80 pointer-events-none" style={{ mixBlendMode: 'multiply', transform: 'scaleX(-1) rotate(180deg)' }} />
      <img src={olivesBranch} className="absolute bottom-0 right-0 w-80 pointer-events-none" style={{ mixBlendMode: 'multiply', transform: 'scaleY(-1) rotate(180deg)' }} />

      <div className="max-w-sm mx-auto relative z-10">
        <h2 className="font-serif text-3xl text-pine mb-4 text-center">Els detalls...</h2>
        <h3 className="font-serif text-lg text-stone mb-10 text-center">
          Dijous 24 de setembre de 2026 · Begur, Costa Brava
        </h3>

        <div className="flex flex-col gap-8">
          {/* Ceremony — only shown if guest has hasCeremony */}
          {guest?.hasCeremony && (
            <div className="border-l-2 border-pine-pale pl-5">
              <h3 className="font-serif text-xl text-pine mb-0.5">{CEREMONY.title}</h3>
              <p className="font-sans text-xs tracking-widest uppercase text-ocean-mid mb-2">{CEREMONY.time} · {CEREMONY.place}</p>
              <p className="font-serif italic text-stone text-base leading-relaxed mb-3">{CEREMONY.text}</p>
              <AddressLine address={CEREMONY.address} />
              <LocationLink mapsUrl={CEREMONY.mapsUrl} />
            </div>
          )}

          {/* Aperitiu & Dinar — each with their own time+text, shared address+button at the end */}
          <div className="border-l-2 border-pine-pale pl-5 flex flex-col gap-5">
            {RECEPTION_EVENTS.map(({ title, time, text }) => (
              <div key={title}>
                <h3 className="font-serif text-xl text-pine mb-0.5">{title}</h3>
                <p className="font-sans text-xs tracking-widest uppercase text-ocean-mid mb-2">{time} · {RECEPTION_PLACE.place}</p>
                <p className="font-serif italic text-stone text-base leading-relaxed">{text}</p>
              </div>
            ))}
            <div className="pt-1">
              <AddressLine address={RECEPTION_PLACE.address} />
              <LocationLink mapsUrl={RECEPTION_PLACE.mapsUrl} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
