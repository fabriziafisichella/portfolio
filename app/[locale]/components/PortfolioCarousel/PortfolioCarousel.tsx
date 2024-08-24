import { useRef } from "react";
import styles from "./portfoliocarousel.module.scss";
import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";
import { PortfolioCard } from "../PortfolioCard/PortfolioCard";
import { StaticImageData } from "next/image";

interface PortfolioData {
  content: Array<{
  id: number;
  name: string;
  date: string;
  tools: string;
  image: string | StaticImageData;
  preview: string;
  repository: string;
  description: string;
}>
}


export function PortfolioCarousel({ content }: PortfolioData) {
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = 320;
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={styles.carouselContainer}>
      {content.length >= 2 && (
        <div className={styles.carouselArrowsWrapper}>
          <FaCircleArrowLeft
            className={styles.carouselArrow}
            onClick={() => {
              scroll("left");
            }}
          />
          <FaCircleArrowRight
            className={styles.carouselArrow}
            onClick={() => {
              scroll("right");
            }}
          />
        </div>
      )}

      <div className={styles.container} ref={carouselRef}>
        {content.map((item, index) => (
          <div key={index}>
            <PortfolioCard info={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
