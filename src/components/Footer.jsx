import React from 'react';
import { Container, Grid, Typography } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  typography: {
    color: 'white',
    marginTop: '1rem'
  },

  icon: {
    marginRight: '.3rem'
  },
  container: {
    padding: '1.5rem'
  },
  header: {
    color: 'whitesmoke'
  }
});

const Footer = () => {
  const classes = useStyles();
  return (
    <Container
      style={{
        width: '80vw',
        borderTop: '2px solid orange',
        marginTop: '2.5rem'
      }}
    >
      <Grid
        className={classes.container}
        container
        spacing={10}
        direction='row'
      >
        <Grid item xs={12} sm={6}>
          <Typography variant='subtitle1' className={classes.header}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            tenetur, nulla doloribus hic consequatur suscipit eius tempore unde
            dicta sunt. <br /> <br /> <br /> Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Veritatis culpa, excepturi doloribus
            placeat minima voluptatibus.
          </Typography>
        </Grid>
        <Grid item container xs={12} sm={6} direction='column'>
          <Grid item>
            <Typography variant='h5' className={classes.header}>
              Keep In Touch
            </Typography>
          </Grid>
          <Grid item>
            <Typography className={classes.typography}>
              <LocationOnIcon className={classes.icon} /> Address : Lorem ipsum
              dolor sit amet.
            </Typography>
          </Grid>
          <Grid item>
            <Typography className={classes.typography}>
              <PhoneIcon className={classes.icon} /> phone : 09383130658
            </Typography>
          </Grid>
          <Grid item>
            <Typography className={classes.typography}>
              <EmailIcon className={classes.icon} /> email : arshia_nazarlotfi1376@yahoo.com
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Footer;
