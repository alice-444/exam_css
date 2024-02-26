import { DateTime } from "luxon";

const Date = () => {
  const currentDate = DateTime.local();

  const formattedDate = currentDate.toFormat("dd MMMM yyyy");

  return <div className="text-grey font-base">{formattedDate}</div>;
};

export default Date;
