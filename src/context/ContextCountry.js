import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

//create contex
export const CountryContext = createContext();

//provider is where state and functions live
const CountryProvider = (props) => {

    //create state context
    const [countrys, setCountrys] = useState([]);

    const [first, setFirst] = useState(true);

    //call api
    useEffect(() => {
        if (first) {
            const getCountrys = async () => {

                const url = 'https://covid-api.mmediagroup.fr/v1/cases';

                const countrys = await axios.get(url);

                setCountrys(countrys.data);

            }
            getCountrys();
        }
    },[first])


    return (
        <CountryContext.Provider
            value={{
                countrys,
            }}
        >
            {props.children}
        </CountryContext.Provider>
    )
}

export default CountryProvider;

