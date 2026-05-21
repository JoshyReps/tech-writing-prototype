interface ImageProps {
  src: string;
  alt: string;
  bg?: boolean;
}

export default function Image({ src, alt, bg = false }: ImageProps) {
  const bacgkroundStyleTailwind = bg
    ? `p-5 bg-white rounded-full shadow-md shadow-black/20`
    : ``;

  return (
    <div className={`h-full w-full object-cover ${bacgkroundStyleTailwind}`}>
      <img src={src} alt={alt} className="block h-full w-full" />
    </div>
  );
}
