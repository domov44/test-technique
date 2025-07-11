type HelloProps = {
  message: string
}

export default function Hello({ message }: HelloProps) {
  return <div>{message}</div>
}