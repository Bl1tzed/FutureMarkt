/* eslint-disable react/prop-types */
import styles from "@styles/Form.module.scss";
import tpg from "@styles/typography.module.scss";
import { useState } from "react";
import clsx from "clsx";

export default function Form({ setShowFinal }) {
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  function validationHandler() {
    if (phone && name && isChecked) {
      setShowFinal(true);
      localStorage.setItem("phone", phone);
      localStorage.setItem("name", name);
    }
  }

  return (
    <div className={styles.modalWindowWrapper}>
      <div className={clsx(styles.modalText, tpg.H2_Raleway)}>
        Закажите обратный звонок
      </div>
      <div className={styles.inputsBox}>
        <input
          placeholder="Имя"
          className={clsx(styles.inputField, tpg.T3_Montserrat)}
          type="text"
          onBlur={(e) => setName(e.target.value)}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="Телефон"
          className={clsx(styles.inputField, tpg.T3_Montserrat)}
          type="phone"
          onBlur={(e) => setPhone(e.target.value)}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <div className={styles.personalInfo}>
        <label className={styles.personalInfoConfirmBox}>
          <input
            className={styles.personalInfoCheckbox}
            type="checkbox"
            onChange={() => setIsChecked(!isChecked)}
          />
          <span className={styles.personalInfoCheckmark} />
        </label>
        <div className={clsx(styles.personalInfoText, tpg.T3_Montserrat)}>
          Согласен на сохранение и обработку персональных данных
        </div>
      </div>
      <div
        role="button"
        onClick={() => validationHandler()}
        className={clsx(styles.modalButton, tpg.T1_Raleway)}
      >
        <div className={styles.modalButtonText}>Заказать обратный звонок</div>
        <div className={styles.modalButtonIcon}>
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
  );
}
