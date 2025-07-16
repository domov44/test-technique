import { Request, ResponseToolkit } from '@hapi/hapi'
import { fetchPeopleList } from '../services/peopleService'
import { fetchPlanetsList } from '../services/planetService'
import { fetchSpeciesList } from '../services/speciesService'
import { fetchStarshipsList } from '../services/starshipService'
import { fetchVehiclesList } from '../services/vehicleService'

import { formatPersonSummary } from '../models/peopleModel'
import { formatPlanetSummary } from '../models/planetModel'
import { formatSpeciesSummary } from '../models/speciesModel'
import { formatStarshipSummary } from '../models/starshipModel'
import { formatVehicleSummary } from '../models/vehicleModel'

export async function globalSearch(request: Request, h: ResponseToolkit) {
    const query = request.query.q?.toString()
    if (!query) return h.response({ error: 'Missing search query' }).code(400)

    const [peopleData, planetsData, speciesData, starshipsData, vehiclesData] = await Promise.all([
        fetchPeopleList(),
        fetchPlanetsList(),
        fetchSpeciesList(),
        fetchStarshipsList(),
        fetchVehiclesList()
    ])

    const filterByName = (items: any[], formatter: (item: any) => any, key: string = 'name') =>
        items
            .filter(item => item[key]?.toLowerCase().includes(query.toLowerCase()))
            .map(formatter)

    const responsePayload = {
        people: filterByName(peopleData, formatPersonSummary),
        planets: filterByName(planetsData, formatPlanetSummary),
        species: filterByName(speciesData, formatSpeciesSummary),
        starships: filterByName(starshipsData, formatStarshipSummary),
        vehicles: filterByName(vehiclesData, formatVehicleSummary)
    }

    return h.response(responsePayload).code(200)
}