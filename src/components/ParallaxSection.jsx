import begurBg from '/Begur.png'

export default function ParallaxSection() {
  return (
    <div
      className="w-full h-64 md:h-80"
      style={{
        backgroundImage: `url(${begurBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    />
  )
}
