import { useEffect, useState } from "react";
import { Tag } from "./Tag";
import Image from "next/image";

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
    <div className="flex flex-col items-center justify-center font-mono">
      <Image
        src="/logo.svg"
        width="400"
        height="400"
        alt="logo de StrasbourgJS"
        className="-mb-12"
      />
      <Tag size="L">
        <time dateTime={time}>{formatted}</time>
      </Tag>
    </div>
  );
};
