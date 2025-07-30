import CarTable from "@/components/CarTable";
import ParticlesBackground from "@/components/ui/ParticlesBackground";

export default function RezerwacjaPage() {
  return (
    <main className="min-h-screen flex flex-col pt-32 justify-center">

      <ParticlesBackground />

      <h1 className="text-pink-700 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center mb-24">
        Zarezerwuj swoją jazdę
      </h1>

      <CarTable />

    </main>
  );
}
