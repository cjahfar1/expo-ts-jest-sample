import axios, { AxiosResponse } from 'axios';

export class MyAPI {
    public static getCityLatLong(city: string ): Promise<AxiosResponse<string>> {
        return  axios.get('https://www.metaweather.com/api/location/search/?query=' + city);
        // 24.647320,46.714581
    }
}
