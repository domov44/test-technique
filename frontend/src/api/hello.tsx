export async function fetchHello(): Promise<{ message: string }> {
  const res = await fetch('/api')
  if (!res.ok) throw new Error('Network error')
  return res.json()
}