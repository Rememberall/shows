import React, { Component } from 'react';

import TopBar from './TopBar';
import SeasonSelector from './SeasonSelector';
import SeasonOverview from './SeasonOverview';

const shows = [
  {
    title: 'Game of Thrones',
    description: 'Game of Thrones is an American fantasy drama television series created by David Benioff and D. B. Weiss. It is an adaptation of A Song of Ice and Fire, George R. R. Martin\'s series of fantasy novels, the first of which is titled A Game of Thrones. It is filmed at Titanic Studios in Belfast and on location elsewhere in Northern Ireland, as well as in Croatia, Iceland, Malta, Morocco, Spain, Scotland, and the United States.',
    coverImageUrl: 'https://i.ytimg.com/vi/7A0jgAbwGFE/maxresdefault.jpg',
    seasons: [
      {
        name: 'Season 1',
        year: 2011,
        episodes: [
          {
            title: 'Winter Is Coming',
            director: 'Tim Van Patten',
            description: 'Blah bleh blah',
            imageUrl: 'http://i.lv3.hbo.com/assets/images/series/game-of-thrones/episodes/1/1/winter-is-coming-03-1024.jpg',
          },
          {
            title: 'The Kingsroad',
            director: 'Tim Van Patten',
            description: 'Yadda yadda',
            imageUrl: 'https://oursideoftheuniverse.files.wordpress.com/2011/04/winter2.jpg',
          },
          {
            title: 'Lord Snow',
            director: 'Brian Kirk',
            description: 'Something something something',
            imageUrl: 'http://vignette1.wikia.nocookie.net/gameofthrones/images/4/45/Jon_and_Alliser_1x03.jpg/revision/latest?cb=20110517232529',
          },
        ],
      },
      {
        name: 'Season 2',
        year: 2012,
        episodes: [
          {
            title: 'The North Remembers',
            director: 'Alan Taylor',
            description: 'Whatever just put something here',
            imageUrl: 'https://i.ytimg.com/vi/e1k9E5KXDbM/maxresdefault.jpg',
          },
          {
            title: 'The Night Lands',
            director: 'Alan Taylor',
            description: 'I am completely out of ideas',
            imageUrl: 'http://i.lv3.hbo.com/assets/images/series/game-of-thrones/episodes/2/12/the-night-lands-1920.jpg',
          },
        ],
      },
    ],
  },
  {
    title: 'The Inbetweeners',
    description: 'The Inbetweeners is a British sitcom that originally aired on E4 from 2008 to 2010. Created and written by Damon Beesley and Iain Morris, the show followed the life of suburban teenager Will McKenzie (Simon Bird) and his three friends at the fictional Rudge Park Comprehensive. The episodes involved situations of school bullying, broken family life, indifferent school staff, male bonding, and largely failed sexual encounters.',
    coverImageUrl: 'https://upload.wikimedia.org/wikipedia/en/c/c0/The_Inbetweeners_cast.png',
    seasons: [
      {
        name: 'Series 1',
        year: 2008,
        episodes: [
          {
            title: 'First Day',
            director: 'unknown',
            description: 'First day at a public school for Will',
          },
          {
            title: 'Bunk Off',
            director: 'unknown',
            description: 'SIMON LOVES CARLI D\'AMATO',
          },
        ],
      },
    ],
  },
];

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      currentShowIndex: 0,
      currentSeasonIndex: 0,
      currentEpisodeIndex: 1,
    };
  }

  render() {
    const { currentShowIndex, currentSeasonIndex, currentEpisodeIndex } = this.state;

    const currentShow = shows[currentShowIndex];
    const currentSeason = currentShow.seasons[currentSeasonIndex];
    const currentEpisode = currentSeason.episodes[currentEpisodeIndex];

    return (
      <div>
        <TopBar titles={shows.map(show => show.title)}
          currentShow={currentShow}
          onSelectShow={selectedIndex => this.setState({
            currentShowIndex: selectedIndex,
            currentSeasonIndex: 0,
            currentEpisodeIndex: 0,
          })}/>
        <div className="container-fluid" style={{
          marginTop: 70
        }}>
          <div className="jumbotron"
            style={{
              backgroundImage: `url('${currentShow.coverImageUrl}')`,
              backgroundSize: '100%',
              backgroundPosition: 'center',
            }}>
            <p>{currentShow.description}</p>
          </div>
          <div style={{
            display: 'flex',
            flexDirection: 'row',
          }}>
            <SeasonSelector seasons={currentShow.seasons}
              currentSeasonIndex={currentSeasonIndex}
              onSelectSeason={selectedIndex => this.setState({
                currentSeasonIndex: selectedIndex,
                currentEpisodeIndex: 0,
              })}/>
            <div style={{width: 20}}></div>

            <div style={{

            }}>
              {currentShow.seasons.map((season, index) => (
                <SeasonOverview key={index}
                  {...season}
                  currentEpisode={index === currentSeasonIndex ? currentEpisode : null}
                  onSelectEpisode={selectedIndex => this.setState({
                    currentSeasonIndex: index,
                    currentEpisodeIndex: selectedIndex,
                  })}/>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
