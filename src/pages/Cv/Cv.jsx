import React from "react";
import cv from "../../assets/images/cv.jpg";
import "./Cv.scss";
//import IconoDescarga from "../../../src/assets/images/icon-house.svg";
import IconoDescarga from "../../../src/assets/images/pdf.png";

const Cv = () => {

    //funcion para descargar pdf
    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('Oscar Sánchez-Marín Baquero__CV.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Oscar Sánchez-Marín Baquero__CV.pdf';
                alink.click();
            })
        })
    }


  return (
    <section className="cv">
      <div className="cv__container">
        <img className="cv__image" src={cv} alt={cv}></img>
      </div>
      <div className="nuevo-gasto">
        <figure>
          <img 
            src={IconoDescarga}
            alt="icono nuevo aviso"
            onClick={onButtonClick}
          />
        </figure>
        {/* </Link> */}
      </div>
    </section>
  );
};

export default Cv;
