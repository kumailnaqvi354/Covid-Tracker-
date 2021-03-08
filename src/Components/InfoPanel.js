import React, {useEffect, useState}  from 'react';
import GlobalStats from './GlobalStats';
import AllCountry from './AllCountry';

export default function InfoPanel({currentScreen}) {
  
  if(currentScreen===0){
    return <GlobalStats/>
  }
  else if(currentScreen===1){
    return <AllCountry/>
  }
  
  else return <GlobalStats/>


}
