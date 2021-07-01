import { useState, createContext, useReducer } from "react";
import videoReducer from "./AppReducer";
import useFirestore from "../hooks/useFirestore";

const initialState = [];
export const AppContext = createContext(initialState);

export default function AppProvider({ children }) {
   const [state, dispatch] = useReducer(videoReducer, initialState);

   const videos = useFirestore("videos", "");
   // videos.forEach((item) => initialState.concat(...item.video));

   function addVideo(video) {
      dispatch({
         type: "ADD_VIDEO",
         payload: video,
      });
   }

   console.log(videos);
   console.log(initialState);

   return (
      <AppContext.Provider value={{ videos, addVideo }}>
         {children}
      </AppContext.Provider>
   );
}
