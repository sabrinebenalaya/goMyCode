const initialState = {
  tasks: [
    { id: "0", description: "task1", done: false },
    { id: "1", description: "task2", done: true },
    { id: "2", description: "task3", done: false },
  ],
  temp: [
    { id: "0", description: "task1", done: false },
    { id: "1", description: "task2", done: true },
    { id: "2", description: "task3", done: false },
  ],
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADDTASK":
      let taskAdd = [...state.temp, action.plaload];
      state = {
        tasks: taskAdd,
        temp: taskAdd,
      };
      return state;
    case "DELETETASK":
      let taskDeleted = state.tasks.filter((el) => el !== action.plaload);
      state = {
        tasks: taskDeleted,
        temp: taskDeleted,
      };
      return state;
    case "DONEANDUNDONE":
      let task = state.tasks.map((el) => {
        if (el.id === action.plaload) {
          if (el.done) {
            el.done = false;
          } else {
            el.done = true;
          }
          return { ...el, done: el.done };
        } else {
          return el;
        }
      });

      state = {
        tasks: task,
        temp: task,
      };
      return state;
    case "UPDATETASK":
      let tasks = state.tasks.map((el) => {
        if (el.id === action.plaload.id) {
          return { ...el, description: action.plaload.text };
        } else {
          return el;
        }
      });

      state = {
        tasks: tasks,
        temp: tasks,
      };
      return state;
    case "TASKDONE":
      state = {
        tasks: state.tasks.filter((task) => task.done),
        temp: state.tasks,
      };
      return state;
    case "ALLTASK":
      state = {
        tasks: state.temp,
        temp: state.tasks,
      };
      return state;
    default:
      return state;
  }
};

export default Reducer;
