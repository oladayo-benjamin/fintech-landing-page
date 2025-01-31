import { FunctionComponent, useState } from "react";
import styles from "./Features.module.css";
import group1369 from "../assets/Group1369.svg";
import lightningFilledSvg from "../assets/LightningFilled.svg";
import frameSvg from "../assets/Frame.svg";
import barcodeScanSvg from "../assets/si_barcode_scan_duotone.svg";
import LightningGreen from "../assets/lightning_green.svg";
import Frame3 from "../assets/Frame_3.svg";

const Features: FunctionComponent = () => {
  // Track which download button was clicked
  const [clickedFeature, setClickedFeature] = useState(null);  // Use `null` instead of `string | null`

  const handleDownloadClick = (feature) => {
    setClickedFeature(feature);
    // You can perform additional actions here, like showing a modal or redirecting
    alert(`You clicked to download the app for ${feature}`);
  };

  return (
    <div className={styles.features}>
      <div className={styles.groupParent}>
        <img className={styles.frameChild} alt="" src={group1369} />
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.lightningFilledParent}>
              <img
                className={styles.lightningFilledIcon}
                alt=""
                src={lightningFilledSvg}
              />
              <div className={styles.fetatures}>Fetatures</div>
            </div>
            <b className={styles.whatTrulySets}>What Truly sets us apart</b>
          </div>
          <div className={styles.component23Parent}>
            <div className={styles.frameContainer}>
              <img className={styles.frameIcon} alt="" src={frameSvg} />
              <div className={styles.globalAccessibilityParent}>
                <b className={styles.globalAccessibility}>
                  Global Accessibility
                </b>
                <div className={styles.effortlesslySendTuition}>
                  Effortlessly send tuition and other payments to educational
                  institutions worldwide, no matter where you are.
                </div>
              </div>
              <div className={styles.downloadAppParent}>
                <div
                  className={styles.downloadApp}
                  onClick={() => handleDownloadClick("Global Accessibility")}
                >
                  Download app
                </div>
                <img
                  className={styles.sibarcodeScanDuotoneIcon}
                  alt=""
                  src={barcodeScanSvg}
                />
              </div>
            </div>
            <div className={styles.frameContainer}>
              <img className={styles.frameIcon} alt="" src={LightningGreen} />
              <div className={styles.globalAccessibilityParent}>
                <b
                  className={styles.globalAccessibility}
                >{`Fast & Reliable Transactions`}</b>
                <div className={styles.effortlesslySendTuition}>
                  Ensure your payments are processed quickly, helping you meet
                  important deadlines without stress.
                </div>
              </div>
              <div className={styles.downloadAppParent}>
                <div
                  className={styles.downloadApp}
                  onClick={() => handleDownloadClick("Fast & Reliable Transactions")}
                >
                  Download app
                </div>
                <img
                  className={styles.sibarcodeScanDuotoneIcon}
                  alt=""
                  src={barcodeScanSvg}
                />
              </div>
            </div>
            <div className={styles.frameContainer}>
              <img className={styles.frameIcon} alt="" src={Frame3} />
              <div className={styles.globalAccessibilityParent}>
                <b
                  className={styles.globalAccessibility}
                >{`Secure & Transparent`}</b>
                <div className={styles.effortlesslySendTuition}>
                  Enjoy peace of mind with secure payment processing and
                  complete transparency on fees and conversion rates.
                </div>
              </div>
              <div className={styles.downloadAppParent}>
                <div
                  className={styles.downloadApp}
                  onClick={() => handleDownloadClick("Secure & Transparent")}
                >
                  Download app
                </div>
                <img
                  className={styles.sibarcodeScanDuotoneIcon}
                  alt=""
                  src={barcodeScanSvg}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Display a message for the clicked feature */}
      {clickedFeature && (
        <div className={styles.messageBox}>
          You clicked the app download for: <strong>{clickedFeature}</strong>
        </div>
      )}
    </div>
  );
};

export default Features;
