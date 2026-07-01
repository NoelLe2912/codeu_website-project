import React from 'react';
import ProfileCard from './ProfileCard';
import Calendar from './Calendar';
import MotivationBox from './MotivationBox';

function RightPanel() {
  return (
    <div className="bg-gray-50 p-5 lg:block hidden">
      <ProfileCard />
      <Calendar />
      <MotivationBox />
    </div>
  );
}

export default RightPanel;
