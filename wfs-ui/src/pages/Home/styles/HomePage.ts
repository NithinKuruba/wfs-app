import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

const HomePageStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexFlow: '1',
    },
    paper: {
      marginTop: theme.spacing(10),
      flexFlow: '1',
    },
    form: {
      marginLeft: theme.spacing(1),
    },
    error: {
      color: 'red',
    },
  })
)

export default HomePageStyles
