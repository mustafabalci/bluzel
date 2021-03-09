import React from 'react';
import { Image } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

const OnboardScreen = () => {
  return (
    <>
      <Onboarding
        pages={[
          {
            backgroundColor: '#fcda05',
            image: <Image source={require('../images/ob-0.png')} />,
            title: 'Hoşgeldin 💖',
            subtitle:
              'Hemen gardroplarını oluşturmaya, kıyafetlerini kategorize etmeye ve kombinler oluşturmaya başlayabilirsin.',
          },
        ]}
      />
    </>
  );
};

export default OnboardScreen;
