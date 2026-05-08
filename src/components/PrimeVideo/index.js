// Write your code here

import MoviesSlider from '../MoviesSlider'

import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props
  const actionMoviesList = moviesList.filter(
    eachItem => eachItem.categoryId === 'ACTION',
  )
  const comedyMoviesList = moviesList.filter(
    eachItem => eachItem.categoryId === 'COMEDY',
  )
  return (
    <>
      <div className="movies-container">
        <img
          className="prime-video-poster-img"
          src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
          alt="prime video"
        />
        <div className="movies-box">
          <h1> Action Movies</h1>
          <ul>
            <MoviesSlider movieList={actionMoviesList} />
          </ul>
          <h1> Comedy Movies</h1>
          <ul>
            <MoviesSlider movieList={comedyMoviesList} />
          </ul>
        </div>
      </div>
    </>
  )
}

export default PrimeVideo
