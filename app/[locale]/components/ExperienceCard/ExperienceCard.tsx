import style from "./experiencecard.module.scss";

interface CardProps {
  info: {
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
  };
}

export function ExperienceCard({ info }: CardProps) {
  return (
    <div className={style.container}>
      <div className={style.company}>{info.company}</div>
      <div className={style.positionAndDate}>
        <p>
          <strong>{info.position}</strong>
        </p>
        <p>
          <i>{info.date}</i>
        </p>
      </div>

      <div className={style.tools}>{info.tools}</div>
      
      <div className={style.description}>{info.description}</div>
      {info.projectPreview === true && (
        <div className={style.links}>
          <a href={info.projectLink}>preview</a> •
          <a href={info.projectRepository}> repository</a>
        </div>
      )}
    </div>
  );
}
