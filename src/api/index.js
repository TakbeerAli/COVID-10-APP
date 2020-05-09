import axios from "axios";

const url ='https://covid19.mathdro.id/api';

//This is for Cards Data
export const fetchData =  async (country) => {
    let changeableUrl =url;

    if(country){
        changeableUrl =`${url}/countries/${country}`;
    }
     try{
        const { data:{ confirmed,recovered,deaths,lastUpdate } } = await axios.get(changeableUrl);
        const modifiedData = {
            confirmed,                  //data.confirmed,   we destructure data in objec with data
            recovered,                  //data.recovered,
            deaths,                       //data.deaths,
            lastUpdate,                   //data.lastUpdate
        }
        return modifiedData;   //here we returend   the value to another component
     } catch (error) {
         console.log(error);
    }
}

//This is for Chart  style
export const fetchDailyData = async ()=>{
    try {
        const { data } = await axios.get(`${url}/daily`);

      const modifiedData = data.map((dailyData) => ({
       confirmed:dailyData.confirmed.total,
       deaths:dailyData.deaths.total,
       date: dailyData.reportDate,

      }));
      return modifiedData;
    } catch (error) {
        console.log(error);
    }
}
// this is Couuntry picker function

export const fetchcountries = async () => {
     try {
         const {data:{countries}} = await axios.get(`${url}/countries`);
        return countries.map((country) => country.name);
         
     } catch (error) {
         console.log(error);
     }
}


