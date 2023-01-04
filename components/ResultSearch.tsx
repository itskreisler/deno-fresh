function abbreviateNumber(number: number): string {
  const abbreviations: string[] = ["k", "M", "B", "T"];

  // iterate through the abbreviations
  for (let i: number = abbreviations.length - 1; i >= 0; i--) {
    // convert the number to the abbreviation
    const abbreviation: string = abbreviations[i];
    const abbreviationValue: number = Math.pow(10, (i + 1) * 3);
    if (number >= abbreviationValue) {
      return `${(number / abbreviationValue).toFixed(1)}${abbreviation}`;
    }
  }

  return number.toString();
}
type ResultSearchProps = {
  q: {
    url: string;
    rank: number;
    score: number;
    scored_by: number;
    title: string;
    images: ResultSearchImgProps;
  };
};
type ResultSearchImgProps = {
  jpg: {
    image_url: string;
    small_image_url: string;
    large_image_url: string;
  };
  webp: {
    image_url: string;
    small_image_url: string;
    large_image_url: string;
  };
};
const ResultSearch = ({
  q: { url, rank, score, scored_by, title, images },
}: ResultSearchProps) => {
  return (
    <div class="max-w-sm mx-auto my-3">
      <div class="w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img
            class="p-8 rounded-t-lg mx-auto"
            src={images.jpg.image_url}
            alt="product image"
          />
        </a>
        <div class="px-5 pb-5">
          <a href="#">
            <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h5>
          </a>
          <div class="flex items-center mt-2.5 mb-5">
            <span class="dark:text-white">
              {(() => {
                try {
                  return score.toFixed(2);
                } catch (_error) {
                  return score == null ? 0 : score;
                }
              })()}
            </span>
            <span
              title={String(scored_by)}
              class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3"
            >
              SCORE BY{" "}
              {(() => {
                try {
                  return abbreviateNumber(scored_by);
                } catch (_error) {
                  return scored_by == null ? 0 : scored_by;
                }
              })()}{" "}
              USERS
            </span>
          </div>
          <div class="flex items-center justify-between">
            <span class="text-3xl font-bold text-gray-900 dark:text-white">
              RANK #{rank}
            </span>
            <a
              href="#"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Add to list
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultSearch;
