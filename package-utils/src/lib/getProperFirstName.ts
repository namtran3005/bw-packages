const formatFirstLetter = (
  nameMain: string,
  nameAfterDash?: string
): string => {
  if (nameAfterDash) {
    return `${nameMain.charAt(0).toUpperCase() +
      nameMain.slice(1)}-${nameAfterDash.charAt(0).toUpperCase() +
      nameAfterDash.slice(1)}`;
  } else {
    return nameMain.charAt(0).toUpperCase() + nameMain.slice(1);
  }
};

export const formatFirstName = (name: string): string => {
  const listOfNames = name
    .toLowerCase()
    .trim()
    .split(' ');
  if (listOfNames[0].includes('-')) {
    const dashName = listOfNames[0].split('-');
    return `${formatFirstLetter(dashName[0], dashName[1])}`;
  } else {
    return formatFirstLetter(listOfNames[0]);
  }
};
