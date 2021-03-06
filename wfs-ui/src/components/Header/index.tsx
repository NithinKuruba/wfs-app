import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import HeaderStyles from 'components/Header/styles/Header'

const Header: React.FC = () => {
  const classes = HeaderStyles()

  return (
    <AppBar className={classes.appBar}>
      <Toolbar className={classes.toolBar}>
        <Typography variant="h6" className={classes.title}>
          Find Community Health Service Area
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header
