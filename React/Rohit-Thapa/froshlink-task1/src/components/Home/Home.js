import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import useStyles from './styles';

import Photos from '../Photos/Photos';


const Home = () => {
  const classes= useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar id='toolbar' position="relative">
        <Toolbar style={{background: '#023e8a'}}>
          <Typography variant="h5" color="inherit" noWrap>
            FroshLink
          </Typography>
          <div className={classes.grow}></div>
          <a style={{textDecorationLine: 'none', color: 'white'}} href='#about'>
            <div className={ classes.navItem}>
              <Typography variant="h6">About</Typography>
            </div>
          </a> 
          
          <a style={{textDecorationLine: 'none', color: 'white'}} href='#contact'>
            <div className={ classes.navItem}>
              <Typography variant="h6">Contact</Typography>
            </div>
          </a>  
          
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              FroshLink
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Something short and leading about the collection below—its contents, the creator, etc.
              Make it short and sweet, but not too short so folks don&apos;t simply skip over it
              entirely.
            </Typography>
          </Container>
        </div>

        <Photos />
      </main>
      {/* Footer */}
     
      <div id='about'>
        <h1>About</h1>
      </div>

      <div id='contact'>
        <h1>Contact</h1>
      </div>

       <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Something here to give the footer a purpose!
        </Typography>
        {/* <Copyright /> */}
      </footer>
      {/* End footer */}

      <a href='#toolbar'>back to top</a>
    </React.Fragment>
  )
}

export default Home;
