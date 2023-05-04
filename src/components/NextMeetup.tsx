export interface HighlightProps {
  time: string;
}

export const NextMeetup = ({ time }: HighlightProps) => {
  return (
    <time
      dateTime={time}
      className="font-mono px-2 py-1 bg-black bg-opacity-20 rounded-lg"
    >
      {time}
    </time>
  );
};
