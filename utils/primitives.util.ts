import { format, parseISO } from 'date-fns';

const applyEllipse = (
  text: string,
  first: number = 6,
  last: number = 4,
  ellipsis: string = "..."
): string => {
  if (!text || text.trim().length === 0) return text;

  return text.replace(text.slice(first, text.length - last), ellipsis);
};

const formatTimestamp = (timestamp: string) => {
  if (!timestamp) return;

  const date = parseISO(timestamp);
  const formattedDateTime = format(date, 'MMM dd, yyyy HH:mm:ss');

  return formattedDateTime;
};

export { applyEllipse, formatTimestamp }