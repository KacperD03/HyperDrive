import { cars } from '@/data/cars'
import { notFound } from 'next/navigation'
import Image from 'next/image'

export default function CarPage({ params }: { params: { slug: string } }) {
  const car = cars.find(c => c.slug === params.slug)
  if (!car) return notFound()

  return (
    <div className="max-w-2xl mx-auto p-8">
      <div className="relative w-full h-64 mb-4">
        <Image
          src={`${car.image}`}
          alt={car.name}
          fill
          className="object-cover rounded"
          priority
        />
      </div>

      <h1 className="text-3xl font-bold">{car.name}</h1>
      <p className="mt-2">{car.description}</p>

      <div className="mt-4">
        <h2 className="font-semibold">Więcej informacji:</h2>
        <ul className="list-disc list-inside">
          {car.links.map(link => (
            <li key={link.url}>
              <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
