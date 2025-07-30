import { getAllCars } from '@/lib/cars';

export default async function CarTable() {
  const cars = await getAllCars();

  return (
    <table className="w-full table-auto border border-gray-300">
      <thead>
        <tr className="bg-gray-100">
          <th>Nazwa</th>
          <th>Opis</th>
          <th>Cena</th>
        </tr>
      </thead>
      <tbody>
        {cars.map((car) => (
          <tr key={car.id}>
            <td>{car.name}</td>
            <td>{car.description}</td>
            <td>{car.price} zł</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
