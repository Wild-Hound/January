import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { globalState, recommendedHousehouse } from "../Lib/Types";

const Rental = () => {
  const [rentalData, setRentalData] = useState<recommendedHousehouse>();

  const { id } = useParams();
  const navigate = useNavigate();

  const { housesAvailableForRental } = useSelector(
    (state: globalState) => state
  );

  useEffect(() => {
    if (!id || !housesAvailableForRental) {
      navigate("/", {
        replace: true,
      });
      return;
    }

    housesAvailableForRental.forEach((data) => {
      if (data.id === parseInt(id)) {
        setRentalData(data);
      }
    });
  }, [id, housesAvailableForRental]);

  useEffect(() => {
    console.log("rentaldata", rentalData);
  }, [rentalData]);

  return <div>Rental</div>;
};

export default Rental;
