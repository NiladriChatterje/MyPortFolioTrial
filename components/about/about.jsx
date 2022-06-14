import { Text } from "@chakra-ui/react";
import {Fade} from 'react-reveal';

export default function About({styles}){

    return(
      <div className={styles.main} id='Abouts'>
          <Text fontWeight={600} fontFamily={'cursive'}
        fontSize={45}
        className={styles.description}>Get started!</Text>
        

        <div className={styles.grid}>
          <a rel="noreferrer" href="https://www.careerera.com/data-science/post-graduate-program-in-data-science?utm_source=google&utm_medium=cpc&utm_campaign=us&utm_term=pgp+data+science&gclid=Cj0KCQjwwJuVBhCAARIsAOPwGAQyDcUGFglJrENug5dGr5dhV0nffy07tAhhUkHeneiTVf7mj89L0m8aAob4EALw_wcB" className={styles.card}>
            <Fade left>
            <h2>Data Analyst &rarr;</h2>
            <p>Python based projects has been served</p>
            </Fade>
          </a>

          <a href="https://www.javatpoint.com/java-tutorial" rel="noreferrer" className={styles.card}>
          <Fade right>
            <h2>JAVA &rarr;</h2>
            <p>Started journey as a java developer since 2016</p>
            </Fade>
          </a>

          <a
           rel="noreferrer"
          href="https://www.coursera.org/professional-certificates/google-ux-design?utm_source=google&utm_medium=institutions&utm_campaign=coursera-in-dr-q22022-sem-skws-exa-txt-course-5-uxdesign-others&gclid=Cj0KCQjwwJuVBhCAARIsAOPwGATFB9iRmaIOzdxZmvch_MqR4qkBcNtlLYbq3-8H3Shdbtj5njFi__caAkUoEALw_wcB&gclsrc=aw.ds"
            className={styles.card}
          >
            <Fade left>
            <h2>UI/UX &rarr;</h2>
            <p>Designed a lot of web based projects as a beginnner to advance level</p>
            </Fade>
          </a>

          <a
          rel="noreferrer"
          href="https://money.usnews.com/careers/best-jobs/web-developer"
            className={styles.card}
          >
            <Fade right>
            <h2>Web Developer &rarr;</h2>
            <p>
              Knowledge of serving as a full stack developer
            </p>
            </Fade>
          </a>
        </div>
      </div>
  );
}