import {React, memo} from 'react';
import SkillItem from './SkillItem';
import html from '../assets/img/html.png';
import css from '../assets/img/css.png';
import js from '../assets/img/js.png';
import react from '../assets/img/react.png';
import node from '../assets/img/node.png';
import cs from '../assets/img/cs.png';
import php from '../assets/img/php.png';
import mysql from '../assets/img/mysql.png';
import mongodb from '../assets/img/mongodb.png';
import python from '../assets/img/python.png';
import powerbi from '../assets/img/powerbi.png';
import ps from '../assets/img/ps.png';
import ai from '../assets/img/ai.png';
import figma from '../assets/img/figma.png';
import blender from '../assets/img/blender.png';
import 'react-multi-carousel/lib/styles.css';

export const Skills = memo(() => {
  const skillsData = [
    { imgSrc: html, altText: 'HTML', skillName: 'HTML', fillPercentage: 100, level: 'Avançado' },
    { imgSrc: css, altText: 'CSS', skillName: 'CSS', fillPercentage: 100, level: 'Avançado' },
    { imgSrc: js, altText: 'JavaScript', skillName: 'JAVASCRIPT', fillPercentage: 95, level: 'Avançado' },
    { imgSrc: react, altText: 'React JS', skillName: 'REACT JS', fillPercentage: 90, level: 'Avançado' },
    { imgSrc: node, altText: 'Node Js', skillName: 'NODE JS', fillPercentage: 85, level: 'Avançado' },
    { imgSrc: cs, altText: 'C#', skillName: 'C#', fillPercentage: 60, level: 'Intermediário' },
    { imgSrc: php, altText: 'PHP', skillName: 'PHP', fillPercentage: 40, level: 'Intermediário' },
    { imgSrc: python, altText: 'python', skillName: 'PYTHON', fillPercentage: 50, level: 'Intermediário' },
    { imgSrc: mysql, altText: 'mysql', skillName: 'MYSQL', fillPercentage: 75, level: 'Bom' },
    { imgSrc: mongodb, altText: 'mongodb', skillName: 'MONGODB', fillPercentage: 75, level: 'Bom' },
    { imgSrc: powerbi, altText: 'powerbi', skillName: 'POWER BI', fillPercentage: 90, level: 'Avançado' },
    { imgSrc: ps, altText: 'Photoshop', skillName: 'PHOTOSHOP', fillPercentage: 90, level: 'Avançado' },
    /* { imgSrc: ai, altText: 'Illustrator', skillName: 'ILLUSTRATOR', fillPercentage: 70, level: 'Bom' },
    { imgSrc: figma, altText: 'Figma', skillName: 'FIGMA', fillPercentage: 80, level: 'Avançado' },
    { imgSrc: blender, altText: 'blender', skillName: 'BLENDER', fillPercentage: 40, level: 'Intermediário' }, */
  ];

  return (
    <section className="skill z-20" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx p-0 sm:py-10 sm:px-12" id="skills_ref">
              <h2>Habilidades</h2>
              <div className="skill-holder grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4">
                {skillsData.map((skill, index) => (
                  <SkillItem
                    key={index}
                    {...skill}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="custom-shape-divider-bottom-1688672085">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            class="shape-fill"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            class="shape-fill"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
    </section>
  );
});