import { FunctionComponent, useState } from "react";
import lightningFilledSvg from "../assets/LightningFilled.svg";
import GridLayer from "../assets/Grid_layers-v3.svg";
import GoogleLogo from "../assets/Google_logo_Black.svg";
import AppleLogo from "../assets/Apple_logo_black.svg";
import PlayCircle from "../assets/play-circle.svg";
import Ellipse376 from "../assets/Ellipse_376.png";
import Ellipse377 from "../assets/Ellipse_377.png";
import Ellipse378 from "../assets/Ellipse_378.png";
import Ellipse379 from "../assets/Ellipse_379.png";
import Webp1 from "../assets/1.webp.png";
import Webp2 from "../assets/2.webp.png";
import Webp3 from "../assets/3.webp.png";
import Webp4 from "../assets/4.webp.png";
import Webp5 from "../assets/5.webp.png";
import Webp6 from "../assets/6.webp.png";
import Pay4meLogo from "../assets/pay4me_logo2.svg";
import Group_1000003531 from "../assets/Group_1000003531.png";
import Line1 from "../assets/Line_1.svg";
import Dollar from "../assets/dollar-01.svg";
import Eye from "../assets/Eye.svg";
import Add from "../assets/add.svg";
import Export from "../assets/export.svg";
import Image9 from "../assets/image_9.png";
import StarSolid from "../assets/star-solid.svg";
import Image134 from "../assets/image_134.png";
import styles from "./Hero.module.css";

const Hero: FunctionComponent = () => {
  const [showBalance, setShowBalance] = useState(false);
  const [walletBalance, setWalletBalance] = useState(22850.0);

  const toggleBalanceVisibility = () => {
    setShowBalance(!showBalance);
  };

  const fundWallet = () => {
    setWalletBalance(walletBalance + 500);
  };

  const withdrawMoney = () => {
    setWalletBalance(walletBalance - 200);
  };

  return (
    <div className={styles.hero}>
      <img className={styles.gridLayersV3} src={GridLayer} />
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.lightningFilledParent}>
            <img className={styles.lightningFilledIcon} src={lightningFilledSvg} />
            <div className={styles.secureGlobalFast}>Secure. Global. fast</div>
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.reliablePaymentSolutionsForParent}>
              <b className={styles.reliablePaymentSolutions}>
                Reliable Payment Solutions for International Education
              </b>
              <div className={styles.theEasiestAnd}>
                The easiest and fastest way to pay tuition and fees to
                educational institutions, businesses, and government agencies
                worldwide.
              </div>
            </div>
            <div className={styles.frameDiv}>
              <div className={styles.downloadAppParent}>
                <div className={styles.downloadApp}>Download app</div>
                <div className={styles.component1Parent}>
                  <img className={styles.component1Icon} src={GoogleLogo} />
                  <div className={styles.frameChild} />
                  <img className={styles.component1Icon} src={AppleLogo} />
                </div>
              </div>
              <div className={styles.watchDemoParent}>
                <div className={styles.downloadApp}>Watch Demo</div>
                <img className={styles.playCircleIcon} src={PlayCircle} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
