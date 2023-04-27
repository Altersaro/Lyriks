import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { DetailsHeader, Error, Loader, RelatedSongs } from '../components';

import { setActiveSong, playPause } from '../redux/features/playerSlice';
import { useGetSongDetailsQuery } from '../redux/services/shazam';

const SongDetails = () => {
  const dispatch = useDispatch();
  const { songid } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data: songData, isFetching: isFetchingSongDetails, error } = useGetSongDetailsQuery({ songid });

  console.log(songData);

  if (isFetchingSongDetails) return <Loader title="Searching song details..." />;

  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <DetailsHeader
        artistId=""
        songData={songData}
      />

      <div className="mb-10">
        <h2 className="text-white text-3xl font-bold mt-3"> Lyrics:</h2>
        <div className="mt-5">
          {songData?.sections[1].type === 'LYRICS'
            ? songData?.sections[1].text.map((line, i) => (
              <p>{line}</p>
            )) : <p>Sorry, no lyrics found!</p>}
        </div>
      </div>
      <RelatedSongs />
    </div>
  );
};

export default SongDetails;
