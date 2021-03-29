import { Button, Link, TextField } from '@material-ui/core'
import { getCommunityHealthServiceArea } from 'api/community-health-service-area/GetCommunityHealthServiceArea'
import { FeatureCollection } from 'api/model/model'
import React, { useState, MouseEvent } from 'react'
import { CHSA_IMAP_LINK } from 'utils/constants'
import LaunchIcon from '@material-ui/icons/Launch'

const HomePage: React.FC = () => {
  const [latitude, setLatitude] = useState<string>('')
  const [longitude, setLongitude] = useState<string>('')
  const [error, seterror] = useState<string>('')
  const [chsa, setChsa] = useState('')

  const onSubmit = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    await getCommunityHealthServiceArea({ lat: latitude, lng: longitude })
      .then((res: FeatureCollection) => {
        if (res.numberReturned < 1) {
          seterror(
            'Entered Latitude/Longitude location not found in BC. Please enter valid location co-ordinates.'
          )
        }
        res.features.map((feature) => {
          setChsa(feature.properties.CMNTY_HLTH_SERV_AREA_NAME)
        })
      })
      .catch((err) => {
        seterror(err)
      })
  }
  return (
    <div>
      <div>
        <div>
          <TextField
            required
            id="standard-required"
            label="Latitude"
            onChange={(val) => setLatitude(val.target.value)}
            value={latitude}
            type="number"
          />
          <TextField
            required
            id="standard-required"
            label="Longitude"
            onChange={(val) => setLongitude(val.target.value)}
            value={longitude}
            type="number"
          />
        </div>
        <div>
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
        </div>
        <div>
          <Button
            variant="contained"
            color="primary"
            onClick={onSubmit}
            disabled={!latitude || !longitude}
          >
            Submit
          </Button>
        </div>
      </div>
      {chsa && <div>Community Health Service Area: {chsa}</div>}
      {error && <div>{error}</div>}
    </div>
  )
}

export default HomePage
