import { FunctionComponent } from "react";
import Lightning_Filled from "../assets/Lightning_Filled.svg";
import thumbnail1 from "../assets/thumbnail1.webp.png";
import thumbnail2 from "../assets/110285_1.png";
import thumbnail3 from "../assets/thumbnail3.webp.png";
import component27 from "../assets/Component_27.png";
import Frame_1707479070 from "../assets/Frame1707479070.svg";
import Group1371 from "../assets/Group_1371.svg";

import styles from "./Testimonials.module.css";

const Testimonials: FunctionComponent = () => {
  return (
    <div className={styles.testimonials}>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.frameWrapper}>
            <div className={styles.frameContainer}>
              <div className={styles.lightningFilledParent}>
                <img
                  className={styles.lightningFilledIcon}
                  alt=""
                  src={Lightning_Filled}
                />
                <div className={styles.testimonials1}>testimonials</div>
              </div>
              <b className={styles.dontTakeOur}>
                Don’t take our words for it, Take theirs.
              </b>
            </div>
          </div>
          <div className={styles.component25Parent}>
            <div className={styles.component25}>
              <img
                className={styles.thumbnail1webpIcon}
                alt=""
                src={thumbnail1}
              />
              <div className={styles.component25Inner}>
                <div className={styles.jimmyAdewaleParent}>
                  <div className={styles.jimmyAdewale}>Jimmy Adewale</div>
                  <div className={styles.entrepreneur}>Entrepreneur</div>
                </div>
              </div>
            </div>
            <div className={styles.component24}>
              <img className={styles.icon} alt="" src={thumbnail2} />
              <div className={styles.component25Inner}>
                <div className={styles.jimmyAdewaleParent}>
                  <div className={styles.jimmyAdewale}>Palmer Nicole</div>
                  <div className={styles.entrepreneur}>Phd Student</div>
                </div>
              </div>
            </div>
            <div className={styles.component26}>
              <img
                className={styles.thumbnail1webpIcon}
                alt=""
                src={thumbnail3}
              />
              <div className={styles.component25Inner}>
                <div className={styles.jimmyAdewaleParent}>
                  <div className={styles.jimmyAdewale}>Hannah Adams</div>
                  <div className={styles.entrepreneur}>Senior Therapist</div>
                </div>
              </div>
            </div>
            <div className={styles.component27}>
              <img
                className={styles.icon1}
                alt="thumbnail4"
                src={component27}
              />
              <div className={styles.component25Inner}>
                <div className={styles.jimmyAdewaleParent}>
                  <div className={styles.jimmyAdewale}>Lex Brown</div>
                  <div className={styles.entrepreneur}>Masters Student</div>
                </div>
              </div>
            </div>
            <img className={styles.frameChild} alt="" src={Frame_1707479070} />
          </div>
        </div>
        <img className={styles.frameItem} alt="" src={Group1371} />
      </div>
    </div>
  );
};

export default Testimonials;
