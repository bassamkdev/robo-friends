import React from 'react';

const SearchBox = ({searchChange}) => {
	return (
		<div className='pa3'>
			<input
			aria-label='search robots'
			className='pa3 ba b--green bg-lightest-blue'
			type='search'
			placeholder='search robot'
			onChange = {searchChange}
			/>
		</div>
	)
}
export default SearchBox;