import begurBg from '/Begur.png'

const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)

export default function ParallaxSection() {
  return (
    <div
      className="w-full h-64 md:h-80"
      style={{
        backgroundImage: `url(${begurBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center 20%',
        backgroundAttachment: isMobile ? 'scroll' : 'fixed',
      }}
    />
  )
}
