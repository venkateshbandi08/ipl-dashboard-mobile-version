import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'
import TeamCard from '../TeamCard/index'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class Home extends Component {
  state = {
    teamsData: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getTeamsData()
  }

  getTeamsData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    // console.log(response)
    const formattedData = data.teams.map(eachItem => ({
      name: eachItem.name,
      id: eachItem.id,
      teamImageUrl: eachItem.team_image_url,
    }))
    // console.log(formattedData)
    this.setState({
      teamsData: formattedData,
      isLoading: false,
    })
  }

  render() {
    const {teamsData, isLoading} = this.state
    return (
      <div className="ipl-home-page-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} />
          </div>
        ) : (
          <div className="ipl-dashboard-content-container">
            <div className="ipl-icon-and-heading-container">
              <div>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                  alt="ipl logo"
                  className="ipl-logo"
                />
              </div>
              <div>
                <h1 className="ipl-main-heading"> IPL Dashboard </h1>
              </div>
            </div>
            <ul className="ipl-team-cards-container">
              {teamsData.map(eachItem => (
                <TeamCard teamCardDetails={eachItem} key={eachItem.id} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default Home
