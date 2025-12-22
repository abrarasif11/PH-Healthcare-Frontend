"use client";
import React from "react";
type TParams = {
  params: {
    doctorId: string;
  };
};
const DoctorUpdatePage = ({ params }: TParams) => {
  console.log(params?.doctorId);
  return (
    <div>
      <h4>Update Doctor</h4>
    </div>
  );
};

export default DoctorUpdatePage;
