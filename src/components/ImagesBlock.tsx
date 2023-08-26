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
  {src: './public/Frame 40.png', alt: 'work', color: colorDarkest},
  {src: './public/Frame 41.png', alt: 'normal', color: colorLightest},
  {src: './public/Frame 42.png', alt: 'sad', color: colorLighter},
  {src: './public/Frame 43.png', alt: 'hehe', color: colorDarker},
  {src: './public/Frame 44.png', alt: 'clown', color: colorLight},
  {src: './public/Frame 45.png', alt: 'what', color: colorDarkest},
  {src: './public/Frame 46.png', alt: 'little_sad', color: colorLighter},
  {src: './public/Frame 47.png', alt: 'anger', color: colorDarkest},
  {src: './public/Frame 55.png', alt: 'nice', color: colorDarker},
  {src: './public/Frame 62.png', alt: 'fck_you', color: colorDarkest},
  {src: './public/Frame 40.png', alt: 'work', color: colorLight},
  {src: './public/Frame 41.png', alt: 'normal', color: colorLightest},
  {src: './public/Frame 42.png', alt: 'sad', color: colorDarker},
  {src: './public/Frame 43.png', alt: 'hehe', color: colorDarkest},
  {src: './public/Frame 44.png', alt: 'clown', color: colorLight},
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
