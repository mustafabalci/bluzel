import React from 'react';
import { Image, Dimensions } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

const width = Dimensions.get('window').width;

const OnboardingScreen = ({ navigation }) => {
  return (
    <>
      <Onboarding
        skipLabel="Geç"
        nextLabel="Devam Et"
        onSkip={() => navigation.navigate('Home')}
        onDone={() => navigation.navigate('Home')}
        pages={[
          {
            backgroundColor: '#fcda05',
            image: <Image source={require('../images/ob-0.png')} />,
            title: 'Hoşgeldin 💖',
            subtitle: 'Uygulamamızı kısaca tanıtmamızı ister misin?',
          },
          {
            backgroundColor: '#fcda05',
            image: <Image source={require('../images/ob-1.png')} />,
            title: 'Kıyafetlerinin Fotoğrafını Çek',
            subtitle: 'Kıyafetlerini fotoğraflayıp kategorize edebilirsin.',
          },
          {
            backgroundColor: '#fcda05',
            image: <Image source={require('../images/ob-2.png')} />,
            title: 'Gardroplar Oluştur',
            subtitle: 'Kıyafetlerini farklı gardroplarda toplayabilirsin.',
          },
          {
            backgroundColor: '#fcda05',
            image: <Image source={require('../images/ob-3.png')} />,
            title: 'Kombinler Hazırla',
            subtitle: 'Kombinler hazırlayıp arkadaşlarınla paylaşabilirsin.',
          },
        ]}
      />
    </>
  );
};

export default OnboardingScreen;
