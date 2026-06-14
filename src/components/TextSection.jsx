export default function TextSection({ guest }) {
  return (
    <section id="intro" className="bg-sand-pale py-20 px-8">
      <div className="max-w-sm mx-auto text-center">
        <p className="font-serif text-3xl text-pine mb-4">
          Hola {guest?.name},
        </p>
        <p className="font-serif italic text-stone text-base leading-relaxed mb-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vehicula
          sapien at libero tincidunt, vel fermentum nulla dignissim. Vivamus euismod
          eros ac orci convallis, ut dignissim velit facilisis.
        </p>
        <p className="font-serif italic text-stone text-base leading-relaxed mb-14">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vehicula
          sapien at libero tincidunt, vel fermentum nulla dignissim. Vivamus euismod
          eros ac orci convallis, ut dignissim velit facilisis.
        </p>
        <p className="font-script italic text-2xl text-stone">Anna i Sergi</p>
      </div>
    </section>
  )
}
