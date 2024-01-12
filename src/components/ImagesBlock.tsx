import { MouseEvent, useRef, useState } from 'react';
import { Image } from './Image';
import { useAnimationFrame } from '../hooks/useAnimationFrame';

const colorDarkest = '#5f8d13';
const colorDarker = '#74ad18';
const colorDark = '#89cc1c';
const color = '#9be22a';
const colorLight = '#aae649';
const colorLighter = '#b9ea69';
const colorLightest = '#c7ef88';

const imagesProps = [
  {src: './Frame40.png', alt: 'work', color: colorDarkest},
  {src: './Frame41.png', alt: 'normal', color: colorLightest},
  {src: './Frame42.png', alt: 'sad', color: colorLighter},
  {src: './Frame43.png', alt: 'hehe', color: colorDarker},
  {src: './Frame44.png', alt: 'clown', color: colorLight},
  {src: './Frame45.png', alt: 'what', color: colorDarkest},
  {src: './Frame46.png', alt: 'little_sad', color: colorLighter},
  {src: './Frame47.png', alt: 'anger', color: colorDarkest},
  {src: './Frame55.png', alt: 'nice', color: colorDarker},
  {src: './Frame62.png', alt: 'fck_you', color: colorDarkest},
  {src: './Frame40.png', alt: 'work', color: colorLight},
  {src: './Frame41.png', alt: 'normal', color: colorLightest},
  {src: './Frame42.png', alt: 'sad', color: colorDarker},
  {src: './Frame43.png', alt: 'hehe', color: colorDarkest},
  {src: './Frame44.png', alt: 'clown', color: colorLight},
];

interface ImagesBlockProps {
  setTitle: (value: string) => void;
  setColor: (value: string) => void;
}

export const ImagesBlock = ({setTitle, setColor}: ImagesBlockProps) => {
  const [hovered, setHovered] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const aimX = useRef(0.5);
  const aimY = useRef(0.5);

  const currentX = useRef(0.5);
  const currentY = useRef(0.5);


  const tween = () => {
    currentX.current = currentX.current + (aimX.current - currentX.current) * 0.05;
    currentY.current = currentY.current + (aimY.current - currentY.current) * 0.05;
  
    if (sectionRef.current) {
      const sx = sectionRef.current.clientWidth - window.innerWidth;
      const sy = sectionRef.current.clientHeight - window.innerHeight;

      sectionRef.current.style.transform = `translate(${-1 * sx * currentX.current}px, ${-1 * sy * currentY.current}px)`;
    }
  }

  const move = (ev: MouseEvent) => {
    aimX.current = ev.pageX / window.innerWidth;
    aimY.current = ev.pageY / window.innerHeight;
  }

  useAnimationFrame(tween);

  return (
    <div 
      ref={sectionRef} 
      className='imagesWrapper'
      onMouseMove={move}
    >
      {imagesProps.map((image, i) => (
        <Image 
          key={i}
          src={image.src} 
          color={image.color} 
          alt={image.alt}
          setTitle={setTitle}
          setColor={setColor}
          hoveredOther={hovered}
          setHoveredOther={setHovered}
        />
      ))}
    </div>
  )
}
