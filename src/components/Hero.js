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

  // Toggle wallet balance visibility
  const toggleBalanceVisibility = () => {
    setShowBalance(!showBalance);
  };

  // Handle wallet funding
  const fundWallet = () => {
    setWalletBalance(walletBalance + 500); // Simulate adding $500
  };

  // Handle wallet withdrawal
  const withdrawMoney = () => {
    setWalletBalance(walletBalance - 200); // Simulate withdrawing $200
  };

  return (
    <div className={styles.hero}>
      <img className={styles.gridLayersV3} alt="logo" src={GridLayer} />
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.lightningFilledParent}>
            <img
              className={styles.lightningFilledIcon}
              alt="logo"
              src={lightningFilledSvg}
            />
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
                  <img
                    className={styles.component1Icon}
                    alt="Google logo"
                    src={GoogleLogo}
                  />
                  <div className={styles.frameChild} />
                  <img
                    className={styles.component1Icon}
                    alt="Apple logo"
                    src={AppleLogo}
                  />
                </div>
              </div>
              <div className={styles.watchDemoParent}>
                <div className={styles.downloadApp}>Watch Demo</div>
                <img
                  className={styles.playCircleIcon}
                  alt="Play circle"
                  src={PlayCircle}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameParent1}>
          <div className={styles.ellipseParent}>
            <img className={styles.frameItem} alt="logo" src={Ellipse376} />
            <img className={styles.frameInner} alt="logo" src={Ellipse377} />
            <img className={styles.frameInner} alt="logo" src={Ellipse378} />
            <img className={styles.frameInner} alt="logo" src={Ellipse379} />
          </div>
          <div className={styles.trustedBy3k}>
            Trusted by 3k+ Students Globally
          </div>
        </div>
      </div>
      <div className={styles.heroInner}>
        <div className={styles.leadingBrandsPartnerWithUsParent}>
          <div className={styles.leadingBrandsPartner}>
            Leading Brands Partner with us
          </div>
          <div className={styles.webpParent}>
            <img className={styles.webpIcon} alt="Brand 1" src={Webp1} />
            <img className={styles.webpIcon1} alt="Brand 2" src={Webp2} />
            <img className={styles.webpIcon} alt="Brand 3" src={Webp3} />
            <img className={styles.webpIcon3} alt="Brand 4" src={Webp4} />
            <img className={styles.webpIcon4} alt="Brand 5" src={Webp5} />
            <img className={styles.webpIcon5} alt="Brand 6" src={Webp6} />
          </div>
        </div>
      </div>
      <div className={styles.component1Group}>
        <img className={styles.component1Icon1} alt="logo" src={Pay4meLogo} />
        <div className={styles.frameParent2}>
          <div className={styles.homeParent}>
            <div className={styles.trustedBy3k}>Home</div>
            <img className={styles.lineIcon} alt="Line" src={Line1} />
          </div>
          <div className={styles.trustedBy3k}>About</div>
          <div className={styles.trustedBy3k}>Blog</div>
          <div className={styles.trustedBy3k}>Support</div>
        </div>
        <div className={styles.downloadAppGroup}>
          <div className={styles.downloadApp}>Download app</div>
          <div className={styles.component1Parent}>
            <img
              className={styles.component1Icon}
              alt="Google logo"
              src={GoogleLogo}
            />
            <div className={styles.frameChild} />
            <img
              className={styles.component1Icon}
              alt="Apple logo"
              src={AppleLogo}
            />
          </div>
        </div>
      </div>
      <div className={styles.component22}>
        <img
          className={styles.component22Child}
          alt="none"
          src={Group_1000003531}
        />
        <div className={styles.frameParent3}>
          <div className={styles.frameParent4}>
            <div className={styles.walletBalanceParent}>
              <div className={styles.walletBalance}>Wallet Balance</div>
              <div className={styles.parent}>
                <b className={styles.b}>
                  {showBalance ? `$ ${walletBalance.toFixed(2)}` : "*****"}
                </b>
                <img
                  className={styles.eyeIcon}
                  alt="Eye"
                  src={Eye}
                  onClick={toggleBalanceVisibility}
                />
              </div>
            </div>
            <div className={styles.dollar01Parent}>
              <img className={styles.dollar01Icon} alt="Dollar" src={Dollar} />
              <div className={styles.usd}>$USD</div>
            </div>
          </div>
          <div className={styles.frameParent5}>
            <div className={styles.frameParent6}>
              <div className={styles.addParent}>
                <img
                  className={styles.addIcon}
                  alt="Add"
                  src={Add}
                  onClick={fundWallet}
                />
                <div className={styles.walletBalance}>Fund Wallet</div>
              </div>
              <div className={styles.addParent}>
                <img
                  className={styles.addIcon}
                  alt="Export"
                  src={Export}
                  onClick={withdrawMoney}
                />
                <div className={styles.walletBalance}>Withdraw</div>
              </div>
            </div>
            <div className={styles.ellipseGroup}>
              <div className={styles.ellipseDiv} />
              <div className={styles.frameChild2} />
              <div className={styles.frameChild2} />
            </div>
          </div>
        </div>
        <div className={styles.image9Parent}>
          <img className={styles.image9Icon} alt="star" src={Image9} />
          <div className={styles.frameParent7}>
            <div className={styles.iconoirstarSolidParent}>
              <img
                className={styles.iconoirstarSolid}
                alt="Star"
                src={StarSolid}
              />
              <img
                className={styles.iconoirstarSolid}
                alt="Star"
                src={StarSolid}
              />
              <img
                className={styles.iconoirstarSolid}
                alt="Star"
                src={StarSolid}
              />
              <img
                className={styles.iconoirstarSolid}
                alt="Star"
                src={StarSolid}
              />
              <img
                className={styles.iconoirstarSolid}
                alt="Star"
                src={StarSolid}
              />
            </div>
            <div className={styles.starGoogleRating}>5 star Google rating</div>
          </div>
        </div>
        <div className={styles.image134Parent}>
          <img className={styles.image134Icon} alt="Techstars" src={Image134} />
          <div className={styles.backedByTechstarsWrapper}>
            <div className={styles.starGoogleRating}>
              <p className={styles.backedBy}>Backed by</p>
              <p className={styles.backedBy}>Techstars</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
