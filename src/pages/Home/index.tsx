import { Button, TextField } from '@material-ui/core'
import { getCommunityHealthServiceArea } from 'api/community-health-service-area/GetCommunityHealthServiceArea'
import { FeatureCollection } from 'api/model/model'
import React, { useState } from 'react'

const HomePage: React.FC = () => {
  const [latitude, setLatitude] = useState<string>('')
  const [longitude, setLongitude] = useState<string>('')
  const [error, seterror] = useState<string>('')
  const [chsa, setChsa] = useState('')

  const onSubmit = async () => {
    await getCommunityHealthServiceArea({ lat: latitude, lng: longitude })
      .then((res: FeatureCollection) => {
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
        <Button
          variant="contained"
          color="primary"
          onClick={onSubmit}
          disabled={!latitude || !longitude}
        >
          Submit
        </Button>
      </div>
      {chsa && <div>Community Health Service Area: {chsa}</div>}
      {error && <div>Error</div>}
    </div>
  )
}

export default HomePage
