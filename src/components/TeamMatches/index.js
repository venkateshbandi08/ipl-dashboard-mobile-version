import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'
import LatestMatch from '../LatestMatch/index'
import MatchCard from '../MatchCard/index'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

const backgroundColors = {
  RCB: ['#d91c1f', '#1e293b'],
  KKR: ['#5755a7', '#1e293b'],
  KXP: ['#a4261d', '#1e293b'],
  CSK: ['#f7db00', '#1e293b'],
  RR: ['#da237b', '#1e293b'],
  MI: ['#13418b', '#1e293b'],
  SH: ['#f26d22', '#1e293b'],
  DC: ['#4f5db0', '#1e293b'],
}

class TeamMatches extends Component {
  state = {
    allMatchDetails: {},
    isLoading: true,
  }

  componentDidMount() {
    this.getTeamMatchesDetails()
  }

  getTeamMatchesDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    try {
      const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      const data = await response.json()

      const teamMatchesDetailsFormattedData = {
        teamBannerUrl: data.team_banner_url,
        latestMatchDetails: {
          umpires: data.latest_match_details.umpires,
          result: data.latest_match_details.result,
          manOfTheMatch: data.latest_match_details.man_of_the_match,
          id: data.latest_match_details.id,
          date: data.latest_match_details.date,
          venue: data.latest_match_details.venue,
          competingTeam: data.latest_match_details.competing_team,
          competingTeamLogo: data.latest_match_details.competing_team_logo,
          firstInnings: data.latest_match_details.first_innings,
          secondInnings: data.latest_match_details.second_innings,
          matchStatus: data.latest_match_details.match_status,
        },
        recentMatches: data.recent_matches.map(recentMatch => ({
          umpires: recentMatch.umpires,
          result: recentMatch.result,
          manOfTheMatch: recentMatch.man_of_the_match,
          id: recentMatch.id,
          date: recentMatch.date,
          venue: recentMatch.venue,
          competingTeam: recentMatch.competing_team,
          competingTeamLogo: recentMatch.competing_team_logo,
          firstInnings: recentMatch.first_innings,
          secondInnings: recentMatch.second_innings,
          matchStatus: recentMatch.match_status,
        })),
      }

      this.setState({
        allMatchDetails: teamMatchesDetailsFormattedData,
        isLoading: false,
      })
    } catch (error) {
      console.error('Error fetching data:', error)
      this.setState({
        isLoading: false,
      })
    }
  }

  render() {
    const {allMatchDetails, isLoading} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches} = allMatchDetails

    const {match: routeMatch} = this.props // Renamed 'match' to 'routeMatch'
    const {params} = routeMatch
    const {id} = params
    const [color1, color2] = backgroundColors[id]

    const gradientStyle = {
      background: `linear-gradient(to bottom, ${color1}, ${color2})`,
    }

    return (
      <div className="team-matches-details-container" style={gradientStyle}>
        {isLoading ? (
          <div className="loader-spinner" data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} />
          </div>
        ) : (
          <div>
            <div className="team-banner-image-container">
              <img
                src={teamBannerUrl}
                className="team-banner-image"
                alt="Team banner"
              />
            </div>
            <LatestMatch latestMatchDetailsData={latestMatchDetails} />
            <ul className="recent-matches-container">
              {recentMatches.map(match => (
                <MatchCard recentMatchDetails={match} key={match.id} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
