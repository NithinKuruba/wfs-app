import { Button, CssBaseline, Grid, Link, Paper, TextField } from '@material-ui/core'
import { getCommunityHealthServiceArea } from 'api/community-health-service-area/GetCommunityHealthServiceArea'
import { FeatureCollection } from 'api/model/model'
import React, { useState, MouseEvent } from 'react'
import { CHSA_IMAP_LINK } from 'utils/constants'
import LaunchIcon from '@material-ui/icons/Launch'
import HomePageStyles from './styles/HomePage'
import Header from 'components/Header'

const HomePage: React.FC = () => {
  const classes = HomePageStyles()
  const [latitude, setLatitude] = useState<string>('')
  const [longitude, setLongitude] = useState<string>('')
  const [error, setError] = useState<string>('')
  const [chsa, setChsa] = useState('')

  const onSubmit = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    await getCommunityHealthServiceArea({ lat: latitude, lng: longitude })
      .then((res: FeatureCollection) => {
        if (res.numberReturned < 1) {
          setError(
            'Entered Latitude/Longitude location is not found in BC. Please enter valid location co-ordinates. Click CHSA map link given below to find your location'
          )
          setChsa('')
        }
        res.features.map((feature) => {
          setChsa(feature.properties.CMNTY_HLTH_SERV_AREA_NAME)
          setError('')
        })
      })
      .catch((err) => {
        setError(err)
      })
  }

  const onReset = () => {
    setChsa('')
    setError('')
    setLatitude('')
    setLongitude('')
  }
  return (
    <div className={classes.root}>
      <div>
        <CssBaseline />
        <Header />
      </div>
      <div className={classes.paper}>
        <Paper elevation={3}>
          <div className={classes.form}>
            <Grid container direction="column" spacing={2}>
              {error && (
                <Grid item>
                  <div className={classes.error}>{error}</div>
                </Grid>
              )}
              <Grid item>
                <Grid container spacing={2}>
                  <Grid item>
                    <TextField
                      required
                      id="standard-required"
                      label="Latitude"
                      onChange={(val) => setLatitude(val.target.value)}
                      value={latitude}
                      type="number"
                    />
                  </Grid>
                  <Grid item>
                    <TextField
                      required
                      id="standard-required"
                      label="Longitude"
                      onChange={(val) => setLongitude(val.target.value)}
                      value={longitude}
                      type="number"
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Link
                  data-testid="launch-map-link"
                  id="launch-map-link"
                  href={CHSA_IMAP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="body2"
                >
                  <span>
                    Navigate to CHSA Map
                    <LaunchIcon fontSize="small" />
                  </span>
                </Link>
              </Grid>
              <Grid item>
                <Grid container spacing={2}>
                  <Grid item>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={onSubmit}
                      disabled={!latitude || !longitude}
                    >
                      Submit
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button variant="contained" color="secondary" onClick={onReset}>
                      Reset
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
              {chsa && (
                <Grid item>
                  <h3>Community Health Service Area: {chsa}</h3>
                </Grid>
              )}
            </Grid>
          </div>
        </Paper>
      </div>
    </div>
  )
}

export default HomePage
