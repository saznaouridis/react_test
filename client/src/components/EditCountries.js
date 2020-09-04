import React, { Fragment, useState } from "react";

const EditCountries = ({countries})  => {
    const[country, setCountry] = useState(countries.country);

//update country function

const updateCountry = async e => {
    e.preventDefault()
try{
    const body = {country};
    const response = await fetch(`http://localhost:5000/countries/${countries.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json"} ,
        body: JSON.stringify(body)
    })

    window.location = "/";
}catch (err) {

    console.error(err.message)
}

};


    return (
    <Fragment>
    <button 
    type="button" 
    class="btn btn-warning" 
    data-toggle="modal" 
    data-target={`#id${countries.id}`}
    >
      Edit
    </button>
    
{/*
    id = id10
*/}

    <div class="modal" id={`id${countries.id}`}>
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title">Edit Countries</h4>
            <button type="button" class="close" data-dismiss="modal">
                &times;
                </button>
          </div>
          <div class="modal-body">
            <input type="text" className="form-control" value={country} onChange={e =>
            setCountry(e.target.value)} />
          </div>

          <div class="modal-footer">
          <button 
          type="button" 
          class="btn btn-warning" 
          data-dismiss="modal"
          onClick = {e => updateCountry(e)}
          >
                Edit
                </button>
            <button type="button" class="btn btn-danger" data-dismiss="modal">
                Close
                </button>
          </div>
        </div>
      </div>
    </div></Fragment>
    );

};

export default EditCountries;