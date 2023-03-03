import { useEffect, useState } from "react";
import { Tag } from "./Tag";
import { IoLogoNodejs } from "react-icons/io";

export interface HighlightProps {
  time: string;
}

export const NextMeetup = ({ time }: HighlightProps) => {
  const [formatted, setFormatted] = useState<string>();

  useEffect(() => {
    setFormatted(
      new Intl.DateTimeFormat("fr-FR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }).format(new Date(time))
    );
  }, [time]);

  return (
    <div className="flex justify-center flex-col items-center font-mono">
      <IoLogoNodejs className="h-48 w-48 text-yellow-300" />
      <Tag size="L">
        <time dateTime={time}>{formatted}</time>
      </Tag>
    </div>
  );
};
