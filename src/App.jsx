import styles from "@styles/App.module.scss";
import tpg from "@styles/typography.module.scss";
import Header from "@components/Header.jsx";
import Modal from "@components/Modal.jsx";
import clsx from "clsx";
import { useEffect, useState } from "react";

function App() {
  const [value, setValue] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://www.cbr-xml-daily.ru/daily_json.js"
      );
      const data = await response.json();
      setValue(Math.round(data.Valute.GBP.Value));
    };

    fetchData();
  }, []);

  let sumOfDate = 0;
  const today = new Date();

  const date =
    today.getDate().toString() +
    today.getMonth().toString() +
    today.getFullYear().toString();
  for (let i = 0; i < date.length; i++) {
    sumOfDate += Number(date[i]);
  }

  return (
    <div className={styles.background}>
      <div className={styles.contentWrapper}>
        <Header />
        <main>
          <div className={styles.hero}>
            <div className={clsx(styles.heroHeader, tpg.H1_Raleway)}>
              СОЗДАЮ УСЛОВИЯ ДЛЯ ВАШЕГО УСПЕХА
            </div>
            <div
              className={clsx(
                styles.heroSubHeader,
                tpg.T2_Raleway,
                styles.backline
              )}
              data-text="Когда ваше время и энергия лучше сфокусированы, стремление к новым
              возможностям становится реальностью, ваш успех зависит от ваших
              действий"
            >
              <span>Ваш успех зависит от ваших действий</span>
            </div>
            <div className={styles.buttons}>
              <div
                role="button"
                onClick={() => setIsModalOpen(!isModalOpen)}
                className={clsx(styles.buttonSignUp, tpg.T1_Raleway)}
              >
                <div
                  className={styles.buttonText}
                  data-text="Записаться на консультацию"
                >
                  <span>Записаться</span>
                </div>
                <div className={styles.buttonIcon}>
                  <img
                    className={styles.buttonIconImageMobile}
                    src="/src/assets/ArrowBlackMobile.svg"
                    alt="Arrow"
                  />
                  <img
                    className={styles.buttonIconImageDesktop}
                    src="/src/assets/ArrowBlackDesktop.svg"
                    alt="Arrow"
                  />
                </div>
              </div>
              <div
                role="button"
                onClick={() => setIsModalOpen(!isModalOpen)}
                className={clsx(styles.buttonOrder, tpg.T1_Raleway)}
              >
                <div
                  className={styles.buttonText}
                  data-text="Бесплатная консультация"
                >
                  <span>Заказать звонок</span>
                </div>
                <div className={styles.buttonIcon}>
                  <img
                    className={styles.buttonIconImageMobile}
                    src="/src/assets/ArrowWhiteMobile.svg"
                    alt="Arrow"
                  />
                  <img
                    className={styles.buttonIconImageDesktop}
                    src="/src/assets/ArrowWhiteDesktop.svg"
                    alt="Arrow"
                  />
                </div>
              </div>
            </div>
            <div className={styles.stats}>
              <div className={clsx(styles.statTecniques, styles.backline)}>
                <div className={clsx(styles.statNumber, tpg.T1_Montserrat)}>
                  {sumOfDate + 1}+
                </div>
                <div
                  className={clsx(styles.statText, tpg.T2_Raleway)}
                  data-text="техник для достижения целей"
                >
                  <span>техники</span>
                </div>
              </div>
              <div className={clsx(styles.statProductivity, styles.backline)}>
                <div className={clsx(styles.statNumber, tpg.T1_Montserrat)}>
                  {value}%
                </div>
                <div
                  className={clsx(styles.statText, tpg.T2_Raleway)}
                  data-text="увеличение личной продуктивности"
                >
                  <span>продуктивности</span>
                </div>
              </div>
            </div>
            <img
              src="/src/assets/mentor.png"
              alt="mentor"
              className={styles.heroImage}
            />
          </div>
        </main>
        <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      </div>
    </div>
  );
}

export default App;
