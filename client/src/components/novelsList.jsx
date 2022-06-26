import React from 'react'

const NovelsList = (props) => {
    const { novelArray, searchTerm } = props

    return (
      <ul>
        {novelArray
          .filter((novel) => {
            return novel.title.toLowerCase().includes(searchTerm.toLowerCase())
          })
          .map((novel) => {
            return <li>{novel.title}</li>
          })}
      </ul>
    )
  }

  export default NovelsList
  