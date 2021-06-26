import { useState, createContext, useReducer } from "react";
import videoReducer from "./AppReducer";

const initialState = [];
export const AppContext = createContext(initialState);

export default function AppProvider({ children }) {
   const [state, dispatch] = useReducer(videoReducer, initialState);

   function addVideo(video) {
      dispatch({
         type: "ADD_VIDEO",
         payload: video,
      });
   }

   return (
      <AppContext.Provider value={{ videos: state, addVideo }}>
         {children}
      </AppContext.Provider>
   );
}
