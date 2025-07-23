import Link from 'next/link'
import Image from 'next/image'
import CarDialog from "@/components/ui/CarDialog"

type Car = {
  name: string
  slug: string
  image: string
  description: string
  description2: string
}

export default function CarCard({ car }: { car: Car }) {
  return (
    <div className="flex flex-col lg:flex-row p-8">
      
      <Link
        href={`/cars/${car.slug}`}
        className="lg:w-1/3 w-full border rounded-lg lg:rounded-l-lg lg:rounded-r-none overflow-hidden hover:shadow-xl transition"
      >
        <div className="relative h-96">
          <Image
            src={car.image}
            alt={car.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-4">
          <h2 className="text-purple-500 text-xl font-bold">{car.name}</h2>
          <p className="text-purple-300">{car.description}</p>
        </div>
      </Link>

      <div className="lg:w-2/3 w-full border rounded-lg lg:rounded-l-none lg:rounded-r-lg p-6 flex flex-col justify-between">
        <div>
          <h2 className="text-purple-500 text-3xl font-sans mb-4">{car.name}</h2>
          <p className="text-purple-300">{car.description2}</p>
        </div>

        <div className="mt-6">
          <CarDialog
            title={car.name}
            description={car.description}
            trigger={
              <button className="mt-2 bg-pink-700 text-white px-4 py-2 rounded hover:bg-pink-900 transition">
                Zobacz więcej
              </button>
            }
          />
        </div>
      </div>
    </div>
  )
}
