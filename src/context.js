// need to move this into library 
import {React, createContext, useState} from "react";
import { Details } from "emissions-library4";

const dataPlan = createContext();
//export const dataPlanSet = createContext();

export function DataPlanProvider ({children}) {
    const [isEnabled, setIsEnabled] = useState(true);
    // it is resetting to false everytime 
    return (
        <dataPlan.Provider value = {{isEnabled, setIsEnabled}}>
            {children}
        </dataPlan.Provider>
    );
};


export default dataPlan; 