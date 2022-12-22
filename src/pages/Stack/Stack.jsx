import { useEffect, useState } from "react";

import axios from "axios";
import Front from "./Components/Front";
import Back from "./Components/Back";

const BASE_URL = "https://63961d9490ac47c6807dc9d2.mockapi.io";




export default function Stack() {
 
  const [stack, setStack] = useState([]);  

  useEffect(() => {
    fetch(`${BASE_URL}/oitstack`)
      .then((response) => response.json())
      .then((data) => setStack(data));
  }, []);

  const front = stack.filter(
    (item) => item.type === "front" 
  );
  const back = stack.filter(
    (item) => item.type === "back" 
  );

  console.log(front,'front')
  console.log(back,'back')

  return (
    <>
    <div className='firstMensaje'>
      <Front front={front}/>
      <Back back={back}/>
      </div>
    </>
  );
}
