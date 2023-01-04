import { useState } from "preact/hooks";
import ResultSearch from "../components/ResultSearch.tsx";

const dummy = {
  mal_id: 47917,
  url: "https://myanimelist.net/anime/47917/Bocchi_the_Rock",
  images: {
    jpg: {
      image_url: "https://cdn.myanimelist.net/images/anime/1448/127956.jpg",
      small_image_url:
        "https://cdn.myanimelist.net/images/anime/1448/127956t.jpg",
      large_image_url:
        "https://cdn.myanimelist.net/images/anime/1448/127956l.jpg",
    },
    webp: {
      image_url: "https://cdn.myanimelist.net/images/anime/1448/127956.webp",
      small_image_url:
        "https://cdn.myanimelist.net/images/anime/1448/127956t.webp",
      large_image_url:
        "https://cdn.myanimelist.net/images/anime/1448/127956l.webp",
    },
  },
  trailer: {
    youtube_id: "Fp7lnCp_LW0",
    url: "https://www.youtube.com/watch?v=Fp7lnCp_LW0",
    embed_url:
      "https://www.youtube.com/embed/Fp7lnCp_LW0?enablejsapi=1&wmode=opaque&autoplay=1",
    images: {
      image_url: "https://img.youtube.com/vi/Fp7lnCp_LW0/default.jpg",
      small_image_url: "https://img.youtube.com/vi/Fp7lnCp_LW0/sddefault.jpg",
      medium_image_url: "https://img.youtube.com/vi/Fp7lnCp_LW0/mqdefault.jpg",
      large_image_url: "https://img.youtube.com/vi/Fp7lnCp_LW0/hqdefault.jpg",
      maximum_image_url:
        "https://img.youtube.com/vi/Fp7lnCp_LW0/maxresdefault.jpg",
    },
  },
  approved: true,
  titles: [
    {
      type: "Default",
      title: "Bocchi the Rock!",
    },
    {
      type: "Japanese",
      title: "ぼっち・ざ・ろっく！",
    },
    {
      type: "English",
      title: "Bocchi the Rock!",
    },
  ],
  title: "Bocchi the Rock!",
  title_english: "Bocchi the Rock!",
  title_japanese: "ぼっち・ざ・ろっく！",
  title_synonyms: [],
  type: "TV",
  source: "4-koma manga",
  episodes: 12,
  status: "Finished Airing",
  airing: false,
  aired: {
    from: "2022-10-09T00:00:00+00:00",
    to: "2022-12-25T00:00:00+00:00",
    prop: {
      from: {
        day: 9,
        month: 10,
        year: 2022,
      },
      to: {
        day: 25,
        month: 12,
        year: 2022,
      },
    },
    string: "Oct 9, 2022 to Dec 25, 2022",
  },
  duration: "23 min per ep",
  rating: "PG-13 - Teens 13 or older",
  score: 9,
  scored_by: 105474,
  rank: 13,
  popularity: 943,
  members: 224348,
  favorites: 9691,
  synopsis:
    'Yearning to make friends and perform live with a band, lonely and socially anxious Hitori "Bocchi" Gotou devotes her time to playing the guitar. On a fateful day, Bocchi meets the outgoing drummer Nijika Ijichi, who invites her to join Kessoku Band when their guitarist, Ikuyo Kita, flees before their first show. Soon after, Bocchi meets her final bandmate—the cool bassist Ryou Yamada. \n\nAlthough their first performance together is subpar, the girls feel empowered by their shared love for music, and they are soon rejoined by Kita. Finding happiness in performing, Bocchi and her bandmates put their hearts into improving as musicians while making the most of their fleeting high school days.\n\n[Written by MAL Rewrite]',
  background: null,
  season: "fall",
  year: 2022,
  broadcast: {
    day: "Sundays",
    time: "00:00",
    timezone: "Asia/Tokyo",
    string: "Sundays at 00:00 (JST)",
  },
  producers: [
    {
      mal_id: 17,
      type: "anime",
      name: "Aniplex",
      url: "https://myanimelist.net/anime/producer/17/Aniplex",
    },
    {
      mal_id: 797,
      type: "anime",
      name: "Houbunsha",
      url: "https://myanimelist.net/anime/producer/797/Houbunsha",
    },
  ],
  licensors: [],
  studios: [
    {
      mal_id: 1835,
      type: "anime",
      name: "CloverWorks",
      url: "https://myanimelist.net/anime/producer/1835/CloverWorks",
    },
  ],
  genres: [
    {
      mal_id: 4,
      type: "anime",
      name: "Comedy",
      url: "https://myanimelist.net/anime/genre/4/Comedy",
    },
  ],
  explicit_genres: [],
  themes: [
    {
      mal_id: 52,
      type: "anime",
      name: "CGDCT",
      url: "https://myanimelist.net/anime/genre/52/CGDCT",
    },
    {
      mal_id: 19,
      type: "anime",
      name: "Music",
      url: "https://myanimelist.net/anime/genre/19/Music",
    },
  ],
  demographics: [],
};
const FormSearch = () => {
  const [q, setQ] = useState({});
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);

  const getAnimeSearch = async ({ q }) => {
    setLoading(true);
    const p = new URLSearchParams({ q }).toString();
    const _req = await fetch(`https://api.jikan.moe/v4/anime?${p}`);
    const _json = await _req.json();
    setResult(_json.data);
    setLoading(false);
  };

  const handleSearchChange = ({ target: { value } }) => {};
  const handleSubmit = (e) => {
    e.preventDefault();
    const v = Object.fromEntries(new FormData(e.target));
    getAnimeSearch(v);
  };
  return (
    <>
      <div class="max-w-sm mx-auto my-5 rounded overflow-hidden shadow-lg">
        <form onSubmit={handleSubmit}>
          <label
            for="default-search"
            class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div class="relative">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                class="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="search"
              name="q"
              id="default-search"
              class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search..."
              autoComplete="off"
              required
            />
            {loading ? (
              <button
                disabled
                type="button"
                class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <svg
                  aria-hidden="true"
                  role="status"
                  class="inline w-4 h-4 mr-3 text-white animate-spin"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="#E5E7EB"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentColor"
                  />
                </svg>
                Search...
              </button>
            ) : (
              <button
                type="submit"
                class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Search
              </button>
            )}
          </div>
        </form>
        {result.map((_, i) => (
          <ResultSearch q={_} key={i} />
        ))}
      </div>
    </>
  );
};

export default FormSearch;
