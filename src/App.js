import React , {Fragment} from "react";
import Fun from "./deail";
import Hello from "./componentss";
import Secure from "./form";


const App=(props)=>{
    return(
        <Fragment>
        <Fun />
        <Hello />
        <Secure name="waqas" detail="hahahahahha" fruit1="apple" fruit2="banana" fruit3="strawberryy" />
        </Fragment>
    );

}

export default App;



















