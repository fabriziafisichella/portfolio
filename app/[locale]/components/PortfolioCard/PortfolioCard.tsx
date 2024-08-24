import style from "./portfoliocard.module.scss";
import Image, { StaticImageData } from "next/image";

interface CardProps {
  info: {
    id: number;
    name: string;
    date: string;
    tools: string;
    image: string | StaticImageData;
    preview: string;
    repository: string;
    description: string;
  };
}

export function PortfolioCard({ info }: CardProps) {
  return (
    <div className={style.container}>

      {info.image && <Image src={info.image} fill={false} alt="website preview" />}

      <div className={style.company}>{info.name}</div>
      <div className={style.positionAndDate}>
        <p>
          <i>{info.date}</i>
        </p>
      </div>

      <div className={style.tools}>{info.tools}</div>

      <div className={style.description}>{info.description}</div>

      <div className={style.links}>
        <a href={info.preview}>preview</a> •
        <a href={info.repository}> repository</a>
      </div>
    </div>
  );
}
