import React, { Component } from 'react'
import axios from 'axios'


class Search extends Component {
    state = {
      query: '',
    }
   
    handleInputChange = () => {
        this.setState({
          query: this.search.value
        }, () => {
          if (this.state.query && this.state.query.length > 1) {
            if (this.state.query.length % 2 === 0) {
              this.getInfo()
            }
          } 
        })
      }

      getInfo = () => {
        axios.get(
            'http://api.giphy.com/v1/gifs/search?api_key=QjXFDP8q5BRdZP5o4pZwDjfv7g46b7ve&q='  + `${this.state.query}` 
                    )
          .then(({ data }) => {
            this.setState({
              results: data.data 
            })
          })
      }
      onSubmit = (e) => {
        this.getInfo()
          e.preventDefault()
      }
    
      
   
    render() {
      return (
          <div>
        <form>
          <input onSubmit={this.onSubmit}
            placeholder="Search for..."
            ref={input => this.search = input}
            onChange={this.handleInputChange}
          />
          <p>{this.state.query}</p>
        </form>
       </div>
      )
      }
   }
   
   export default Search
   