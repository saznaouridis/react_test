import React, {Fragment, useState} from "react";

const InputCountries = () => {

    const [ country, setCountry ] = useState("");

    const onSubmitForm =  async e => {

        e.preventDefault();
        try{
            const body= {country};
            const response = await fetch("http://localhost:5000/countries", {
                method : "POST",
                headers : {"Content-Type": "application/json"},
                body: JSON.stringify(body)
        });

        window.location = "/"; // refresh show the changes
        }catch(err) {
            console.error(err.message)
        }

    }

    return (
    <Fragment>
    <h1 className="text-center mt-5">Input Countries</h1>;
    <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
         type="text" 
         className="form-control" 
         value={country}
          onChange={e => setCountry(e.target.value)}
        />
        <button className="btn btn-success"> Add</button>
    
    </form>
    </Fragment>
    );
};

export default InputCountries;