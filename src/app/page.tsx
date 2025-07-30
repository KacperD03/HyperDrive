import ParticlesBackground from "@/components/ui/ParticlesBackground";
import { cars } from '@/data/cars';
import CarCard from '@/components/CarCard';
import { Button } from "@/components/ui/Button";
import Link from 'next/link';


export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col pt-32 overflow-hidden">

      <ParticlesBackground />

      <h1 className="text-pink-700 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center mb-24">
        HyperDrive
      </h1>

      <div className="p-8 flex flex-col items-center gap-4">
        <Link href="/rezerwacja">
          <Button variant="default">Zarezerwuj jazdę</Button>
        </Link>
      </div>

      <div className="pl-24 flex flex-col gap-8">
        {cars.map((car) => (
          <CarCard key={car.slug} car={car} />
        ))}
      </div>

    </main>
  );
}
