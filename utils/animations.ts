import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'
import gsap from 'gsap';

export const animatePageIn = () => {
  const b1 = document.getElementById('banner1')
  const b2 = document.getElementById('banner2')
  const b3 = document.getElementById('banner3')
  const b4 = document.getElementById('banner4')

  if(b1 && b2 && b3 && b4  ){
    const tl = gsap.timeline()
    tl.set([ b1, b2, b3, b4], {
          yPercent: 0,
        }).to([ b1, b2, b3, b4], {
          yPercent: 100,
          stagger: 0.2
        })
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