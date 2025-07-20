import Link from 'next/link'
import Image from 'next/image'

type Car = {
  name: string
  slug: string
  image: string
  description: string
  description2: string
}

export default function CarCard({ car }: { car: Car }) {
  return (
    <div className="p-8 flex">
      
      <Link
        href={`/cars/${car.slug}`}
        className="w-1/2 lg:w-1/3 border rounded-l-lg overflow-hidden hover:shadow-xl transition"
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
          <h2 className="text-xl font-bold">{car.name}</h2>
          <p className="text-gray-600">{car.description}</p>
        </div>
      </Link>

      <div className="w-1/2 lg:w-2/3 bg-gray-300 rounded-r-lg">
        <h2 className="pl-8 pr-8 text-3xl font-sans mb-4">{car.name}</h2>
        <p className="pl-8 pr-8 text-purple-600">{car.description2}</p>
      </div>

    </div>
  )
}