jest.mock('../myAPI');
import {MyAPI} from '../myAPI'


describe('MyAPI tests',()=>{
    it('myAPI is mocked', () => {
        let responseData:any = {data:'test'};
        (MyAPI.getCityLatLong as any).mockImplementation(()=> responseData);

        let city = 'Riyadh';
        
        let response = MyAPI.getCityLatLong(city);

        expect(response).toBe(responseData);
        expect(MyAPI.getCityLatLong).toHaveBeenCalledTimes(1);
    }

)});
