import { useEffect, useState } from "react";
import { Tag } from "./Tag";

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
    <Tag size="M">
      <time dateTime={time} className="font-mono">
        {formatted}
      </time>
    </Tag>
  );
};
