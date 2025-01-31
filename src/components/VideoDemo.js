import { FunctionComponent, useState } from "react";
import VideoDemo from "../assets/VideoDemo.png";
import styles from "./VideoDemoImage.module.css";

const VideoDemoImage: FunctionComponent = () => {
  // State to control modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      {/* Video demo image */}
      <img
        className={styles.videoDemoIcon}
        alt="Video Demo"
        src={VideoDemo}
        onClick={openModal} // Open modal on image click
      />

      {/* Modal for playing the video */}
      {isModalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <span className={styles.closeButton} onClick={closeModal}>
              &times; {/* Close button */}
            </span>
            <video className={styles.videoPlayer} controls>
              <source
                src="your-video-url.mp4" // Replace with the actual video URL
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoDemoImage;
