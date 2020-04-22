import React, { useState, useEffect } from 'react'

import './styles.css'

const DevForm = ({ onSubmit }) => {
    const [github_username, setGithubUsername] = useState('')
    const [techs, setTechs] = useState('')
    const [latitude, setLatitude] = useState('')
    const [longitude, setLongitude] = useState('')

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords
            setLatitude(latitude)
            setLongitude(longitude)
          },
          (err) => {
            console.log('Error', err)
          },
          {
            timeout: 30000
          }
        )
    }, [])

    const handleSubmit = async (event) => {
        event.preventDefault()
        await onSubmit({
            github_username,
            techs,
            latitude,
            longitude
        })

        setGithubUsername('')
        setTechs('')
    }

    return(
        <>
            <strong>Register</strong>
            <form onSubmit={ handleSubmit }>
                <div className='input-block'>
                    <label htmlFor='github_username'>User Github</label>
                    <input
                    name='github_username'
                    id='github_username'
                    required
                    value={ github_username }
                    onChange={ event => setGithubUsername(event.target.value) }
                    />
                </div>
                <div className='input-block'>
                    <label htmlFor='techs'>Technologies</label>
                    <input
                    name='techs'
                    id='techs'
                    required
                    value={ techs }
                    onChange={ event => setTechs(event.target.value) }
                    />
                </div>
                <div className="input-group">
                    <div className='input-block'>
                    <label htmlFor='latitude'>Latitude</label>
                    <input
                        name='latitude'
                        id='latitude'
                        type='number'
                        required
                        value={ latitude }
                        onChange={ event => setLatitude(event.target.value) }
                    />
                    </div>
                    <div className='input-block'>
                    <label htmlFor='longitude'>Longitude</label>
                    <input
                        name='longitude'
                        id='longitude'
                        type='number'
                        required
                        value={ longitude }
                        onChange={ event => setLongitude(event.target.value) }
                    />
                    </div>
                </div>
                <button
                    type='submit'
                >
                    Save
                </button>
            </form>
        </>
    )
}

export default DevForm
