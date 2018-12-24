jest.mock('axios');
import axios from 'axios';
import {MyAPI} from '../myAPI'


describe('MyAPI tests',()=>{
    it('should return data from response', () => {
        let responseData:any = {data:'test'};
        (axios.get as any).mockImplementation(()=> responseData);

        let city = 'Riyadh';
        
        let response = MyAPI.getCityLatLong(city);

        expect(response).toBe(responseData);
        expect(axios.get).toHaveBeenCalledTimes(1);
    }

)});
