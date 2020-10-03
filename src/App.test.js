import React from 'react';
import App from './App';
import userEvent from '@testing-library/user-event';
import Episodes from './components/Episodes';
import Dropdown from 'react-dropdown';
import {render, fireEvent, waitFor, screen} from '@testing-library/react';
import {fetchShow as mockFetchShow} from './api/fetchShow';

jest.mock("./api/fetchShow");

test('App collects the episodes and renders them to the screen', async () => {
    mockFetchShow.mockResolvedValueOnce(episodeData);
    render(<App />);
    const {getByText, findByText, getAllByTestId} = render(<Dropdown options={seasons}/>);
    userEvent.click(screen.getByText('Select...'));
    const season = getByText(/season 1/i)
    fireEvent.click(season);
    await findByText(/fetching data.../i)
    render(<Episodes episodes={episodeData.data._embedded.episodes} />)
    await waitFor(() => {
        expect(getAllByTestId(/episode/i)).toHaveLength(3)
    })
    
})

const seasons = ['Season 1', 'Season 2', 'Season 3', 'Season 4'];

const episodeData = { data: {
    "id": 5067,
    "url": "http://www.tvmaze.com/shows/5067/pinky-and-the-brain",
    "name": "Pinky and the Brain",
    "type": "Animation",
    "language": "English",
    "genres": [
    "Comedy",
    "Children"
    ],
    "status": "Ended",
    "runtime": 20,
    "premiered": "1995-09-09",
    "officialSite": null,
    "schedule": {
    "time": "",
    "days": [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday"
    ]
    },
    "rating": {
    "average": 7.7
    },
    "weight": 59,
    "network": {
    "id": 71,
    "name": "The WB",
    "country": {
    "name": "United States",
    "code": "US",
    "timezone": "America/New_York"
    }
    },
    "webChannel": null,
    "externals": {
    "tvrage": 987,
    "thetvdb": 72880,
    "imdb": "tt0112123"
    },
    "image": {
    "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/21/54340.jpg",
    "original": "http://static.tvmaze.com/uploads/images/original_untouched/21/54340.jpg"
    },
    "summary": "<p><i><b>\"Pinky and the Brain\"</b></i> are two genetically engineered lab mice living at Acme Labs. The Brain is a genius, while Pinky is somewhat insane. The two mice initiate creative and hilarious schemes for world domination, only to have them ultimately fail. However, with great persistence, they continue working each night to \"try to take over the world!\" Pinky and the Brain first appeared as supporting characters on Animaniacs, then becoming popular enough to get their own series. In the Fall of 1998, this series ended and a short lived spin off, Pinky, Elmyra &amp; the Brain, was created.</p>",
    "updated": 1589697255,
    "_links": {
    "self": {
    "href": "http://api.tvmaze.com/shows/5067"
    },
    "previousepisode": {
    "href": "http://api.tvmaze.com/episodes/315329"
    }
    },
    "_embedded": {
    "episodes": [
    {
    "id": 315235,
    "url": "http://www.tvmaze.com/episodes/315235/pinky-and-the-brain-1x01-das-mouse",
    "name": "Das Mouse",
    "season": 1,
    "number": 1,
    "airdate": "1995-09-09",
    "airtime": "",
    "airstamp": "1995-09-09T16:00:00+00:00",
    "runtime": 20,
    "image": null,
    "summary": "",
    "_links": {
    "self": {
    "href": "http://api.tvmaze.com/episodes/315235"
    }
    }
    },
    {
    "id": 315236,
    "url": "http://www.tvmaze.com/episodes/315236/pinky-and-the-brain-1x02-of-mouse-and-man",
    "name": "Of Mouse and Man",
    "season": 1,
    "number": 2,
    "airdate": "1995-09-10",
    "airtime": "",
    "airstamp": "1995-09-10T16:00:00+00:00",
    "runtime": 20,
    "image": null,
    "summary": "",
    "_links": {
    "self": {
    "href": "http://api.tvmaze.com/episodes/315236"
    }
    }
    },
    {
    "id": 315237,
    "url": "http://www.tvmaze.com/episodes/315237/pinky-and-the-brain-1x03-tokyo-growsthat-smartsbrainstem",
    "name": "Tokyo Grows/That Smarts/Brainstem",
    "season": 1,
    "number": 3,
    "airdate": "1995-09-17",
    "airtime": "",
    "airstamp": "1995-09-17T16:00:00+00:00",
    "runtime": 7,
    "image": null,
    "summary": "<p>3 shorts.</p>",
    "_links": {
    "self": {
    "href": "http://api.tvmaze.com/episodes/315237"
    }
    }
    }
]
}
}
}