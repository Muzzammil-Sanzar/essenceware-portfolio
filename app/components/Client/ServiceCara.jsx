"use client";
import ServicesCarousel from "@/app/utils/Services/ServicesCarousel";
import React, { useState } from "react";
import ServiceDetail from "../ServiceDetail";

export default function ServiceCara() {
  const [isServiceOpen, setIsServiceOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const openModal = (service) => {
    setSelectedService(service);
    setIsServiceOpen(true);
  };
  return (
    <>
      <ServicesCarousel openModal={openModal} />
      {selectedService && (
        <ServiceDetail
          isOpen={isServiceOpen}
          setIsOpen={setIsServiceOpen}
          service={selectedService}
        />
      )}
    </>
  );
}
