import { DateTime } from "luxon";

const Date = () => {
  const currentDate = DateTime.local();

  const formattedDate = currentDate.toFormat("EEEE, dd MMM ");

  return <div className="text-grey font-base">{formattedDate}</div>;
};

export default Date;
