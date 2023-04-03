export const getSortedContent = (content, sortBy) => {
  const sortedContent = [...content];

  switch (sortBy) {
  case 'Country':
    return sortedContent.sort((a, b) => (
      a.country.localeCompare(b.country)
    ));
  case 'Title':
    return sortedContent.sort((a, b) => (
      a.title.localeCompare(b.title)
    ));
  case 'Nothing':
  default:
    return sortedContent;
  }
};
