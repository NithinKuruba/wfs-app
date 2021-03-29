import { audit_api } from 'api/axios'
import { AUDIT_API_URL } from 'utils/constants'

export async function AddEntry(url_str: string): Promise<void> {
  const url = AUDIT_API_URL + '/track'
  await audit_api.post(url, { url: url_str })
}
