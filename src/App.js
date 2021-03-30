import styles from './App.module.css'
import React, {useEffect, useState} from 'react'

import { Cards, Chart, Countries } from './components'

import {fetchData} from './api'

import CovidImage from './images/image.png'

const App = () => {
  const [data, setData] = useState({})
  const [country, setCountry] = useState('')

  useEffect(() => {
    const callFetchData = async () => {
      setData(await fetchData())
    }
    callFetchData()

  }, [setData])

  const submitHandler = async (country) => {
    const pickedCountry = await fetchData(country)

    setCountry(country)

    setData(pickedCountry)
  }

	return (
		<div className={styles.container}>
      <img className={styles.image} src={CovidImage} alt='covid-19-logo'/>
			<Cards data={data} country={country}/>
			<Countries submitHandler={submitHandler}/>
			<Chart data={data} country={country}/>
		</div>
	)
}

export default App
