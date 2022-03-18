import React from "react";
import ButtonComponent from "./ButtonComponent";

const ButtonContainer = ({ setColorData }) => {
  const buttonNames = [
    {
      id: 1,
      name: "Default",
      colorName: "white",
    },
    {
      id: 2,
      name: "Purple",
      colorName: "purple",
    },
    {
      id: 3,
      name: "Green",
      colorName: "green",
    },
    {
      id: 4,
      name: "Red",
      colorName: "red",
    },
  ];
  return (
    <>
      {buttonNames.map((buttonName) => (
        <ButtonComponent
          key={buttonName.id}
          buttonName={buttonName.name}
          buttonColor={buttonName.colorName}
          setColorData={setColorData}
        />
      ))}
    </>
  );
};

export default ButtonContainer;
