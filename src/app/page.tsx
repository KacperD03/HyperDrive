import { cars } from '@/data/cars'
import CarCard from '@/components/CarCard'
import { Button } from "@/components/ui/Button"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col pt-32">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center mb-24">
        HyperDrive
      </h1>
      <div className="p-8 flex flex-col items-center gap-4">
        <Button variant="default">Zarezerwuj jazdę</Button>
      </div>
      <div className="pl-24 flex flex-col gap-8">
        {cars.map((car) => (
          <CarCard key={car.slug} car={car} />
        ))}
      </div>
    </main>
    
  );
}
