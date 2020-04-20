import React from 'react'
import Search from '../Search'
import Results from '../Results'

class SearchContainer extends React.Component {
    constructor() {
        super()
        this.state = {
            giphys: []
        }
    }
    handleQuery = async(query) => {
        try {
            const giphy = await fetch(`http://api.giphy.com/v1/gifs/search?api_key=QjXFDP8q5BRdZP5o4pZwDjfv7g46b7ve&q=${query}`);
            const giphyJson = await giphy.json();
            this.setState({
              giphys: giphyJson
            })
          }catch(err){
            console.log(err)
            return err
          }   
    }
    render() {
        return (
            <div>
            <Search handleQuery={this.handleQuery}/>
            { this.state.giphys.data  ? <Results gifs={this.state.giphys}/>: null}
            </div>
        )
    }
}


export default SearchContainer;