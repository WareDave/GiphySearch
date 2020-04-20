import React from 'react'

class Search extends React.Component {
    constructor() {
        super()

        this.state = {
            query: ''
        }
    }
    updateQuery = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = async(e) => {
        e.preventDefault();
        this.props.handleQuery(this.state.query)
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="query" value={this.state.query} onChange={this.updateQuery}></input>
                <input type="submit"></input>
            </form>
        )
    }
}

export default Search;