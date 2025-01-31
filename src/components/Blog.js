import { FunctionComponent, useState } from "react";
import Lightning_Filled from "../assets/Lightning_Filled.svg";
import Frame107 from "../assets/Frame_107.png";
import Frame108 from "../assets/Frame108.png";
import Frame109 from "../assets/Frame109.png";
import RightArrow from "../assets/rightarrow.png";
import ArrowLeft from "../assets/arrow-left.svg";
import ArrowRight from "../assets/arrow-right.svg";
import styles from "./Blog.module.css";

const Blog: FunctionComponent = () => {
  // State to keep track of the current active image index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array of images to cycle through
  const images = [Frame107, Frame108, Frame109];
  const titles = [
    "How to Navigate International Payments for Education With Ease",
    "Importance of getting Insurance before traveling",
    "Overcoming Challenges in Foreign Currency Tuition Payments",
  ];

  // Function to go to the next image
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to go to the previous image
  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className={styles.blog}>
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.frameGroup}>
            <div className={styles.lightningFilledParent}>
              <img
                className={styles.lightningFilledIcon}
                alt=""
                src={Lightning_Filled}
              />
              <div className={styles.blog1}>Blog</div>
            </div>
            <b className={styles.latestBlog}>{`Latest Blog & Resources`}</b>
          </div>
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.frameDiv}>
            {/* Loop over images and display all images, highlight currentIndex */}
            {images.map((image, index) => (
              <div
                key={index}
                className={`${styles.frameParent1} ${
                  index === currentIndex ? styles.activeImage : ""
                }`}
              >
                <img className={styles.frameChild} alt="" src={image} />
                <div className={styles.frameParent2}>
                  <div className={styles.heading4KnowingWhichCoveWrapper}>
                    <b className={styles.heading4}>{titles[index]}</b>
                  </div>
                  <div className={styles.arrowRight02SharpWrapper}>
                    <img
                      className={styles.arrowRight02SharpIcon}
                      alt=""
                      src={RightArrow}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation arrows */}
          <div className={styles.frameParent7}>
            <div className={styles.arrowLeftWrapper} onClick={prevImage}>
              <img className={styles.arrowLeftIcon} alt="" src={ArrowLeft} />
            </div>
            <div className={styles.arrowLeftWrapper} onClick={nextImage}>
              <img className={styles.arrowLeftIcon} alt="" src={ArrowRight} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
