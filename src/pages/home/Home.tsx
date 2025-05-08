import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Package } from 'lucide-react';

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-bold text-purple-600 mb-8">Inicio</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-3xl font-bold">2181,00</h2>
                <p className="text-sm text-gray-500 mt-2">Último movimiento procesado DPP</p>
                <div className="flex items-center mt-4 text-sm text-gray-500">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>since last week</span>
                </div>
              </div>
              <div className="bg-purple-100 p-2 rounded-md">
                <Package className="h-5 w-5 text-purple-500" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-3xl font-bold">2181,00</h2>
                <p className="text-sm text-gray-500 mt-2">Última Distribución de Potencia DPP</p>
                <div className="flex items-center mt-4 text-sm text-gray-500">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>01/04/2025 10:26:59</span>
                </div>
              </div>
              <div className="bg-purple-100 p-2 rounded-md">
                <Package className="h-5 w-5 text-purple-500" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-3xl font-bold">2181,00</h2>
                <p className="text-sm text-gray-500 mt-2">Próxima Distribución de Potencia DPP</p>
                <div className="flex items-center mt-4 text-sm text-gray-500">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>since last week</span>
                </div>
              </div>
              <div className="bg-purple-100 p-2 rounded-md">
                <Package className="h-5 w-5 text-purple-500" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
