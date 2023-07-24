import React from 'react';
import FresherJob from './FresherJob';
import ExperiencedJobs from './ExperiencedJobs';
import ItCompany from './ItCompany';
import Banner from './Banner';
import Myprofile from './Myprofile';
import Toggle from './Toggle';

const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <Toggle></Toggle>
          <FresherJob></FresherJob>
          <ExperiencedJobs></ExperiencedJobs>
          <ItCompany></ItCompany>
          <Myprofile></Myprofile>
        </div>
    );
};

export default Home;