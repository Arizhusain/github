import React from "react";
import ButtonComponent from "./ButtonComponent";

const ButtonContainer = () => {
  const buttonNames = ["Default", "Sepia", "Dark", "Revel"];
  return (
    <>
      {buttonNames.map((buttonName) => (
        <ButtonComponent buttonName={buttonName} />
        
      ))}
    </>
  );
};

export default ButtonContainer;
