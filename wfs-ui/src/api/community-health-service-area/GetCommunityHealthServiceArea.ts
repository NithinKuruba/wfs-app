import { wfs_api } from 'api/axios'
import { FeatureCollection, RequestCHSA } from 'api/model/model'
import { REQUEST_TYPE_GET_FEATURE, RESPONSE_FORMAT } from 'utils/constants'

export async function getCommunityHealthServiceArea(
  inputs: RequestCHSA
): Promise<FeatureCollection> {
  const url =
    REQUEST_TYPE_GET_FEATURE +
    '&typeName=pub:WHSE_ADMIN_BOUNDARIES.BCHA_CMNTY_HEALTH_SERV_AREA_SP' +
    '&srsname=EPSG:4326&cql_filter=INTERSECTS(SHAPE,SRID=4326;POINT(' +
    inputs.lng +
    ' ' +
    inputs.lat +
    '))' +
    '&propertyName=CMNTY_HLTH_SERV_AREA_CODE,CMNTY_HLTH_SERV_AREA_NAME' +
    '&outputFormat=' +
    RESPONSE_FORMAT
  try {
    const { data } = await wfs_api.get<FeatureCollection>(url)
    return data
  } catch (error) {
    return error
  }
}
