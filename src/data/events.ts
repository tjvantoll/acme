import Chance from "chance";

export function getRandomEvents() {
  const chance = new Chance();
  const today = new Date();
  const year = today.getFullYear();
  const month = ("0" + (today.getMonth() + 1)).slice(-2);
  const day = ("0" + today.getDate()).slice(-2);
  const data: Array<any> = [];

  for (let i = 0; i < 5; i++) {
    const startHourInt = chance.integer({ min: 8, max: 16 });
    const endHourInt = startHourInt + 1;
    const startHour = ("0" + startHourInt).slice(-2);
    const endHour = ("0" + endHourInt).slice(-2);

    data.push({
      id: i,
      title: chance.company(),
      start: new Date(`${year}-${month}-${day}T${startHour}:00:00.000Z`),
      end: new Date(`${year}-${month}-${day}T${endHour}:00:00.000Z`),
      isAllDay: Math.floor(Math.random() * 3) === 2,
    });
  }

  return data;
}

