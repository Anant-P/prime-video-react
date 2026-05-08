// Write your code here
import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'

import {IoMdClose} from 'react-icons/io'

import './index.css'

const MovieItem = props => {
  const {movieDetails} = props
  const {thumbnailUrl, videoUrl} = movieDetails

  return (
    <Popup
      modal
      trigger={
        <li>
          <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-img" />
        </li>
      }
      className="popup-content"
    >
      {close => (
        <div className="popup-container-box">
          <div className="close-btn-container">
            <button
              data-testid="closeButton"
              type="button"
              onClick={() => close()}
            >
              <IoMdClose />
            </button>
          </div>
          <div className="react-player-container">
            <ReactPlayer url={videoUrl} controls />
          </div>
        </div>
      )}
    </Popup>
  )
}

export default MovieItem
