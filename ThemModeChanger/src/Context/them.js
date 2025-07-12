
import React, { useContext } from "react";

let ContextThem = React.createContext(
    {
        themColor:"light",
        lightThem: () => {

        },
        darkThem: () => {

        }
    }
);



export let  ContextThemProvider = ContextThem.Provider;

export let useThem = () => {
    return useContext(ContextThem)
}
