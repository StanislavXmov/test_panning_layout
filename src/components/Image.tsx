import { useState } from "react";

interface ImageProps {
  src: string;
  color: string;
  alt: string;
  href?: string;
  setTitle: (value: string) => void;
  setColor: (value: string) => void;
  hoveredOther: boolean;
  setHoveredOther: (value: boolean) => void;
}

export const Image = (props: ImageProps) => {
  const {
    alt, 
    color, 
    src, 
    href = '#', 
    setTitle, 
    setColor,
    hoveredOther,
    setHoveredOther,
  } = props;
  const [hovered, setHovered] = useState(false);

  const enter = () => {
    setTitle(alt);
    setColor(color);
    setHovered(true);
    setHoveredOther(true);
  }

  const leave = () => {
    setTitle('xmov_emo');
    setColor('#9be22a');
    setHovered(false);
    setHoveredOther(false);
  }

  return (
    <a 
      href={href}
      onMouseEnter={enter}
      onMouseLeave={leave}
    >
      <img 
        className={`${hoveredOther ? 'notHoveredImg' : ''} ${hovered ? 'hoveredImg' : ''}`}
        src={src} 
        alt={alt}
      />
    </a>
  )
};
