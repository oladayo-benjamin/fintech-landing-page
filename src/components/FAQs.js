import { FunctionComponent, useState } from "react";
import Lightning_Filled from "../assets/Lightning_Filled.svg";
import Frame1707479082 from "../assets/Frame1707479082.png";
import Add from "../assets/add.svg";
import Minus from "../assets/minus.svg";
import styles from "./FAQs.module.css";

const FAQs: FunctionComponent = () => {
  const [openIndex, setOpenIndex] = useState(null);


  // Toggle function to open/close the FAQ
  const toggleFAQ = (index: number) => {
    // Log the toggle action for debugging
    console.log("Toggling FAQ:", index);
    setOpenIndex(openIndex === index ? null : index); // Toggle the open FAQ
  };

  return (
    <div className={styles.faqs}>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.lightningFilledParent}>
            <img
              className={styles.lightningFilledIcon}
              alt="Lightning Icon"
              src={Lightning_Filled}
            />
            <div className={styles.faqs1}>faqs</div>
          </div>
          <div className={styles.gotQuestionsParent}>
            <b className={styles.gotQuestions}>Got Questions?</b>
            <div className={styles.weveGotAnswers}>We’ve got answers</div>
          </div>
        </div>

        <div className={styles.frameContainer}>
          <img className={styles.frameChild} alt="" src={Frame1707479082} />
          <div className={styles.frameDiv}>
            {/* FAQ 1 */}
            <div className={styles.frameParent1} onClick={() => toggleFAQ(0)}>
              <div className={styles.whatIsThePay4meAppWrapper}>
                <b className={styles.whatIsThe}>What is the Pay4Me App?</b>
              </div>
              <img
                className={styles.addIcon}
                alt="Toggle Icon"
                src={openIndex === 0 ? Minus : Add} // Toggle between Add and Minus icons
              />
            </div>
            {/* Conditionally render the answer for FAQ 1 */}
            <div
              className={`${styles.answer} ${
                openIndex === 0 ? styles.open : ""
              }`}
            >
              This is where the answer for "What is the Pay4Me App?" goes.
            </div>

            <div className={styles.frameItem} />

            {/* FAQ 2 */}
            <div
              className={styles.whatIsThePaymentProcessingParent}
              onClick={() => toggleFAQ(1)}
            >
              <b className={styles.howDoesThe}>
                What is the payment processing timeline on the Pay4Me App?
              </b>
              <img
                className={styles.addIcon}
                alt="Toggle Icon"
                src={openIndex === 1 ? Minus : Add} // Toggle between Add and Minus icons
              />
            </div>
            {/* Conditionally render the answer for FAQ 2 */}
            <div
              className={`${styles.answer} ${
                openIndex === 1 ? styles.open : ""
              }`}
            >
              This is where the answer for "What is the payment processing
              timeline?" goes.
            </div>

            <div className={styles.frameItem} />

            {/* FAQ 3 */}
            <div
              className={styles.whatIsThePaymentProcessingParent}
              onClick={() => toggleFAQ(2)}
            >
              <b className={styles.howDoesThe}>How does the Pay4Me App work?</b>
              <img
                className={styles.addIcon}
                alt="Toggle Icon"
                src={openIndex === 2 ? Minus : Add} // Toggle between Add and Minus icons
              />
            </div>
            {/* Conditionally render the answer for FAQ 3 */}
            <div
              className={`${styles.answer} ${
                openIndex === 2 ? styles.open : ""
              }`}
            >
              This is where the answer for "How does the Pay4Me App work?" goes.
            </div>

            <div className={styles.frameItem} />

            {/* FAQ 4 */}
            <div
              className={styles.whatIsThePaymentProcessingParent}
              onClick={() => toggleFAQ(3)}
            >
              <b className={styles.howDoesThe}>
                How do I get started using the Pay4Me App?
              </b>
              <img
                className={styles.addIcon}
                alt="Toggle Icon"
                src={openIndex === 3 ? Minus : Add} // Toggle between Add and Minus icons
              />
            </div>
            {/* Conditionally render the answer for FAQ 4 */}
            <div
              className={`${styles.answer} ${
                openIndex === 3 ? styles.open : ""
              }`}
            >
              This is where the answer for "How do I get started using the
              Pay4Me App?" goes.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
