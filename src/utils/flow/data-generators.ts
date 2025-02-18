
export const generateMinuteData = () => {
  const data = [];
  for (let hour = 9; hour <= 17; hour++) {
    for (let minute = 0; minute < 60; minute++) {
      const time = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
      data.push({
        time,
        institutional: Math.random() * 4000 - 2000,
        retail: Math.random() * -3000 + 1500,
      });
    }
  }
  return data;
};

export const generateBarData = () => {
  const data = [];
  for (let hour = 9; hour <= 17; hour++) {
    for (let minute = 0; minute < 60; minute += 5) {
      const time = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
      data.push({
        time,
        institutional: Math.random() * 400 - 200,
        retail: Math.random() * -300 + 150,
      });
    }
  }
  return data;
};
