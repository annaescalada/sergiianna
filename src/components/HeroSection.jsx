import heroBg from '/ab13286b-4e15-4e0c-81b0-0dbf87bd6ce1.png'

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex flex-col items-center justify-center px-6"
      style={{ backgroundImage: `url(${heroBg})`, backgroundSize: 'cover', backgroundPosition: 'center 56%' }}
    >
      <div className="absolute inset-0 bg-black/10 pointer-events-none" />
      <div className="relative z-10 text-center -translate-y-24">
        <h1 className="font-script text-8xl text-white leading-none">Anna & Sergi</h1>
        <h2 className="font-serif italic text-white/90 text-3xl mt-3 tracking-wide">
          Begur, 24 de setembre de 2026
        </h2>
      </div>
    </section>
  )
}
