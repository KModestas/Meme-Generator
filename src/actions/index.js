export const RECIEVE_MEMES = 'RECIEVE_MEMES';

function recieveMemes(json) {
  const { memes } = json.data;

  return {
    type: RECIEVE_MEMES,
    memes
  };
}

const fetchMemesJson =()=> {
  return fetch('https://ap.imgflip.com/get_memesf')
    .then(res => res.json());
};


export function fetchMemes() {
  return function(dispatch) {
    return fetchMemesJson()
      .then(json => dispatch(recieveMemes(json)));
  };
}
