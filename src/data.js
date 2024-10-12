export const initialData = [
  {
    id: 1,
    name: "Parent 1",
    isChecked: false,
    children: [
      {
        id: 2,
        name: "Child 1.1",
        isChecked: false,
        children: [],
      },
      {
        id: 3,
        name: "Child 1.2",
        isChecked: false,
        children: [
          {
            id: 4,
            name: "Child 1.2.1",
            isChecked: false,
            children: [],
          },
        ],
      },
    ],
  },
  {
    id: 5,
    name: "Parent 2",
    isChecked: false,
    children: [],
  },
];
