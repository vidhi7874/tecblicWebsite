'use client';
import React, { useEffect } from 'react';
import ContactUs from './ContactUs';
import PartnerShip from './PartnerShip';
import 'aos/dist/aos.css';
import AOS from 'aos';

export default function ProjectDetails({ partnerShip }: any) {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      offset: 50,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <ContactUs />
      <PartnerShip partnerShip={partnerShip} />
    </>
  );
}
