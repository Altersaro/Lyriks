import { Link } from 'react-router-dom';

const DetailsHeader = ({ artistId, artistData, songData }) => {
  const artist = artistData?.data[0]?.attributes;

  console.log(artistData)

  return (
    <div className="relative w-full flex flex-col">
      <div className="w-full bg-gradient-to-r from-transparent to-red-300 sm:h-48 h-28" />
      <div className="absolute inset-0 flex items-center">
        <img
          src={
        artistId
          ? artist.artwork?.url.replace('{w}', '500').replace('{h}', '500')
          : songData?.images?.coverart
    }
          alt="art"
          className="sm:w-48 w-24 sm:h-48 h-24  object-cover rounded-lg shadow-md shadow-black"
        />

        <div className="ml-5">
          <p className="font-bold sm:text-3xl text-xl text-white">{artistId ? artist.name : songData?.title}</p>
          {!artistId && (
            <Link className="text.base text-gray-500 mt-2" to={`artists/${songData?.artists[0].adamid}`}>
              <p>{songData?.subtitle}</p>
            </Link>
          )}

          <p className="text.base text-gray-500 mt-2">{artistId ? artist?.genreNames[0] : songData?.genres?.primary}</p>
        </div>
      </div>

    </div>
  );
};

export default DetailsHeader;
