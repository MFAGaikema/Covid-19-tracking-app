import React, {useState, useEffect} from 'react'

import {NativeSelect, FormControl} from '@material-ui/core'

import styles from './Countries.module.css'

import {fetchCountries} from '../../api'

const Countries = ({submitHandler}) => {
  const [countryList, setCountryList] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCountries()

      setCountryList(data)
    }
    fetchData()
  }, [setCountryList])

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect default='' onChange={(e) => submitHandler(e.target.value)}>
        <option value=''>Global</option>
        {countryList.countries && countryList.countries.map((country, index) => <option key={index} value={country.name}>{country.name}</option>)}
        
      </NativeSelect>
    </FormControl>
  )
}

export default Countries
