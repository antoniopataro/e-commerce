import Image from 'next/image';

import favicon from '../../../public/assets/favicon.png';

import BannerStyles from './styles';

function Banner() {
  return (
    <BannerStyles>
      <div id="banner-left">
        <h1>Let&apos;s Shop!</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse rutrum, mauris in vehicula consequat,
          ligula ex feugiat elit, nec auctor urna mi ac velit.
        </p>
      </div>
      <div id="banner-right">
        <Image src={favicon} alt="Shopping Cart!" layout="fixed" width={200} height={200} />
      </div>
    </BannerStyles>
  );
}

export default Banner;
