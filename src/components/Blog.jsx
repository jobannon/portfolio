import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Lottie from 'react-lottie';
import FeaturedPost from './FeaturedPost';
import jobSearch from '../assets/jobSearch.jpg';
import jobPhoto from '../assets/jobPhoto.jpg';
import dogPartnersPhoto from '../assets/dogPartners.jpg';
import seekingHumanKindPhoto from '../assets/seekingKindnessPhoto.jpg';
import dryerPhoto from '../assets/dryerPhoto.jpg';
import markedPost from '../posts/2020-01-15-On The Job Search.md';
import BlogPost from './BlogPost';
import Typography from '@material-ui/core/Typography'

import constructionData from '../lotties/constructionData.json';

export default function Blog() {
  const withLink = (href, mdData) => <Link href={href} target="#" style={{ display: 'flex' }}><BlogPost markedPost={mdData} /></Link>;
  const goToPost = (postData) => {
    <Link to="/post">
      <BlogPost markedPost={postData} />
    </Link>;
  };
  const defaultOptionsReturn = (nameOf) => ({
    loop: true,
    autoplay: true,
    animationData: nameOf,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  });
  return (
    <>
      <CssBaseline />
      <Grid container direction="column" justify="center" alignItems="center" spacing={5}>

        <Grid item xs={12}>
          <Typography>
            Under construction - posts can be found
          </Typography>
          <Box component="div" style={{ display: 'flex', justifyContent: 'center' }}>
            <Button
              href="https://joshcodes.dev/posts"
              target="#"
              variant="contained"
              color="primary"
            >
              Here
            </Button>
          </Box>
          <Lottie
            options={defaultOptionsReturn(constructionData)}
            height={150}
            width={150}
          />

        </Grid>
        <Grid item xs={12}>
          <Link to="/Post" href="/Post" target="#">
            <Button> Test</Button>
            <FeaturedPost
              title="It's In The Jeans"
              date="Coming Soon..."
              description="Reflecting on the origins of my technical enthusiasm while fixing the dryer with my Dad, E.Eng"
              disabled
              markedPost={markedPost}
              image={dryerPhoto}
              onClick={withLink('/post', markedPost)}
            />
          </Link>
        </Grid>
        <Grid item xs={12}>
          <FeaturedPost
            title="On The Job Search - Time And Mentality"
            date="01/23/2021"
            description="Finding your passion while avoiding the 'Rona"
            markedPost={markedPost}
            image={jobSearch}
          />
        </Grid>
        <Grid item xs={12}>
          <FeaturedPost
            title="On Completing My Paid Fellowship"
            date="10/23/2020"
            description="Lessons learned while working for Bang Equals Development"
            markedPost={markedPost}
            image={jobPhoto}
          />
        </Grid>
        <Grid item xs={12}>
          <FeaturedPost
            title="Working Well With Other"
            date="01/15/2020"
            description=""
            markedPost={markedPost}
            image={dogPartnersPhoto}
          />
        </Grid>
        <Grid item xs={12}>
          <FeaturedPost
            title="On Empathy"
            date="01/15/2020"
            description=""
            markedPost={markedPost}
            image={seekingHumanKindPhoto}
          />
        </Grid>
      </Grid>
    </>
  );
}
