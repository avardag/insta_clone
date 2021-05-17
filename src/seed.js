/* eslint-disable no-plusplus */
export function seedDatabase(firebase) {
  const users = [
    {
      userId: "8yLCgpPs3ldaMwE0IsdBXYdzDyz2",
      username: "maga",
      fullName: "Maga Bagaev",
      emailAddress: "maga@gmail.com",
      following: ["2"],
      followers: ["2", "3", "4"],
      dateCreated: Date.now(),
    },
    {
      userId: "2",
      username: "rafik",
      fullName: "Rafik Tofikov",
      emailAddress: "rafik@gmailo.com",
      following: [],
      followers: ["8yLCgpPs3ldaMwE0IsdBXYdzDyz2"],
      dateCreated: Date.now(),
    },
    {
      userId: "3",
      username: "denchik",
      fullName: "Danila maxrov",
      emailAddress: "danila@denchik.com",
      following: [],
      followers: ["8yLCgpPs3ldaMwE0IsdBXYdzDyz2"],
      dateCreated: Date.now(),
    },
    {
      userId: "4",
      username: "arsen",
      fullName: "Jora Arsen",
      emailAddress: "jora@arsen.com",
      following: [],
      followers: ["8yLCgpPs3ldaMwE0IsdBXYdzDyz2"],
      dateCreated: Date.now(),
    },
  ];

  // eslint-disable-next-line prefer-const
  for (let k = 0; k < users.length; k++) {
    console.log("adding user ", users[k]);
    firebase.firestore().collection("users").add(users[k]);
  }

  // eslint-disable-next-line prefer-const
  for (let i = 1; i <= 5; ++i) {
    console.log("adding photo ", `/images/users/rafik/${i}.jpg`);
    firebase
      .firestore()
      .collection("photos")
      .add({
        photoId: i,
        userId: "2",
        imageSrc: `/images/users/rafik/${i}.jpg`,
        caption: "Jora and the Kolya",
        likes: [],
        comments: [
          {
            displayName: "denchik",
            comment: "Love this place, looks like my animal farm!",
          },
          {
            displayName: "arsen",
            comment: "Would you mind if I used this picture?",
          },
        ],
        userLatitude: "40.7128°",
        userLongitude: "74.0060°",
        dateCreated: Date.now(),
      });
  }
}
