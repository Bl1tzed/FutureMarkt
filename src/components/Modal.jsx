/* eslint-disable react/prop-types */
import styles from "@styles/Modal.module.scss";
import { CSSTransition } from "react-transition-group";
import { useRef, useState } from "react";
import clsx from "clsx";
import Form from "./Form";
import Final from "./Final";
export default function Modal({ isModalOpen, setIsModalOpen }) {
  const nodeRef = useRef(null);
  const [showFinal, setShowFinal] = useState(false);

  console.log(showFinal);

  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={isModalOpen}
      timeout={300}
      classNames={{
        enter: styles.modalEnter,
        enterActive: styles.modalEnterActive,
        enterDone: styles.modalEnterDone,
        exit: styles.modalExit,
        exitActive: styles.modalExitActive,
        exitDone: styles.modalExitDone,
      }}
    >
      <div className={clsx(styles.modal)} ref={nodeRef}>
        <div
          className={styles.modalBlurBackground}
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className={styles.modalWindow}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.modalCloseButton}
              onClick={() => setIsModalOpen(false)}
            >
              <img
                className={styles.modalCloseButtonImage}
                src="src/assets/close.svg"
                alt="Close"
              />
            </button>
            {!showFinal ? <Form setShowFinal={setShowFinal} /> : <Final />}
          </div>
        </div>
      </div>
    </CSSTransition>
  );
}
