import { Request, ResponseToolkit } from '@hapi/hapi'
import { fetchPeopleList } from '../services/peopleService'
import { fetchPlanetsList } from '../services/planetService'
import { fetchSpeciesList } from '../services/speciesService'
import { fetchStarshipsList } from '../services/starshipService'
import { fetchVehiclesList } from '../services/vehicleService'

export async function globalSearch(request: Request, h: ResponseToolkit) {
    const query = request.query.q?.toString()
    if (!query) return h.response({ error: 'Missing search query' }).code(400)

    const [peopleData, planetsData, speciesData, starshipsData, vehiclesData] = await Promise.all([
        fetchPeopleList(1, 100),
        fetchPlanetsList(1, 100),
        fetchSpeciesList(1, 100),
        fetchStarshipsList(1, 100),
        fetchVehiclesList(1, 100)
    ])

    const filterByName = (items: any[], key: string = 'name') =>
        items.filter(item => item[key]?.toLowerCase().includes(query.toLowerCase()))

    return h.response({
        people: filterByName(peopleData.results || peopleData.results, 'name'),
        planets: filterByName(planetsData.results || planetsData.results, 'name'),
        species: filterByName(speciesData.results || speciesData.results, 'name'),
        starships: filterByName(starshipsData.results || starshipsData.results, 'name'),
        vehicles: filterByName(vehiclesData.results || vehiclesData.results, 'name')
    }).code(200)
}
