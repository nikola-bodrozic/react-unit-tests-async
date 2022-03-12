import React, { useState } from 'react'

function InputField({ showDiv }) {
  const [searchWord, setSearchWord] = useState('')
  return (
    <div>
      <input type="text" data-testid="searchBar" onChange={(e) => setSearchWord(e.target.value)} />
      {showDiv && (<div data-testid="displaySearch">{searchWord}</div>)}
    </div>
  )
}

export default InputField