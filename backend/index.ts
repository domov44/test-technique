import { createServer } from "./server"

const init = async () => {
  const server = await createServer()
  await server.start()
  console.log(`Server running at: ${server.info.uri}`)
}

init()