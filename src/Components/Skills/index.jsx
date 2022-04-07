import React from 'react';
import SkillsItems from '../SkillsItems';
import docker from '../../img/skills/docker-removebg-preview.png';
import skills from '../../img/skills/js-removebg-preview.png';
import laravel from '../../img/skills/laravel-removebg-preview.png';
import mysql from '../../img/skills/mysql-removebg-preview.png';
import nodejs from '../../img/skills/nodejs-removebg-preview.png';
import github from '../../img/skills/github-removebg-preview.png';
import reactimg from '../../img/skills/react-removebg-preview.png';
import reduximg from '../../img/skills/redux-removebg-preview.png';
import mongo from '../../img/skills/mongo-removebg-preview.png';

export default function index() {
  return (
    <section className="brand_area section_gap_bottom">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="row">
              <SkillsItems img={docker} />
              <SkillsItems img={skills} />
              <SkillsItems img={laravel} />
              <SkillsItems img={mysql} />
              <SkillsItems img={nodejs} />
              <SkillsItems img={github} />
              <SkillsItems img={reactimg} />
              <SkillsItems img={reduximg} />
              <SkillsItems img={mongo} />
            </div>
          </div>
          <div className="offset-lg-2 col-lg-4 col-md-6">
            <div className="client-info">
              <div className="d-flex mb-50">
                <span className="lage">5</span>
                <span className="smll">Years Experience Working</span>
              </div>
              <div className="call-now d-flex">
                <div>
                  <span className="fa fa-phone"></span>
                </div>
                <div className="ml-15">
                  <p>call us now</p>
                  <h3>(+237)697846892</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
