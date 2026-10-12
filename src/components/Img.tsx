import { sized, srcSet } from "@/lib/unsplash";

type Props = {
  src: string;
  alt: string;
  /** Intrinsic aspect (height / width). Reserves space so there's no layout shift. */
  ratio?: number;
  width?: number;
  sizes?: string;
  priority?: boolean;
  className?: string;
  style?: React.CSSProperties;
  widths?: number[];
};

/**
 * Responsive, lazy-loaded image with an Unsplash-aware srcset.
 * Always renders width/height attributes to prevent CLS.
 */
export default function Img({
  src,
  alt,
  ratio = 0.75,
  width = 800,
  sizes = "100vw",
  priority = false,
  className = "",
  style,
  widths = [360, 540, 720, 960, 1280],
}: Props) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={sized(src, width, Math.round(width * ratio))}
      srcSet={srcSet(src, widths, ratio)}
      sizes={sizes}
      width={width}
      height={Math.round(width * ratio)}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      decoding={priority ? "sync" : "async"}
      fetchPriority={priority ? "high" : "auto"}
      className={className}
      style={style}
    />
  );
}
