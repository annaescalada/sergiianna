import { CEREMONY, RECEPTION, RSVP, WEDDING_DATE_DISPLAY } from '../config'

function DetailCard({ icon, title, lines, href, linkLabel }) {
  return (
    <div className="card flex flex-col gap-3">
      <div className="text-3xl">{icon}</div>
      <h3 className="font-serif text-xl text-ocean-deep font-light">{title}</h3>
      <div className="section-divider my-0 mx-0 w-10" />
      {lines.map((line, i) => (
        <p key={i} className="font-sans font-light text-stone text-sm leading-relaxed">
          {line}
        </p>
      ))}
      {href && (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-ocean font-sans font-light text-xs
                     tracking-widest uppercase mt-auto pt-2 hover:text-ocean-deep transition-colors"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
          {linkLabel || 'Veure al mapa'}
        </a>
      )}
    </div>
  )
}

export default function CeremonySection() {
  return (
    <section id="cerimonia" className="py-24 px-6 bg-sand">
      <div className="max-w-5xl mx-auto">
        {/* Capçalera */}
        <div className="text-center mb-16">
          <p className="font-sans font-light tracking-widest text-terracotta text-xs uppercase mb-4">
            El gran dia
          </p>
          <h2 className="font-serif text-5xl font-light text-ocean-deep mb-4">
            La cerimònia
          </h2>
          <div className="section-divider" />
          <p className="font-serif italic text-stone text-lg font-light">
            {WEDDING_DATE_DISPLAY}
          </p>
        </div>

        {/* Targetes de detalls */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <DetailCard
            icon="⛪"
            title="La cerimònia"
            lines={[
              `${CEREMONY.time}`,
              CEREMONY.name,
              CEREMONY.address,
            ]}
            href={CEREMONY.mapsUrl}
          />
          <DetailCard
            icon="🥂"
            title="El banquet"
            lines={[
              `${RECEPTION.time}`,
              RECEPTION.name,
              RECEPTION.address,
            ]}
            href={RECEPTION.mapsUrl}
          />
          <DetailCard
            icon="👗"
            title="Codi de vestimenta"
            lines={[
              RECEPTION.dresscode,
              RECEPTION.dresscodeNote,
            ]}
          />
          <DetailCard
            icon="📩"
            title="Confirmació d'assistència"
            lines={[
              `Confirma abans del ${RSVP.deadline}`,
              RSVP.phone,
              RSVP.email,
            ]}
          />
        </div>

        {/* Nota especial */}
        <div className="text-center bg-white/40 border border-sand-dark/30 rounded-sm py-8 px-6">
          <p className="ornament text-3xl mb-4">✦</p>
          <p className="font-serif italic text-stone text-lg font-light max-w-lg mx-auto leading-relaxed">
            "Podeu afegir aquí una cita especial, una nota per als convidats,
            o qualsevol informació addicional que vulgueu compartir."
          </p>
        </div>
      </div>
    </section>
  )
}
