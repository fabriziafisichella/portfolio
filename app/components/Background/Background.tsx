import style from "./background.module.scss";

export function Background() {
  return (
    <div className={style.lines}>
      <div className={style.line}></div>
      <div className={style.line}></div>
      <div className={style.line}></div>
    </div>
  );
}
