import annaSergiRufus from '../../public/anna_sergi_rufus.jpg'

const WA_URL = 'https://wa.me/34689001494?text=' + encodeURIComponent('Hola! Confirmo l\'assistència. ¡Nos vamos de bodorrio! 🎉')

export default function RSVPSection() {
  return (
    <section id="confirmacio" className="bg-sand-pale py-20 px-8">
      <div className="max-w-sm mx-auto text-center">
        <img src={annaSergiRufus} alt="Anna, Sergi i Rufus" className="w-48 h-48 rounded-full object-cover mx-auto mb-8 shadow-md" />
        <h2 className="font-script text-5xl text-pine mb-6">Confirmació</h2>
        <p className="font-serif italic text-stone text-base leading-relaxed mb-6">
          Agrairíem que confirmeu la vostra assistència abans del 30 de juliol. I si veniu, que esperem que sí, alguns detalls a tenir en compte:
        </p>
        <ul className="text-left mb-10 flex flex-col gap-5">
          <li className="flex items-start gap-3">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-pine flex-shrink-0" />
            <span className="font-serif italic text-stone text-base leading-relaxed">Feu-nos arribar les indicacions pel restaurant si teniu alguna <strong>al·lèrgia</strong> o <strong>intolerància</strong> alimentària.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-pine flex-shrink-0" />
            <span className="font-serif italic text-stone text-base leading-relaxed"><strong>Codi de vestimenta:</strong> no n'hi ha cap de concret, sigueu vosaltres mateixos, i recordeu que correu el risc de venir més mudats que nosaltres.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-pine flex-shrink-0" />
            <div>
              <p className="font-serif italic text-stone text-base leading-relaxed mb-3">
                El millor regal és compartir aquest dia amb vosaltres però si tot i així ens voleu fer un detall, aquests són alguns dels projectes que ens podeu ajudar a fer realitat:
              </p>
              <ul className="flex flex-col gap-3 ml-4 mb-3">
                {[
                  'Finalment, després de tant buscar, hem trobat el nostre pis... però ara l\'hem de pagar i reformar.',
                  'No ens podem queixar, hem viatjat molt, però des que ens vam conèixer tenim pendent visitar el Japó i volem anar-hi de viatge de noces.',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-pine-light flex-shrink-0" />
                    <span className="font-serif italic text-stone text-base leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="font-serif italic text-stone text-sm leading-relaxed mb-2">Número de compte:</p>
              <button
                onClick={() => navigator.clipboard.writeText(import.meta.env.VITE_ACCOUNT_NUMBER)}
                className="w-full flex items-center justify-between gap-3 px-4 py-3 bg-white border border-pine-pale rounded-sm font-sans text-sm tracking-wider text-stone hover:bg-sand-pale transition-colors mb-1"
                title="Copiar IBAN"
              >
                <span>{import.meta.env.VITE_ACCOUNT_NUMBER}</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
                </svg>
              </button>
              <p className="font-serif italic text-stone text-base leading-relaxed mt-3">
                Estarem molt agraïts si decidiu participar en algun dels nostres projectes, però de tot cor, insistim en que la vostra companyia és el millor que ens podeu regalar aquest dia.
              </p>
            </div>
          </li>
        </ul>
        <a
          href={WA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 font-sans font-semibold tracking-widest uppercase text-xs bg-pine text-sand-pale rounded-sm transition-all duration-200 hover:bg-pine-dark active:scale-95"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
          </svg>
          Confirmar assistència
        </a>
      </div>
    </section>
  )
}
