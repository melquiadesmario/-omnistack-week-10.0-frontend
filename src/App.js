import React, { useState, useEffect } from 'react'

import './global.css'
import './App.css'
import './Sidebar.css'
import './Main.css'

const App = () => {
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

  return(
    <div id='app'>
      <aside>
        <strong>Register</strong>
        <form>
          <div className='input-block'>
            <label htmlFor='github_username'>User Github</label>
            <input
              name='github_username'
              id='github_username'
              required
            />
          </div>
          <div className='input-block'>
            <label htmlFor='techs'>Technologies</label>
            <input
              name='techs'
              id='techs'
              required
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
      </aside>
      <main>
        <ul>
          <li className='dev-item'>
            <header>
              <img src='https://avatars2.githubusercontent.com/u/24658474?s=460&u=3431e2a69457286717db18bbb6083ea3956337fa&v=4' alt='Melquíades Mário' />
              <div className='user-info'>
                <strong>Melquíades Mário</strong>
                <span>ReactJS, React Native, Node.js, MongoDB</span>
              </div>
            </header>
            <p>Developer and enthusiast of javascript technologies, such as Node.js, React JS, React Native and MongoDB.</p>
            <a href='https://github.com/melquiadesmario'>Access Github Profile</a>
          </li>
          <li className='dev-item'>
            <header>
              <img src='https://avatars2.githubusercontent.com/u/24658474?s=460&u=3431e2a69457286717db18bbb6083ea3956337fa&v=4' alt='Melquíades Mário' />
              <div className='user-info'>
                <strong>Melquíades Mário</strong>
                <span>ReactJS, React Native, Node.js, MongoDB</span>
              </div>
            </header>
            <p>Developer and enthusiast of javascript technologies, such as Node.js, React JS, React Native and MongoDB.</p>
            <a href='https://github.com/melquiadesmario'>Access Github Profile</a>
          </li>
          <li className='dev-item'>
            <header>
              <img src='https://avatars2.githubusercontent.com/u/24658474?s=460&u=3431e2a69457286717db18bbb6083ea3956337fa&v=4' alt='Melquíades Mário' />
              <div className='user-info'>
                <strong>Melquíades Mário</strong>
                <span>ReactJS, React Native, Node.js, MongoDB</span>
              </div>
            </header>
            <p>Developer and enthusiast of javascript technologies, such as Node.js, React JS, React Native and MongoDB.</p>
            <a href='https://github.com/melquiadesmario'>Access Github Profile</a>
          </li>
          <li className='dev-item'>
            <header>
              <img src='https://avatars2.githubusercontent.com/u/24658474?s=460&u=3431e2a69457286717db18bbb6083ea3956337fa&v=4' alt='Melquíades Mário' />
              <div className='user-info'>
                <strong>Melquíades Mário</strong>
                <span>ReactJS, React Native, Node.js, MongoDB</span>
              </div>
            </header>
            <p>Developer and enthusiast of javascript technologies, such as Node.js, React JS, React Native and MongoDB.</p>
            <a href='https://github.com/melquiadesmario'>Access Github Profile</a>
          </li>
        </ul>
      </main>
    </div>
  )
}

export default App
