import React from 'react';
import ReservationCard from './ReservationCard';
import SideNavCard from './SideNavCard';

const MyReservations: React.FC = () => {
  return (
    <div>
      <div className="mb-3 text-3xl">예약 내역</div>
      <SideNavCard />
      <ReservationCard />
    </div>
  );
};

export default MyReservations;
