import type { FC } from "react";

export type ImageCardProps = {
  src: string;
  alt: string;
  className?: string;
};
export const ImageCard: FC<ImageCardProps> = (img) => {
  return <img src={img.src} alt={img.alt} className={img.className} />;
};
