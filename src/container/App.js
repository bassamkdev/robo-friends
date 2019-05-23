import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry'

class App extends Component {
	constructor () {
		super()
		this.state = {
			robots: [],
			SearchField: ''
		}
	}
	componentDidMount () {
		fetch('https://jsonplaceholder.typicode.com/users').then(response =>response.json())
		.then(users => this.setState({robots: users}))
	}
	onSerachChange = (event) => {
		this.setState ({SearchField: event.target.value})
	}
	render () {
		const {robots, SearchField} = this.state
		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(SearchField.toLowerCase());
		});	
		return !robots.length ?
		<h1> Loading . . .</h1>  :
		(
			<div className = 'tc'>
				<h1 className='f1'>RoboFriends</h1>
				<SearchBox searchChange = {this.onSerachChange}/>
				<Scroll>
					<ErrorBoundry>
						<CardList robots = {filteredRobots} />
					</ErrorBoundry>
				</Scroll>
			</div>
		);
		
	}	
}
export default App;