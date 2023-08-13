import React from 'react';
import Welcome from "../Welcome/Welcome"
import Booking from '../Booking/Booking';
import Dishes from '../Dishes/Dishes';
import Ambience from '../Ambience/Ambience';
import Delivery from '../Delivery/Delivery';
import Partner from '../Partner/Partner';
function Home() {
  return (
  <>
   <Welcome />
     <Partner />
     <Booking /> 
     <Dishes />
     <Ambience />
     <Delivery />
  
  </>
  )
}

export default Home