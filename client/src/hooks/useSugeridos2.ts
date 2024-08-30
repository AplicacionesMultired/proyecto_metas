import { useEffect, useState } from 'react'
import { getSugeridos2 } from '../services/getSugeridos'
import { User } from '../types/User'

export const useSugeridos2 = ({ zone, user }: {zone:string, user: User}) => {
  const { username, codigo } = user
  const [data2, setData2] = useState(null)
  const [error2, setError2] = useState(null)

  useEffect(() => {
    getSugeridos2({ codigo, username, zone })
      .then((response) => {
        setData2(response)
      })
      .catch((error) => {
        setError2(error.response.data.error || 'Error fetching data')
      })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { data2, error2 }
}
