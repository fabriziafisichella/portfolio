import { useRef } from "react";
import styles from "./experiencecarousel.module.scss";
import { ExperienceCard } from "../ExperienceCard/ExperienceCard";
import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";

interface ExperienceData {
  content: Array<{
    company: string;
    position: string;
    date: string;
    description: string;
    projectPreview: boolean;
    projectLink: string;
    projectRepository: string;
    tools: string;
    show: boolean;
    id: number;
  }>
}

export function ExperienceCarousel({ content }: ExperienceData) {

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
              <ExperienceCard info={item} />
            </div>
          ))}
        </div>

    </div>
  );
}
