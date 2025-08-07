import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'
import gsap from 'gsap';

export const animatePageIn = () => {
  const b1 = document.getElementById('banner1')
  const b2 = document.getElementById('banner2')
  const b3 = document.getElementById('banner3')
  const logo1 = document.getElementById('tLogo1')
  const logo2 = document.getElementById('tLogo2')
  const logo3 = document.getElementById('tLogo3')

  if(b1 && b2 && b3  && logo1 && logo2 && logo3 ){
    const tl = gsap.timeline()

    const transition = () => {
      var t = tl.set([ b1, b2, b3], {
          yPercent: 0,
        }).to([ b1, b2, b3], {
          yPercent: 100,
          stagger: 0.2,
          duration: 1
        })
        return t
    }

    const spinLogo2 = () => {
    var t2 = gsap.to([logo1, logo2, logo3], {
      rotation: 360,
      duration: 1,
      repeat: 0,
      ease: 'linear',
      stagger: 0.2,
    });
    return t2;
  };
    tl.add(transition()).add(spinLogo2(), '-=1.5')
  }
}

export const spinLogo = (logoRef: any) => {
    var t2 = gsap.to(logoRef.current, {
      rotation: 180,
      duration: 1,
      repeat: 0,
      ease: 'linear',
    });
    return t2;
  };