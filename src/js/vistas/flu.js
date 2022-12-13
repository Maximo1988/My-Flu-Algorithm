import React from "react";
import Home from "../component/home";

const Myflu = () => {

    return (
      <div className="card mb-3" style={{ maxWidth: "540px" }}>
        
        let feelslikehitbyatrain = true;
        let youwerehitbyatrain = false;

        if (feelslikehitbyatrain == true) {
            if (youwerehitbyatrain == true) {
                console.log("You don't have a flu");
            }
            else {
                console.log("You have a flu");
            }
        }
        else {
            console.log("You don't have a flu");
        }

      </div>
    );
  };
  
  export default Myflu;

  