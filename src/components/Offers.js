import { FunctionComponent } from "react";
import YellowLightning from "../assets/YellowLightning.svg";
import image4 from "../assets/image4.png";
import UniGhana from "../assets/UniGhana.png";
import BYU from "../assets/Byu.png";
import Image130 from "../assets/image130.png";
import Group_1370 from "../assets/Group_1370.svg";
import Group_Blue from "../assets/Group_1370_Blue1.svg";
import Dollar_logo from "../assets/Dollar_logo.svg";
import Sevis from "../assets/Sevis.png";
import Usvisa from "../assets/US_visa.png";
import wes from "../assets/wes.png";
import GooglePlay from "../assets/GooglePlayLogo.svg";
import AppleLogo from "../assets/AppleLogo.svg";
import Lightning_Filled from "../assets/Lightning_Filled.svg";
import styles from "./Offers.module.css";

const Offers: FunctionComponent = () => {
  return (
    <div className={styles.offers}>
      <div className={styles.desktop14}>
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.lightningFilledParent}>
              <img
                className={styles.lightningFilledIcon}
                alt=""
                src={Lightning_Filled}
              />
              <div className={styles.whatWeOffer}>what we offer</div>
            </div>
            <b className={styles.simplifiedPaymentsFor}>
              Simplified Payments for Your Relocation Dreams
            </b>
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.frameDiv}>
              <div className={styles.groupParent}>
                <img className={styles.frameChild} alt="" src={Group_1370} />
                <div className={styles.frameParent1}>
                  <img
                    className={styles.frameIcon}
                    alt=""
                    src={YellowLightning}
                  />
                  <div className={styles.superFastTuitionAndSchoolParent}>
                    <b className={styles.superFastTuitionContainer}>
                      <p className={styles.superFastTuition}>
                        Super fast tuition and
                      </p>
                      <p className={styles.superFastTuition}>
                        school fees payments
                      </p>
                    </b>
                    <div className={styles.seamlesslyPayLocal}>
                      Seamlessly pay local and international educational
                      expenses using our fast and convenient online payments
                      platform from the comfort of your home.
                    </div>
                  </div>
                </div>
                <div className={styles.frameParent2}>
                  <div className={styles.image4Parent}>
                    <img className={styles.image4Icon} alt="" src={image4} />
                    <img className={styles.image4Icon} alt="" src={UniGhana} />
                  </div>
                  <div className={styles.imageParent}>
                    <img className={styles.image130Icon} alt="" src={BYU} />
                    <img
                      className={styles.image130Icon}
                      alt=""
                      src={Image130}
                    />
                  </div>
                </div>
              </div>
              <div className={styles.groupContainer}>
                <img className={styles.frameItem} alt="" src={Group_Blue} />
                <div className={styles.frameParent1}>
                  <img className={styles.frameIcon} alt="" src={Dollar_logo} />
                  <div className={styles.superFastTuitionAndSchoolParent}>
                    <b
                      className={styles.superFastTuitionContainer}
                    >{`Pay for SEVIS, WES, Visa Applications & More`}</b>
                    <div className={styles.seamlesslyPayLocal}>
                      <p className={styles.superFastTuition}>
                        We help you get closer to your study abroad and
                      </p>
                      <p className={styles.superFastTuition}>
                        relocation goals faster by promptly completing
                      </p>
                      <p className={styles.superFastTuition}>
                        your payment orders for credential evaluation,
                      </p>
                      <p className={styles.superFastTuition}>
                        immigration, and visa purposes.
                      </p>
                    </div>
                  </div>
                </div>
                <div className={styles.frameParent4}>
                  <div className={styles.imageGroup}>
                    <img className={styles.imageIcon2} alt="" src={Sevis} />
                    <img className={styles.image3Icon} alt="" src={Usvisa} />
                  </div>
                  <img className={styles.imageIcon3} alt="" src={wes} />
                </div>
              </div>
            </div>
            <div className={styles.downloadAppParent}>
              <div className={styles.downloadApp}>Download app</div>
              <div className={styles.component1Parent}>
                <img
                  className={styles.component1Icon}
                  alt=""
                  src={GooglePlay}
                />
                <div className={styles.frameInner} />
                <img className={styles.component1Icon} alt="" src={AppleLogo} />
              </div>
            </div>
          </div>
          <img className={styles.groupIcon} alt="" src="Group 1370.svg" />
          <img className={styles.frameChild1} alt="" src={"Group 1371.svg"} />
        </div>
      </div>
    </div>
  );
};

export default Offers;
