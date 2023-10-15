import { FC, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { cn } from '@/shared/lib/classNames';

import { Actions } from '../Actions/Actions';
import { Content } from '../Content/Content';
import { Controls } from '../Controls/Controls';

import styles from './Header.module.scss';

interface IHeaderProps {
  className?: string;
}

const Header: FC<IHeaderProps> = ({ className }) => {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        // trigger: '[data-scroll-trigger]',
        scroller: '#content',
        scrub: true,
        start: 'top',
        end: '220px',
        // markers: {
        //   startColor: 'green',
        //   endColor: 'black',
        // },
      },
    });

    tl.from('#headerBg', {
      opacity: 0,
    }).to('#headerBg', {
      opacity: 1,
    });
  }, []);

  return (
    <header className={cn(styles.Header, className)}>
      <div id={'headerBg'} className={styles.back}>
        <div className={styles.sideBack}></div>
      </div>
      <Controls />
      <Content />
      <Actions />
    </header>
  );
};

export default Header;
