import React, {Fragment, useEffect, useState} from "react";
import EditCountries from "./EditCountries";

const ListCountries = () => {

    const[country, setCountry] = useState([]); 

    //delete countries function

const deleteCountries = async country_id => {
  try{
    const deleteCountries = await fetch(`http:localhost:5000/countries/${country_id}`,{
      method: "DELETE"
    });

    setCountry(country.filter(countries => countries.id !==country_id));
  } catch (err) {
    console.error(err.message)
  }
}
    const getCountries = async ()  => {
      try {
          
        const response = await fetch(`http://localhost:5000/countries`);
        const jsonData = response.json();

        setCountry(jsonData);

      }catch(err) {
          console.error(err.message);
      }

    }
        useEffect(() =>  {
          getCountries();
        
        }, []);   //1 request 
        return <Fragment>
            <table class="table mt-5 text-center">
        <thead>
          <tr>
            <th>name</th>
            <th>capital</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
         {/*<tr>
            <td>John</td>
            <td>Doe</td>
            <td>john@example.com</td>
         </tr>*/} 
          {country.map(countries => (
            <tr key={countries.id}>
              <td>{countries.name}</td>
              <td>{countries.capital}</td>
              <td>
                <EditCountries countries = {countries}  />
              </td>
              <td>
                <button className="btn btn-danger" onClick={() => deleteCountries(countries.id)}
                > 
                Delete
                </button>
              </td>
            </tr>

          ))}
        </tbody>
      </table>
      </Fragment>;
        

}

export default ListCountries;