import Image from "next/image"

export function PortfolioAvatar() {
  return (
    <div className="relative w-52 h-52 md:w-64 md:h-64">
      <Image
        src="/images/avatar.png"
        alt="Portfolio Avatar"
        width={256}
        height={256}
        className="w-full h-full object-cover drop-shadow-2xl"
        priority
      />
    </div>
  )
}
