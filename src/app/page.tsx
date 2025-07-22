import { cars } from '@/data/cars'
import CarCard from '@/components/CarCard'
import { Button } from "@/components/ui/Button"


export default function Home() {
  return (
    <main
      className="relative min-h-screen flex flex-col pt-32"
      style={{
        backgroundImage: 'url(/background.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
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
