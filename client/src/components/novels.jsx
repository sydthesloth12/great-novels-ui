import React, { useState, useEffect } from 'react'
import NovelsList from './novelsList'
import NovelSearch from './novelSearch'
import axios from 'axios'
import './novels.css'


const Novels = () => {
const [searchTerm, setSearchTerm] = useState('')
  const [novelArray, setNovelsArray] = useState([])

  useEffect(() => {
    fetchNovel()
  }, [])

  const fetchNovel = async () => {
    let fetchedData = await axios.get('http://localhost:1337/api/novels')
    setNovelsArray(fetchedData.data)
  }

  return (
    <div className='page'>
      <div className='title'>Great Novels</div>
      <div className='subtitle'>
        Great Novels
      </div>
      <NovelSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <NovelsList novelArray={novelArray} searchTerm={searchTerm}/>
    </div>
  )
}

export default Novels