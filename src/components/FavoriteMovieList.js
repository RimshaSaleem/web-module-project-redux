import React from 'react';

import { Link } from 'react-router-dom';

import { connect } from 'react-redux'
import { removeFavorites } from './../actions/favoritesActions'


const FavoriteMovieList = (props) => {

   const handleRemoveFavorites = (id) => {
       props.removeFavorites(id)
   }
    
    return (<div className="col-xs savedContainer">
        <h5>Favorite Movies</h5>
        {
            props.favorites.map(movie=>{
                return <div key={movie.id}>
                    <Link className="btn btn-light savedButton" to={`/movies/${movie.id}`}>
                        {movie.title}
                        <span><span onClick={() => handleRemoveFavorites(movie.id)} class="material-icons">remove_circle</span></span>
                    </Link> 
                </div>
            })
        }
    </div>);
}

const mapStateToProps = (state) => {
    return {
        favorites: state.favorites.favorites
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeFavorites: (id) => dispatch(removeFavorites(id))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(FavoriteMovieList);