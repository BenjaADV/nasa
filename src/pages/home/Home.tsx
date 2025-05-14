import DPPCard from './components/DPPCard';

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-bold text-purple-600 mb-8">Inicio</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <DPPCard
          metric="2181,00"
          description="Último movimiento procesado DPP"
          date="since last week"
        />
        <DPPCard
          metric="2181,00"
          description="Última Distribución de Potencia DPP"
          date="01/04/2025 10:26:59"
        />
        <DPPCard
          metric="2181,00"
          description="Próxima Distribución de Potencia DPP"
          date="since last week"
        />
      </div>
    </>
  );
}
