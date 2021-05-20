import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  grow : {
    flexGrow: 1
  },
  navItem:{
    padding: theme.spacing(1),
    marginRight: theme.spacing(3),
    color: 'white',
    '&:hover': {
            color: '#e63946'
          }
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));