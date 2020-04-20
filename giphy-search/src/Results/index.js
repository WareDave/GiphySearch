import React from 'react'

function Results(props) {
    const imgstyle = {
        'max-width': '300px',
        'max-height': '500px',
        'border': '4px solid pink'
    }
    const ulstyle = {
        'display': 'flex',
        'list-style': 'none',
        'flex-wrap': 'wrap',
        'flex-direction': 'column'
    }
    const gifList = props.gifs.data.map((gif) => {
        console.log(gif)
        return (
            <li>
                <img style={imgstyle} src={[gif.images.downsized_large.url]} alt="gifs"></img>
            </li>
           )
    })
    return (
            <div>
                <ul style={ulstyle}>
                    {gifList}
                </ul>
            </div>
        )
    }



export default Results;