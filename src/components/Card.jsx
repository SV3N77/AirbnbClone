export default function Card({
  coverImg,
  title,
  price,
  stats,
  location,
  openSpots,
}) {
  let badgeText;
  if (openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="flex flex-col gap-3 w-56 shrink-0 relative">
      {badgeText && (
        <div className="absolute top-2 left-2 bg-slate-50 font-semibold rounded-lg px-2 py-1">
          {badgeText}
        </div>
      )}
      <img src={`./images/${coverImg}`} alt="image" className="w-full" />

      <div className="text-sm flex flex-col gap-2">
        <div className="flex flex-row gap-1 items-center">
          <img src="./images/star.png" alt="star" className="px-1 w-7 h-4" />
          <div>{stats.rating}</div>
          <span className="text-gray-400">
            ({stats.reviewCount}) . {location}
          </span>
        </div>
        <p>{title}</p>
        <p>
          <span className="font-bold">From ${price}</span> / person
        </p>
      </div>
    </div>
  );
}
