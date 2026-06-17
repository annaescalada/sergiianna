export default function TextSection({ guest }) {
  return (
    <section id="intro" className="bg-sand-pale py-20 px-8">
      <div className="max-w-sm mx-auto text-center">
        <p className="font-serif text-3xl text-pine mb-4">
          Hola {guest?.name},
        </p>
        <p className="font-serif italic text-stone text-base leading-relaxed mb-5">
          <strong>Ens casem!</strong> Després de sis anys i mig d'aventures junts hem decidit fer el pas i casar-nos el proper <strong>24 de setembre</strong> a Begur, un lloc molt especial per nosaltres perquè és on fa tres anys ens vam prometre, al mirador de la Cova d'en Gispert.
        </p>
        <p className="font-serif italic text-stone text-base leading-relaxed mb-5">
          Volem celebrar-ho acompanyats de la nostra família, sense gaires protocols, de manera senzilla i íntima. No us enganyarem, en algun moment hem tingut la temptació de casar-nos i no dir-li a ningú, ja ens coneixeu, però sabem que el nostre dia serà millor si el compartim amb vosaltres.
        </p>
        <p className="font-serif italic text-stone text-base leading-relaxed mb-14">Us hi esperem amb molta il·lusió,</p>
        <p className="font-script italic text-2xl text-stone">Anna i Sergi</p>
      </div>
    </section>
  )
}
