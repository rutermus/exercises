const getWeekends = (entryType = 'long') => {
  const longType = ['saturday', 'sunday'];
  const shortType = ['sat', 'sun'];
  const result = entryType === 'short' ? shortType : longType;
  return result;
};

export default getWeekends;
