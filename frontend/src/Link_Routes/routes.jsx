import React from "react";
import {Route} from "react-router-dom";
import Dashboard from "../components/dashboard"
import Details from "../components/book_details"
function Routes(){
    return(
        <div>
            <Route exact path="/" render={()=> <Dashboard/> } />
            <Route exact path="/details/:id" render={()=> <Details/> } />
        </div>
    )
}
export default Routes