//This For generate Random ID
var generator = require('../util/generatorID');

const tasks = [
  {
    id: 1,
    title: 'Learn React',
    description: 'Learn how to use react in building web app',
  },
  {
    id: 2,
    title: 'Learn Node',
    description: 'Learn how to use node in building server',
  },
  {
    id: 3,
    title: 'Learn Array Manipulation',
    description: 'Learn how to manipulate arrays in javascript',
  },
];
//Create New Task
createTask = (req, res) => {
  let newTask = req.body;
  console.log(req.body);
  if (newTask) {
    var id = generator.generate();
    newTask.id = id;
    tasks.push(newTask);
    res.send({ tasks: tasks, Notice: 'Created ' });
  } else {
    res.send('No Data');
  }
};
//edit Task By id
editTask = (req, res) => {
  let newTitle = req.body.title;
  let newDescription = req.body.description;
  const id = req.params.id;

  const newTasksArray = tasks.map((task) =>
    task.id == id
      ? { ...task, title: newTitle, description: newDescription }
      : task
  );

  res.send(newTasksArray);
};
// Search Foe Task By Id
searchTask = (req, res) => {
  const id = req.params.id;
  console.log('id', id);

  let searchedTask = tasks.find((task) => task.id == id);
  res.send(searchedTask);
};
//Delete Task By ID
deleteTask = (req, res) => {
  const id = req.params.id;
  console.log('id', id);

  let filteredTasks = tasks.filter((task) => task.id != id);
  res.send(filteredTasks);
};
//Get All Tasks
getTasks = (req, res) => {
  res.send(tasks);
};
module.exports = {
  createTask,
  editTask,
  searchTask,
  deleteTask,
  getTasks,
};
