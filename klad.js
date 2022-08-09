const ToDoItem = function(title='Title', description='Description', dueDate=new(Date), priority='normal') {
  let _title = title;
  let _description = description;
  let _dueDate = dueDate;
  let _priority = priority;
  
  return {
    get title() {
      return _title;
    },

    set title(newTitle) {
      if (newTitle.length > 0) {
        _title = newTitle;
       } else {
        throw "Must contain at least 1 character";
       }
    },

    get description() {
      return _description;
    },

    set description(newDescription) {
      if (newDescription.length > 0) {
        _description = newDescription;
       } else {
        throw "Must contain at least 1 character";
       }
    },

    get dueDate() {
      return _dueDate;
    },

    set dueDate(newDate) {
      if (newDate.length > 0) {
        _dueDate = newDate;
       } else {
        throw "Must contain at least 1 character";
       }
    },

    get priority() {
      return _priority;
    },

    set priority(newPriority) {
      if (newPriority.length > 0) {
        _priority = newPriority;
       } else {
        throw "Must contain at least 1 character";
       }
    },
  };
};
const Project = function(name='Name') {
  let _name = name;
  const itemsList = {};

  return {
    get name() {
      return _name;
    },

    set name(newName) {
      if (newName.length > 0) {
        _name = newName;
      } else {
        throw "Must contain at least 1 character"
      }
    },

    itemsList
  }
};

const allProjects = {
}


const addItem = function(title, description, dueDate, priority, project) {
  const item = ToDoItem(title, description, dueDate, priority);
  allProjects[project].itemsList[title] = item;
};

const addProject = function(name) {
  const project = Project(name);
  allProjects[name] = project;
};

const deleteProject = function(name) {
  delete allProjects[name];
}

const deleteItem = function(projectName, itemTitle) {
  delete allProjects[projectName].itemsList[itemTitle];
}

const inbox = addProject('Inbox');
const myProject = addProject('myProject');
const myItem = addItem('myItem', 'cool item', undefined, 'normal', 'myProject');
// allProjects.Inbox.itemsList.myItem.title = "uuu";
// console.log(allProjects.Inbox.itemsList.myItem.title);
// deleteItem('myProject', 'myItem');
// deleteProject('Inbox');
console.log(allProjects);