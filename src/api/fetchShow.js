import axios from 'axios';

export const fetchShow = () => {
    return axios
    .get("https://api.tvmaze.com/singlesearch/shows?q=pinky-and-the-brain&embed=episodes"
        )
      .then(response =>{ 
        console.log(response)  
        return response}
        )
        .catch(error =>
            console.log(error)
        )

 }