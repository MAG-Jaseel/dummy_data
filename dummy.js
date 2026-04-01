function getUsers(_start, _end) {
  const fs = require('fs');
  const data = JSON.parse(fs.readFileSync('dummy.json', 'utf8'));
  for (const user of data.users) {
    // console.log(user.createdAt);
    // console.log(`User ID: ${user.id}, Name: ${user.name}, Email: ${user.email}`);
  }

  const start = new Date(_start);
  const end = new Date(_end);

  const filtered = data.users.filter((user) => {
    const userDate = new Date(user.createdAt);
    return userDate >= start && userDate <= end;
  });

  const merged = Object.values(
    filtered.reduce((acc, user) => {
      if (!acc[user.visitorId]) {
        acc[user.visitorId] = {
          visitorId: user.visitorId,
          actions: [],
        };
      }

      acc[user.visitorId].actions.push(...user.actions);

      return acc;
    }, {}),
  );

  return merged;
}

module.exports = { getUsers };

getUsers(`2026-03-25T10:38:13.000Z`, `2026-03-25T13:00:20.000Z`);
