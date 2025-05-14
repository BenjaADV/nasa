import { Typography } from '@/components/shared/typography/Typography';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

interface SubHeaderData {
  value1: string;
  value2: string;
  value3: string;
}

export function SubHeaderDataFetcher() {
  const [data, setData] = useState<SubHeaderData | null>(null);
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      const response = await new Promise<SubHeaderData>((resolve) =>
        setTimeout(
          () =>
            resolve({
              value1: '2181,00',
              value2: '2181,00',
              value3: '2181,00',
            }),
          1000
        )
      );
      setData(response);
    };

    fetchData();
  }, []);

  if (location.pathname === '/' || location.pathname === '/home') {
    return null;
  }

  if (!data) {
    return <Typography variant="highlighted">Cargando...</Typography>;
  }

  return (
    <div className="w-full h-10 bg-gray-300 px-10 flex items-center justify-between">
      <Typography variant="highlighted">
        {data.value1} -Último movimiento procesado DPP - {data.value1}
      </Typography>
      <Typography variant="highlighted">
        {data.value2} - Última distribución de potencia DPP - {data.value2}
      </Typography>
      <Typography variant="highlighted">
        {data.value3} - Próxima distribución de potencia DPP - {data.value3}
      </Typography>
    </div>
  );
}
