import localFont from 'next/font/local';

const Gilroy = localFont({
  src: [
    {
      path: '../assets/fonts/gilroy/thin.ttf',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../assets/fonts/gilroy/extralight.ttf',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../assets/fonts/gilroy/light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../assets/fonts/gilroy/regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/gilroy/medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../assets/fonts/gilroy/semibold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../assets/fonts/gilroy/bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../assets/fonts/gilroy/extrabold.ttf',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../assets/fonts/gilroy/black.ttf',
      weight: '900',
      style: 'normal',
    }
  ],
  variable: '--font-gilroy',
})

export { Gilroy }