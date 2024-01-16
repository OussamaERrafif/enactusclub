import React, { useState } from "react";
import Button from "../components/Button";


const Enactus = () => {
  const [selectedLetter, setSelectedLetter] = useState(null);

  const handleLetterClick = (letter) => {
    setSelectedLetter(letter);
  };

  const handleCloseCard = () => {
    setSelectedLetter(null);
  };

  return (
    <div className="flex justify-center items-center h-full ">
      
      <div className="text-6xl font-bold">
        <span
          className="hover:text-yellow-500"
          title="Entrepreneurial"
          onClick={() => handleLetterClick("E")}
        >
          EN
        </span>
        <span
          className="mx-4 hover:text-yellow-500"
          title="Action-oriented"
          onClick={() => handleLetterClick("A")}
        >
          ACT
        </span>
        <span
          className="hover:text-yellow-500"
          title="United States"
          onClick={() => handleLetterClick("U")}
        >
          US
        </span>
      </div>
      {selectedLetter && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-4 rounded-lg">
            <h2 className="text-2xl font-bold mb-2">
              {selectedLetter === "E"
                ? "Entrepreneurial"
                : selectedLetter === "A"
                ? "Action-oriented"
                : "United States"}
            </h2>
            <p className="text-gray-700">
              {selectedLetter === "E"
                ? "Description of  Entrepreneurial"
                : selectedLetter === "A"
                ? "Description of Action-oriented"
                : "Description of United States"}
            </p>
            <Button
              text="Close"
              onclick={handleCloseCard}
            >
            </Button>
            
          </div>
        </div>
      )}
    </div>
  );
};

export default Enactus;