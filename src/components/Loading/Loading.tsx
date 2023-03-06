import './Loading.scss'
import React, { FC } from 'react'
import PulseLoader from 'react-spinners/PulseLoader'

export const Loading: FC = () => {
  const [loading, setLoading] = React.useState(false)

  React.useEffect(() => {
    setLoading(true)
  }, [])

  return (
    <div className="loading-wrapper">
      <section className="loading">
        <PulseLoader color="#6a796f" loading={loading} size={10} speedMultiplier={0.5} />
      </section>
    </div>
  )
}
