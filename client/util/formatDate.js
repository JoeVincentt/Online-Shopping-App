export const formatDate = date => {
  const newDate = new Date(date).toUTCString();
  const localDate = new Date(newDate).toLocaleDateString();

  return `${localDate}`;
};
