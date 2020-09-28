import axios from 'axios'
const baseUrl = 'https://restcountries.eu/rest/v2'

const getAll = async () => {
    const response = await axios.get(`${baseUrl}/all?fields=name;capital;region;subregion,population;timezones;borders;nativeName;currencies;languages;flag`)
    return response.data
}

export default { getAll }