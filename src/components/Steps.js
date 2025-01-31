import { FunctionComponent } from "react";
import lightningIcon from "../assets/LightningFilled.svg";
import component1Icon from "../assets/Component 1.svg";
import component1Icon2 from "../assets/Component 1.png";
import component1Icon3 from "../assets/Component 2.svg";
import Levels from "../assets/Levels.svg";
import logo from "../assets/logo_1.png";
import Bank from "../assets/bank.svg";
import Line110 from "../assets/Line110.svg";
import Frame8488 from "../assets/Frame_1000008488.svg";
import GooglePlay from "../assets/GooglePlayLogo.svg";
import Frame4 from "../assets/Frame4.svg";
import AppleLogo from "../assets/AppleLogo.svg";
import styles from "./Steps.module.css";

const Steps: FunctionComponent = () => {
  return (
    <div className={styles.steps}>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.lightningFilledParent}>
            <img
              className={styles.lightningFilledIcon}
              alt="Lightning icon"
              src={lightningIcon}
            />
            <div className={styles.howItWorks}>How it works</div>
          </div>
          <b className={styles.simpleStepsTo}>4 Simple Steps to Get Started</b>
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.frameDiv}>
            <div className={styles.frameParent1}>
              <div className={styles.frameParent2}>
                <div className={styles.parent}>
                  <div className={styles.div}>1.</div>
                  <div className={styles.downloadTheMobileAppParent}>
                    <b className={styles.downloadTheMobile}>
                      Download the Mobile App
                    </b>
                    <div className={styles.getStartedBy}>
                      Get started by downloading our mobile app, available on
                      iOS and Android.
                    </div>
                    <img
                      className={styles.component1Icon}
                      alt="Component 1"
                      src={component1Icon}
                    />
                  </div>
                </div>
                <div className={styles.pay4meQrcodeRoundedsvgWrapper}>
                  <div className={styles.pay4meQrcodeRoundedsvg}>
                    <div className={styles.component6}>
                      <img
                        className={styles.component1Icon1}
                        alt=""
                        src={component1Icon2}
                      />
                    </div>
                  </div>
                </div>
                <img
                  className={styles.component2Icon}
                  alt=""
                  src={component1Icon3}
                />
              </div>
              <div className={styles.frameParent3}>
                <div className={styles.group}>
                  <div className={styles.div}>2.</div>
                  <div className={styles.signUpOnTheAppParent}>
                    <b className={styles.signUpOn}>Sign up on the app.</b>
                    <div className={styles.signUpWith}>
                      Sign up with your details, verify your identity, and set
                      up your payment preferences.
                    </div>
                  </div>
                </div>
                <div className={styles.component18Wrapper}>
                  <div className={styles.component18}>
                    <div className={styles.statusBarIphoneParent}>
                      <div className={styles.statusBarIphone}>
                        <div className={styles.time}>
                          <div className={styles.time1}>9:41</div>
                        </div>
                        <img
                          className={styles.levelsIcon}
                          alt=""
                          src={Levels}
                        />
                        <div className={styles.frameParent4}>
                          <div className={styles.frameChild} />
                          <div className={styles.frameItem} />
                        </div>
                      </div>
                      <img
                        className={styles.component1Icon2}
                        alt=""
                        src={logo}
                      />
                      <div className={styles.signUpParent}>
                        <div className={styles.signUp}>Sign Up</div>
                        <div className={styles.frameParent5}>
                          <div className={styles.nameParent}>
                            <div className={styles.name}>Name</div>
                            <div className={styles.johDoeWrapper}>
                              <div className={styles.johDoe}>Joh Doe</div>
                            </div>
                          </div>
                          <div className={styles.nameParent}>
                            <div className={styles.name}>Email</div>
                            <div className={styles.johDoeWrapper}>
                              <div className={styles.johDoe}>
                                example@gmail.com
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameParent1}>
              <div className={styles.frameParent3}>
                <div className={styles.group}>
                  <div className={styles.div}>3.</div>
                  <div className={styles.signUpOnTheAppParent}>
                    <b className={styles.signUpOn}>Setup Payment Details</b>
                    <div className={styles.signUpWith}>
                      Securely link your local bank account or mobile wallet to
                      the Pay4me app.
                    </div>
                  </div>
                </div>
                <div className={styles.frameWrapper}>
                  <div className={styles.frameParent8}>
                    <div className={styles.vuesaxlinearbankWrapper}>
                      <img
                        className={styles.vuesaxlinearbankIcon}
                        alt=""
                        src={Bank}
                      />
                    </div>
                    <img className={styles.frameInner} alt="" src={Line110} />
                    <div className={styles.frameWrapper1}>
                      <img
                        className={styles.frameIcon}
                        alt=""
                        src={Frame8488}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frameParent3}>
                <div className={styles.group}>
                  <div className={styles.div}>4.</div>
                  <div className={styles.signUpOnTheAppParent}>
                    <b className={styles.signUpOn}>Complete Your Payment</b>
                    <div className={styles.signUpWith}>
                      Choose your preferred payment method and finalize the
                      transaction securely.
                    </div>
                  </div>
                </div>
                <img className={styles.frameChild1} alt="" src={Frame4} />
              </div>
            </div>
          </div>
          <div className={styles.downloadAppParent}>
            <div className={styles.downloadApp}>Download app</div>
            <div className={styles.component1Parent}>
              <img className={styles.component1Icon3} alt="" src={GooglePlay} />
              <div className={styles.lineDiv} />
              <img className={styles.component1Icon3} alt="" src={AppleLogo} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
