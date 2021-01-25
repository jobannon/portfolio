import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import FeaturedPost from './FeaturedPost';
import jobSearch from '../assets/jobSearch.jpg';
import jobPhoto from '../assets/jobPhoto.jpg';
import dogPartnersPhoto from '../assets/dogPartners.jpg';
import seekingHumanKindPhoto from '../assets/seekingKindnessPhoto.jpg';
import dryerPhoto from '../assets/dryerPhoto.jpg'

export default function Blog() {
  return (
    <>
      <CssBaseline />
      <Grid container direction="column" justify="center" alignItems="center" spacing={5}>
        <Grid item xs={12}>
          <FeaturedPost
            title="Rediscovering My Technically Oriented Mind "
            date="Coming Soon..."
            description="While fixing the dryer with my Dad, E.Eng"
            disabled
            image={dryerPhoto}
          />
        </Grid>
        <Grid item xs={12}>
          <FeaturedPost
            title="On The Job Search - Time And Mentality"
            date="01/23/2021"
            description="Finding your passion while avoiding the 'Rona"
            image={jobSearch}
          />
        </Grid>
        <Grid item xs={12}>
          <FeaturedPost
            title="On Completing My Paid Fellowship"
            date="10/23/2020"
            description="Lessons learned while working for Bang Equals Development"
            image={jobPhoto}
          />
        </Grid>
        <Grid item xs={12}>
          <FeaturedPost
            title="Working Well With Other"
            date="01/15/2020"
            description=""
            image={dogPartnersPhoto}
          />
        </Grid>
        <Grid item xs={12}>
          <FeaturedPost
            title="On Empathy"
            date="01/15/2020"
            description=""
            image={seekingHumanKindPhoto}
          />
        </Grid>
      </Grid>
    </>
  );
}
