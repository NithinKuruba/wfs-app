export interface RequestCHSA {
  lat: string
  lng: string
}

export interface CHSAMetaData {
  HLTH_CHSA_SYSID: number
  CMNTY_HLTH_SERV_AREA_CODE: string
  CMNTY_HLTH_SERV_AREA_NAME: string
  OBJECTID: number
}

export interface Feature {
  type: string
  id: string
  geometry: string
  properties: CHSAMetaData
}

export interface FeatureCollection {
  features: Feature[]
  numberMatched: number
  numberReturned: number
  timestamp: string
  type: string
  crs: string
}
