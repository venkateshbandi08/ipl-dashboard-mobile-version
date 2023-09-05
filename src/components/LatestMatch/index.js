import './index.css'

const LatestMatch = props => {
  const {latestMatchDetailsData} = props

  return (
    <div className="latest-match-details-container">
      <div>
        <p className="latest-matches-heading">Latest Matches</p>
      </div>
      <div className="latest-match-details-card">
        <div className="latest-match-details-card-top-section">
          <div className="left-content-container">
            <p className="competing-team-name">
              {latestMatchDetailsData.competingTeam}
            </p>
            <p className="date-of-match">{latestMatchDetailsData.date}</p>
            <p className="venue-of-match">{latestMatchDetailsData.venue}</p>
            <p className="result-of-match">{latestMatchDetailsData.result}</p>
          </div>
          <div className="competing-team-image-container">
            <img
              src={latestMatchDetailsData.competingTeamLogo}
              className="competing-team-logo"
              alt={`Latest match ${latestMatchDetailsData.competingTeam}`}
            />
          </div>
        </div>
        <hr size="2px" color="#475569" />
        <div className="latest-match-details-card-bottom-section">
          <p className="first-innings-heading">First Innings</p>
          <p className="first-innings-team-name">
            {latestMatchDetailsData.firstInnings}
          </p>
          <p className="second-innings-heading">Second Innings</p>
          <p className="second-innings-team-name">
            {latestMatchDetailsData.secondInnings}
          </p>
          <p className="man-of-the-match-heading">Man Of the Match</p>
          <p className="man-of-the-match-name">
            {latestMatchDetailsData.manOfTheMatch}
          </p>
          <p className="umpires-heading">umpires</p>
          <p className="umpires-names">{latestMatchDetailsData.umpires}</p>
        </div>
      </div>
    </div>
  )
}

export default LatestMatch
