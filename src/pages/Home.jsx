import React, { useState } from "react";
import Doctors from "../components/Doctors";
import AppointmentList from "../components/AppointmentList";
import { doctorData, appointmentData } from "../helper/data";

const Home = () => {
  const [doctors, SetDoctors] = useState(doctorData);
  const [appointments, setAppointments] = useState(appointmentData);
  console.log("9", appointments);

  return (
    <main className="text-center mt-2 vh-100">
      <h1 className="display-6 text-success">
        MAK HOSPITAL APPOINTMENT SERVICE
      </h1>
      <Doctors
        doctors={doctors}
        appointments={appointments}
        setAppointments={setAppointments}
      />
      <AppointmentList
        appointments={appointments}
        setAppointments={setAppointments}
      />
    </main>
  );
};

export default Home;
