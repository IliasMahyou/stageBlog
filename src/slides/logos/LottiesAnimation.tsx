import React, { useState, useEffect } from 'react';
import Lottie from 'react-lottie';



  

export const LottieAnimation = ({width,height,lottie}:{width:number,height:number,lottie:string}): React.JSX.Element => {
    
  const [animationData, setAnimationData] = useState(null);
  const fetchLottieData = async () => {
    const response = await fetch(lottie); 
    return response.json();
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchLottieData();
      setAnimationData(data);
    };

    fetchData();
  }, []);

  if (!animationData) {
    return <div>Loading animation...</div>;
  }

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div>
      <Lottie options={defaultOptions} height={height} width={width} />
    </div>
  );
};
