import React from "react";

interface DateToRelativeTimeProps {
  date: Date;
}

export const DateToRelativeTime: React.FC<DateToRelativeTimeProps> = ({
  date,
}) => {
  const currentDate = new Date();
  const targetDate = new Date(date);
  const secondsAgo = Math.floor(
    (currentDate.getTime() - targetDate.getTime()) / 1000
  );
  const intervals = [
    { label: "years", seconds: 31536000 },
    { label: "months", seconds: 2592000 },
    { label: "days", seconds: 86400 },
    { label: "hours", seconds: 3600 },
    { label: "minutes", seconds: 60 },
    { label: "seconds", seconds: 1 },
  ];

  for (const interval of intervals) {
    const count = Math.floor(secondsAgo / interval.seconds);
    if (count >= 1) {
      return `${count} ${count === 1 ? interval.label.slice(0, -1) : interval.label} ago`;
    }
  }

  return "just now";
};
