import styles from "@styles/Header.module.scss";
import tpg from "@styles/typography.module.scss";
import clsx from "clsx";

export default function Header() {
  const navNames = [
    "Обо мне",
    "Наставничество",
    "Мероприятия",
    "Кейсы",
    "Отзывы",
    "Контакты",
  ];

  return (
    <header className={styles.header}>
      <div className={clsx(styles.logo, tpg.T2_Montserrat)}>ALEX. SHEVTSOV</div>
      <nav className={clsx(styles.nav, tpg.T3_Montserrat)}>
        {navNames.map((name, index) => {
          return (
            <div key={name + index} className={styles.navName}>
              {name}
            </div>
          );
        })}
      </nav>
      <div className={styles.icons}>
        <img
          src="/src/assets/menu.svg"
          alt="Menu Icon"
          className={styles.menuIcon}
        />
        <img
          src="/src/assets/phone.svg"
          alt="Phone Icon"
          className={styles.phoneIcon}
        />
        <div className={clsx(styles.phoneNumber, tpg.T2_Montserrat)}>
          8-345-123-34-45
        </div>
      </div>
    </header>
  );
}
