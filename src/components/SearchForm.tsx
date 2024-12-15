import {  X } from 'lucide-react'
import React from 'react'
import './SearchForm.css'

const SearchForm = ({active , formOpen} : {
    active : boolean,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    formOpen : object | any
}) => {
  return (
    <div className={`search-form-wrap js-search-form-wrap ${active ? 'active' : ''}`}>
        <form className='search-form'>
            <input type="text" placeholder='Search' className='form-control' />
            <button className='btn js-search-close' onClick={formOpen}>
            <span><X/></span>
            </button>
        </form>
    </div>
  )
}

export default SearchForm