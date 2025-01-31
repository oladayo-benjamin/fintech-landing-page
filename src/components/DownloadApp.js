import { FunctionComponent } from "react";
import Group1369 from "../assets/Group1369.svg";
import AppleLogo from "../assets/Applelogowhite.svg";
import GoogleLogo from "../assets/Googlelogowhite.svg";
import BarCode from "../assets/bar_code.png";
import styles from "./DownloadApp.module.css";

const DownloadApp: FunctionComponent = () => {
  // Function to handle the click for the Apple download link
  const handleAppleDownload = () => {
    window.open("https://apps.apple.com/us/app/pay4me", "_blank"); // Example link
  };

  // Function to handle the click for the Google Play download link
  const handleGoogleDownload = () => {
    window.open(
      "https://play.google.com/store/apps/details?id=com.pay4me",
      "_blank"
    ); // Example link
  };

  // Function to handle the QR code click
  const handleQRCodeClick = () => {
    alert("Scan the QR code to download the app on your phone!");
  };

  return (
    <div className={styles.downloadApp}>
      <div className={styles.groupParent}>
        <img className={styles.frameChild} alt="" src={Group1369} />
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.downloadThePay4meAppTodayParent}>
              <b className={styles.downloadThePay4me}>
                Download the Pay4Me App Today!
              </b>
              <div className={styles.ourCustomQrContainer}>
                <p className={styles.ourCustomQr}>
                  Our custom QR code will take you to your app store
                </p>
                <p className={styles.ourCustomQr}>
                  to download our awesome native apps
                </p>
              </div>
            </div>
            <div className={styles.linkParent}>
              <div className={styles.link} onClick={handleAppleDownload}>
                <img className={styles.component2Icon} alt="" src={AppleLogo} />
                <div className={styles.downloadOnParent}>
                  <div className={styles.downloadOn}>Download on</div>
                  <div className={styles.appstore}>Appstore</div>
                </div>
              </div>
              <div className={styles.link} onClick={handleGoogleDownload}>
                <img
                  className={styles.component1Icon}
                  alt=""
                  src={GoogleLogo}
                />
                <div className={styles.downloadOnParent}>
                  <div className={styles.downloadOn}>Download on</div>
                  <div className={styles.playstore}>Playstore</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.pay4meQrcodeRoundedsvg}>
            <div className={styles.component6} onClick={handleQRCodeClick}>
              <img className={styles.component1Icon1} alt="" src={BarCode} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;
