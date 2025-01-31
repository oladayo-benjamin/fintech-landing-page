import { FunctionComponent } from "react";
import GoogleLogo from "../assets/Googlelogowhite.svg";
import Pay4me from "../assets/pay4me_logo.svg";
import Sms from "../assets/sms.svg";
import Iglogo from "../assets/iglogo.svg";
import Xicon from "../assets/xicon1.svg";
import FbIcon from "../assets/fbicon.svg";
import Tiktok from "../assets/tikicon.svg";
import Youtube from "../assets/youtube_icon1.svg";
import AppleLogoWhite from "../assets/Applelogowhite.svg";
import Group1370 from "../assets/Group_1370_blue.svg";
import styles from "./Footer.module.css";

const Footer: FunctionComponent = () => {
  // Function to handle social media icon clicks
  const handleSocialMediaClick = (platform: string) => {
    const socialMediaLinks: { [key: string]: string } = {
      instagram: "https://www.instagram.com",
      facebook: "https://www.facebook.com",
      tiktok: "https://www.tiktok.com",
      youtube: "https://www.youtube.com",
    };

    window.open(socialMediaLinks[platform], "_blank");
  };

  // Function to handle the Apple Store download link click
  const handleAppleDownload = () => {
    window.open("https://apps.apple.com/us/app/pay4me", "_blank"); // Replace with your app's actual link
  };

  // Function to handle the Google Play download link click
  const handleGoogleDownload = () => {
    window.open(
      "https://play.google.com/store/apps/details?id=com.pay4me",
      "_blank"
    ); // Replace with your app's actual link
  };

  return (
    <div className={styles.footer}>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <div className={styles.component1Parent}>
              <img className={styles.component1Icon} alt="" src={Pay4me} />
              <div className={styles.frameWrapper}>
                <div className={styles.frameDiv}>
                  <div className={styles.frameParent1}>
                    <div className={styles.smsWrapper}>
                      <img className={styles.smsIcon} alt="" src={Sms} />
                    </div>
                    <a
                      className={styles.supportpay4meapp}
                      href="mailto:support@pay4me.app"
                      target="_blank"
                    >
                      support@pay4me.app
                    </a>
                  </div>
                </div>
              </div>
              <div className={styles.frameParent2}>
                <img
                  className={styles.frameChild}
                  alt="Instagram"
                  src={Iglogo}
                  onClick={() => handleSocialMediaClick("instagram")}
                />
                <img
                  className={styles.frameChild}
                  alt="Twitter"
                  src={Xicon}
                  onClick={() => handleSocialMediaClick("twitter")}
                />
                <img
                  className={styles.frameChild}
                  alt="Facebook"
                  src={FbIcon}
                  onClick={() => handleSocialMediaClick("facebook")}
                />
                <img
                  className={styles.frameChild}
                  alt="TikTok"
                  src={Tiktok}
                  onClick={() => handleSocialMediaClick("tiktok")}
                />
                <img
                  className={styles.frameChild}
                  alt="YouTube"
                  src={Youtube}
                  onClick={() => handleSocialMediaClick("youtube")}
                />
              </div>
            </div>
            <div className={styles.companyParent}>
              <b className={styles.company}>Company</b>
              <div className={styles.aboutParent}>
                <div className={styles.about}>About</div>
                <div className={styles.about}>Blog</div>
                <div className={styles.about}>How it Works</div>
                <div className={styles.about}>Careers</div>
              </div>
            </div>
            <div className={styles.companyParent}>
              <b className={styles.company}>Resources</b>
              <div className={styles.aboutParent}>
                <div className={styles.about}>Android Reviews</div>
                <div className={styles.about}>iOS Reviews</div>
                <div className={styles.about}>Testimonials</div>
                <div className={styles.about}>FAQs</div>
              </div>
            </div>
            <div className={styles.companyParent}>
              <b className={styles.legal}>Legal</b>
              <div className={styles.aboutParent}>
                <div className={styles.about}>Terms of Service</div>
                <div className={styles.about}>Privacy Policy</div>
                <div className={styles.about}>KYC/AML Policy</div>
              </div>
            </div>
            <div className={styles.frameParent3}>
              <div className={styles.linkParent}>
                <div className={styles.link} onClick={handleAppleDownload}>
                  <img
                    className={styles.component2Icon}
                    alt="Apple App Store"
                    src={AppleLogoWhite}
                  />
                  <div className={styles.downloadOnParent}>
                    <div className={styles.downloadOn}>Download on</div>
                    <div className={styles.appstore}>Appstore</div>
                  </div>
                </div>
                <div className={styles.link} onClick={handleGoogleDownload}>
                  <img
                    className={styles.component1Icon1}
                    alt="Google Play"
                    src={GoogleLogo}
                  />
                  <div className={styles.downloadOnParent}>
                    <div className={styles.downloadOn}>Download on</div>
                    <div className={styles.playstore}>Playstore</div>
                  </div>
                </div>
              </div>
              <div className={styles.dependingOnYour}>
                Depending on your mobile device, download our awesome native app
                to start enjoying all the benefits of pay4Me.
              </div>
            </div>
          </div>
          <div className={styles.lineParent}>
            <div className={styles.lineDiv} />
            <div className={styles.pay4meIncWrapper}>
              <div className={styles.pay4meInc}>© 2020 - 2024 Pay4Me, Inc.</div>
            </div>
            <div className={styles.lineDiv} />
          </div>
        </div>
        <div className={styles.pay4meIsAFinancialTechnoloParent}>
          <div className={styles.pay4meIsA}>
            Pay4Me is a financial technology company making it easier for
            international students and immigrants to pay their tuition and fees
            in minutes. We offer our products and services in partnership with
            licensed transmitters and banking partners in their respective
            jurisdictions. All trademarks, logos, and brand names are the
            property of their respective owners. All company, product, and
            service names used on this website are for identification purposes
            only. Use of these names, trademarks, and brands does not imply
            endorsement.
          </div>
          <img className={styles.groupChild} alt="" src={Group1370} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
