import type { FC } from "react";

export type ImageCardProps = {
  src: string;
  alt: string;
};
export const ImageCard: FC<ImageCardProps> = (img) => {
  return <img src={img.src} alt={img.alt} />;
};
