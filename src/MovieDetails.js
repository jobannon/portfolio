import { Container } from "@material-ui/core"
import React, {Component} from "react"

class MovieDetails extends Component {
  constructor(props) {
      super(props)
      this.state = {
        details: []
      }
    fetch(`http://localhost:4000/api/v1/movies?i=${props.imdbId}`)
      .then(response => response.json())
      .then(data => {
            this.setState({
                loading: false,
                searchedMovies: data,
                hasSearched: true
            })
        })
}
  
  componentDidMount(props){
    const movie_thing = this.state.details
  }

  render(){
    var movie_array = this.state.details
    var cleanedDetails = movie_array.map((movie, i) =>{
    }
    )
    
    const movie_thing = this.state.details
    return (
      <Container>
        {this.state.details}
      </Container>
    )
  }
}

export default MovieDetails