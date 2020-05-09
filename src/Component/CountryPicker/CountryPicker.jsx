import React,{ useState, useEffect }  from "react";
import { NativeSelect, FormControl} from "@material-ui/core";
import  styles from "./CountryPicker.module.css";
import { fetchcountries } from "../../api";

const CountryPicker = ({handleCoutryChange}) => {

    const [ fetchCountries, setFetchCountries ] = useState([]);

    useEffect( ()=>{
        const fetchAPI = async ()=>{

            setFetchCountries(await fetchcountries());
        }
        fetchAPI();
    },[setFetchCountries]);
    console.log(fetchCountries);
 return(
     <FormControl className={styles.FormControl}> 
         <NativeSelect defaultValue="" onChange={(e) =>handleCoutryChange(e.target.value) }>
         <option value="">Globel</option>
 {fetchCountries.map((country,i)=> <option key={i} value={country}>{country}</option>)}
         </NativeSelect>
         
     </FormControl>
 )

}

export default CountryPicker;