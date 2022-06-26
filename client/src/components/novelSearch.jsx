import React from 'react'

const NovelSearch = (props) => {
    const { searchTerm, setSearchTerm } = props

    return (
        <div>
            <input
                type="text"
                name="search"
                value={searchTerm}
                onChange={(event) => { setSearchTerm(event.target.value) }}
            />
        </div>
    )
}

export default NovelSearch