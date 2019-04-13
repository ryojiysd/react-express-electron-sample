import React from 'react'
import ReactDOM from 'react-dom'
import request from 'superagent'

class Kuji extends React.Component {
  constructor(props) {
    super(props)
    this.state = { result: '' }
    this.api = this.api.bind(this)
  }

  api () {
    request.get('api/kuji').end((err, res) => {
      if (err) {
        console.log(err)
        return
      }
      const result = res.body.result
      this.setState({ result: result })
    })        
  }

  render () {
    return (
      <div>
        <p>{this.state.result}</p>
        <button onClick={ e => this.api() }>ひく</button>
     </div>
    )
  }
}

ReactDOM.render(
  <Kuji />,
  document.getElementById('root')
)
