import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

const HeaderStyles = makeStyles((theme: Theme) =>
  createStyles({
    menuButton: {
      marginRight: 2,
    },
    title: {
      flexGrow: 1,
    },
    appBar: {
      height: '64px',
      zIndex: theme.zIndex.drawer + 1,
    },
    toolBar: {
      height: '64px',
    },
  })
)

export default HeaderStyles
