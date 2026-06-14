import { CEREMONY, RECEPTION, ITINERARY } from '../config'
import { SmallBranch } from './Botanical'

function LocationCard({ time, name, address, mapsUrl }) {
  return (
    <div className="text-center mb-8">
      <p className="font-serif text-2xl font-light text-ocean mb-1">{time}</p>
      <p className="font-sans font-semibold text-xs tracking-widest uppercase text-pine mb-1">{name}</p>
      <p className="font-serif italic text-stone text-sm mb-3 leading-relaxed">{address}</p>
      <a
        href={mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-forest"
      >
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
        </svg>
        Veure ubicació
      </a>
    </div>
  )
}

export default function CeremonySection() {
  return (
    <section id="cerimonia" className="bg-sand-pale py-16 px-6">
      <div className="max-w-sm mx-auto">

        {/* Ceremony */}
        <div className="text-center mb-3">
          <SmallBranch className="w-24 mx-auto mb-4 opacity-70" />
          <p className="section-label mb-2">Cerimònia religiosa</p>
        </div>
        <LocationCard {...CEREMONY} />

        {/* Divider */}
        <div className="divider-ornament my-8">
          <span className="section-label">Recepció</span>
        </div>

        {/* Reception */}
        <LocationCard {...RECEPTION} />

        {/* Itinerary */}
        <div className="mt-12">
          <div className="divider-ornament mb-8">
            <span className="section-label">Itinerari del dia</span>
          </div>

          <div className="relative rounded-sm overflow-hidden">
            <div
              className="absolute inset-0 opacity-20 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse at 50% 50%, #7ABDD6 0%, transparent 70%)' }}
            />
            <div className="relative py-4">
              {ITINERARY.map((item, i) => (
                <div key={i} className="flex items-center gap-4 py-3 px-4">
                  <span className="text-xl w-8 text-center flex-shrink-0">{item.icon}</span>
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-ocean"/>
                    {i < ITINERARY.length - 1 && <div className="w-px flex-1 bg-ocean-light mt-1" style={{height:'2rem'}}/>}
                  </div>
                  <p className="font-serif text-base text-ocean font-light w-16 flex-shrink-0">{item.time}</p>
                  <p className="font-script text-xl text-pine">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
