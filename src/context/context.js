// import axios from "axios";
// import { createContext, useState, useEffect } from "react";

// //Creamos el creador de contexto:
// export const SWContext = createContext();

// //Almacenamos la ruta de la API para poder modificarla más facilmente
// const BASEURL = "https://62852cc03060bbd347460bff.mockapi.io/";

// //Vamos a definir el proveedor de mi contexto:
// export const SWContextProvider = ({ children }) => {
//   const [stack, setStack] = useState([]);
  


//   useEffect(() => {
//     const fetchGalery = async () => {
//       const res = await axios.get(`${BASEURL}/oitStack`);
//       setStack(res.data);
//     };
//     fetchGalery();
//   }, []);

//   console.log(stack,'stack')
 


//   return (
//     <SWContext.Provider value={{ stack }}>
//       {children}
//     </SWContext.Provider>
//   );
// };
