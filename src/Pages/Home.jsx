
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";

function Home() {
    const [showAllImages, setShowAllImages]=useState(false);
    const [showFullStackImages, setShowFullStackImages] = useState(false);
    const [showDatascienceImages, setShowDatascienceImages] = useState(false);
    const [showCybersecurityImages, setShowCybersecurityImages] = useState(false);
    const [showCareerImages, setShowCareerImages] = useState(false);
    

    const handleAllClick = () => {
        setShowAllImages(!showAllImages); 
    };
   
    const handleFullStackClick = () => {
        setShowFullStackImages(!showFullStackImages); 
    };
    const handleDataScienceClick = () => {
        setShowDatascienceImages(!showDatascienceImages); 
    };
 
    const handleCybersecurityClick = () => {
        setShowCybersecurityImages(!showCybersecurityImages); 
    };
    const handleCareerClick = () => {
        setShowCareerImages(!showCareerImages); 
    };

    return (
        <div className={styles.container}>
            <h3 className={styles.title}>Welcome to the Course Portal</h3>
            
            <div className={styles.links}>
            <span className={styles.link} onClick={handleAllClick}>
                    All
             </span>
            <span className={styles.link} onClick={handleFullStackClick}>
                    FullStack Development
                </span>
                <span className={styles.link} onClick={handleDataScienceClick}>
                    Data Science
                </span>
                <span className={styles.link} onClick={handleCybersecurityClick}>
                  Cyber Security
                </span>
               
                <span className={styles.link} onClick={handleCareerClick}>
                  Career
                </span>
                
            </div>
            {showAllImages && (
                <div className={styles.imageContainer}>
                   
                    <img src="https://static.javatpoint.com/blog/images/how-to-be-a-full-stack-developer.png" alt="FullStack Image " className={styles.image} />
                    <img src="https://www.tcilitchandigarh.com/images/data-science.png" alt="Data science" className={styles.image} />
                    <img src="https://marcellotech.com/images/icons/internship/cybersecurity.jpg" alt="CyberSecurity" className={styles.image} />
                    <img src="https://www.shutterstock.com/image-vector/banner-career-concept-keywords-icons-260nw-607579616.jpg" alt="Career" className={styles.image} />
                </div>
            )}

            {showFullStackImages && (
                <div className={styles.imageContainer}>
                   
                    <img src="https://miro.medium.com/v2/resize:fit:1200/1*cljn28Re_2af3X9YWm4vGA.jpeg" alt="FullStack Image 1" className={styles.image} />
                    <img src="https://pmsquaresoft.com/wp-content/uploads/2023/06/Full-Stack-Development-1170x729.jpg" alt="FullStack Image 2" className={styles.image} />
                    <img src="https://www.dasinfomedia.com/wp-content/uploads/2023/03/Full-stack-Banner.png" alt="FullStack Image 3" className={styles.image} />
                </div>
            )}

           { showDatascienceImages&& (
                <div className={styles.imageContainer}>
                   
                    <img src="https://cdn.educba.com/academy/wp-content/uploads/2019/03/Understanding-Data-Science-1020x1024.png" alt="DataScience 1" className={styles.image} />
                    <img src="https://pharmacyinformaticsacademy.com/wp-content/uploads/2020/06/data-science-basics.png" alt="DataScience 2" className={styles.image} />
                    <img src="https://image.shutterstock.com/image-vector/data-science-banner-concept-has-260nw-2169958881.jpg" alt="DataScience 3" className={styles.image} />
                </div>
            )}

        { showCybersecurityImages&& (
                <div className={styles.imageContainer}>
                    
                    <img src="https://www.pngall.com/wp-content/uploads/4/Digital-Cyber-Security-PNG-Picture.png" alt="CyberSecuity 1" className={styles.image} />
                    <img src="https://img.freepik.com/free-vector/background-with-internet-security-elements_23-2147642059.jpg?size=338&ext=jpg" alt="CyberSecuity 2" className={styles.image} />
                    <img src="https://www.cyberstonesecurity.com/wp-content/uploads/2022/07/The-Benefits-of-Creating-an-Incident-Response-Plan-602a9fce11c0e-1000x1024.jpg" alt="CyberSecuity 3" className={styles.image} />
                </div>
            )}

        { showCareerImages&& (
                <div className={styles.imageContainer}>
                   
                    <img src="https://www.pngarts.com/files/1/Career-Transparent-Background-PNG.png" alt="Career 1" className={styles.image} />
                    <img src="https://www.resumes.net.au/wp-content/uploads/2020/07/Career-Map-scaled-1.jpg" alt="career 2" className={styles.image} />
                    <img src="https://png.pngtree.com/png-clipart/20221110/original/pngtree-career-picture-image_3634495.png" alt="Career 3" className={styles.image} />
                </div>
            )}
        </div>
    );
}

export default Home;
