import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry'
import { setSearchField, requestRobots } from '../actions';
import { connect } from 'react-redux';

const mapStateToProps = state => {
	return {
		searchField: state.searchRobots.searchField,
		robots: state.requestRobots.robots,
		ispending: state.requestRobots.ispending,
		error: state.requestRobots.error
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onSerachChange: (event) => dispatch(setSearchField(event.target.value)),
		onRequestRobots: () => dispatch(requestRobots())
	}	
}


class App extends Component {
	
	componentDidMount () {
		this.props.onRequestRobots();
	}

	render () {
		const { searchField, onSerachChange, robots, ispending } = this.props
		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchField.toLowerCase());
		});	
		return ispending ?
		<h1> Loading . . .</h1>  :
		(
			<div className = 'tc'>
				<h1 className='f1'>RoboFriends</h1>
				<SearchBox searchChange = {onSerachChange}/>
				<Scroll>
					<ErrorBoundry>
						<CardList robots = {filteredRobots} />
					</ErrorBoundry>
				</Scroll>
			</div>
		);
		
	}	
}
export default connect(mapStateToProps, mapDispatchToProps)(App);