const express = require("express"); //quickly create serve in node.js
const app= express ();
const cors = require("cors");       //different domain applications interact to each other
const pool = require ("./db");        //by using Pool we run queries with Postgres

//middleware
app.use(cors());
app.use(express.json()); // req.body-give us access to request body and get jason data


//ROUTES//

//create countries

app.post("/countries", async (req,res) => {
    try{
        const { name, capital } = req.body;
        const newCountries = await pool.query('INSERT INTO countries (name, capital) VALUES ($1, $2)', [name, capital]);
    res.json(newCountries.rows[0]);
    } catch(err) {
        console.error(err.message);
    }


}); 

//get all todos

app.get("/countries", async(req,res) => {

     try{
         const results = await pool.query("SELECT * FROM countries ORDER BY id ASC");
        res.json(allCountries.rows);
        }catch(err) {

        console.error(err.message)
     }
});

//get a todo

app.get("/countries/:id", async (req,res) => {

    try{
        const {id} = req.params;
        const countries = await pool.query("SELECT * FROM countries WHERE id = $1",[id]);
        res.json(countries.rows);
    }catch(err) {
        console.error(err.message)
    }
});

//update a country

app.put("/countries/:id", async (req,res) =>{

    try{
        const {id} = req.params;
        const { name, capital } = req.body;
        const updateCountries = await pool.query("UPDATE countries SET name = $1, capital = $2 WHERE id = $3", [name, capital, id]);
        res.json("countries were updated");     
    }catch(err) {
        console.error(err.message)
    }

});

//delete a country
app.delete("/countries/:id", async (req,res) =>{

    try{
        const {id} = req.params;
        const deleteCountries = await pool.query("DELETE FROM countries WHERE id = $1", [id]);
        res.json("countries were deleted");     
    }catch(err) {
        console.error(err.message)
    }

}); 


app.listen(5000, () => {
console.log("server has started on port 5000");
});