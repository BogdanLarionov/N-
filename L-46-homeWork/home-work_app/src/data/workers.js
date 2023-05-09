export const workers = [
  {
    id: 1,
    firstname: "Oleg",
    lastname: "Petrov",
    address: "Moscow, Russia",
    position: "Teamleader",
    in_office: false,
    avatar:
      "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg",
    tasks: [
      {
        id: 1,
        task: "Stand up at 10:00 am",
        done: false,
      },
      {
        id: 2,
        task: "Pick up document",
        done: true,
      },
      {
        id: 3,
        task: "Do homework",
        done: false,
      },
    ],
  },
  {
    id: 2,
    firstname: "Anna",
    lastname: "Ivanova",
    position: "QA-Manager",
    in_office: true,
    // avatar:
    //   "https://thumbs.dreamstime.com/b/portrait-attractive-confident-experienced-girl-hacker-coder-quality-assurance-manager-qa-touching-chin-work-place-station-244896352.jpg",
    avatar: "./media/face_4.jpeg",
    tasks: [],
  },
  {
    id: 3,
    firstname: "Irina",
    lastname: "Grishina",
    position: "Full Stack-Programmers",
    in_office: false,
    avatar:
      "https://media.licdn.com/dms/image/D4D12AQEN3HYgDlvPFA/article-cover_image-shrink_720_1280/0/1661852065051?e=2147483647&v=beta&t=-wKilvHFRxeN6Qc4cJvNzGBlklKKlctHoNY4VQDxgZU",

    tasks: [],

    //  tasks.length!==0
    // tasks: [],
  },
  {
    id: 4,
    firstname: "Bogdan",
    lastname: "Larionov",
    address: "Berlin, Germany",
    position: "FrontEnd-Deweloper",
    in_office: true,
    avatar:
      "https://media.licdn.com/dms/image/D4E03AQE3VT4TNKtCcA/profile-displayphoto-shrink_200_200/0/1674666747825?e=1689206400&v=beta&t=hT05UsAl_sEyLcyus555SELb2GWP0X4PXRVMBBhvEII",
    tasks: [
      {
        id: 1,
        task: "Stand up at 10:00 am",
        done: true,
      },
    ],
  },
  {
    id: 5,
    firstname: "Anna",
    lastname: "Ivanova",
    position: "QA-Manager",
    in_office: true,

    tasks: [
      {
        id: 1,
        task: "Delete all files to GitHub",
        done: false,
      },
      {
        id: 2,
        task: "Stand up at 10:00 am",
        done: false,
      },
      {
        id: 3,
        task: "Pick up document",
        done: true,
      },
      {
        id: 4,
        task: "Do homework",
        done: false,
      },
    ],
  },
  {
    id: 6,
    firstname: "Irina",
    lastname: "Grishina",
    position: "Full Stack-Programmers",
    in_office: true,
    // avatar: "",
    tasks: [
      {
        id: 1,
        task: "Add all files to GitHub",
        done: true,
      },
      {
        id: 2,
        task: "Stand up at 10:00 am",
        done: false,
      },
      {
        id: 3,
        task: "Pick up document",
        done: true,
      },
      {
        id: 4,
        task: "Do homework",
        done: false,
      },
    ],
  },
];
