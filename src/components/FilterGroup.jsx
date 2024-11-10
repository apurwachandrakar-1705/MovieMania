const FilterGroup = ({ minRating, handleFilter, ratings }) => {
  return (
    <ul className="align_center movie_filter">
      {ratings.map((rate) => (
        <li
          key={rate}
          className={
            minRating === rate
              ? "movie_filter_item active"
              : "movie_filter_item"
          }
          onClick={() => handleFilter(rate)}
        >
          {rate}+ Star
        </li>
      ))}
    </ul>
  );
};
export default FilterGroup;
