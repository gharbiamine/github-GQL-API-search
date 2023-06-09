export const getTimeElapsed = (dateString: string): string => {
  /**
   * Returns a string indicating the time elapsed since a given date.
   * @param {string} dateString - The date to compare, in ISO 8601 format.
   * @returns {string} A human-readable string indicating the elapsed time.
   */
  const now = new Date();
  const date = new Date(dateString);
  const hours = Math.round((now.getTime() - date.getTime()) / (1000 * 60 * 60));
  const days = Math.round(hours / 24);
  const years = Math.round(days / 365);
  if (hours < 1) {
    return "less than an hour ago";
  }

  if (hours === 1) {
    return "1 hour ago";
  }
  if (hours < 24) {
    return `${hours} hours ago`;
  }
  if (hours < 48) {
    return "1 day ago";
  }
  if (years < 1) return `${days} days ago`;

  if (years === 1) return "1 year ago";

  return `${years} years ago`;
};
