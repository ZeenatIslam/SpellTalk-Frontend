export default function BackgroundDonuts() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#0b0b0f]">
      
      {/* Desktop (16:9) */}
      <img
        src="Donuts.png"
        alt="background"
        className="hidden md:block w-full h-full object-cover"
      />

      {/* Mobile */}
      <img
        src="Donuts2.png"
        alt="background"
        className="block md:hidden w-full h-full object-cover"
      />

    </div>
  );
}