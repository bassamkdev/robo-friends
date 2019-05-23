import React from 'react';

const SearchBox = ({searchChange}) => {
	return (
		<div calssName='pa3'>
			<input 
			className='pa3 ba b--green bg-lightest-blue'
			type='search'
			placeholder='search robot'
			onChange = {searchChange}
			/>
		</div>
	)
}
export default SearchBox;