import styles from "@styles/Final.module.scss";
import tpg from "@styles/typography.module.scss";
import clsx from "clsx";
export default function Final() {
  return (
    <>
      <div className={clsx(styles.finalWrapper)}>
        <div className={clsx(styles.finalMainText, tpg.H1_Raleway)}>
          Спасибо за заявку
        </div>
        <div className={clsx(styles.finalSubText, tpg.H1_Raleway)}>
          Я обязательно свяжусь с вами в ближайшее время.
        </div>
      </div>
      <div className={clsx(styles.finalLogo, tpg.T2_Montserrat)}>
        ALEX. SHEVTSOV
      </div>
    </>
  );
}
