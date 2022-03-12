import React, { useState } from 'react'

function InputField({ showDiv }) {
  const [searchWord, setSearchWord] = useState('')
  return (
    <div>
      <input type="text" data-testid="searchBar" onChange={(e) => setSearchWord(e.target.value)} />
      <h1 data-testid="displaySearch">{searchWord}</h1>
      {showDiv && (<div data-testid="divWeWantToShow">ini</div>)}
    </div>
  )
}

export default InputField