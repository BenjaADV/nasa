import { useUsers } from '@/lib/api';

export default function HomePage() {
  const { data, isLoading } = useUsers();

  if (isLoading) return <p>Cargando...</p>;

  return (
    <ul>
      {data?.map((user: any) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
