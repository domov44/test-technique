import { useQuery } from '@tanstack/react-query'
import { fetchHello } from '../../api/hello'
import Hello from '../../components/hello'

export default function HelloPage() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['hello'],
    queryFn: fetchHello,
  })

  if (isLoading) return <div>Chargement...</div>
  if (isError) return <div>Erreur réseau</div>
  if (!data) return <div>Aucun résultat</div>

  console.log(data.message)

  return <Hello message={data.message} />
}