export const RECIEVE_MEMES = 'RECIEVE_MEMES';

function recieveMemes(json) {
  const { memes } = json.data;

  return {
    type: RECIEVE_MEMES,
    memes
  };
}

const fetchMemesJson =()=> {
  return fetch('')
    .then(res => res.json());
};
