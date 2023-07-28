import React, { useState } from "react";
import Doctors from "../components/Doctors";
import AppointmentList from "../components/AppointmentList";
import { doctorData } from "../helper/data";

const Home = () => {
  const [doctors, SetDoctors] = useState(doctorData);

  return (
    <main className="text-center mt-2 vh-100">
      <h1 className="display-5 text-success">MAK HOSPITAL</h1>
      <Doctors doctors={doctors} />
      <AppointmentList />
    </main>
  );
};

export default Home;
