import React, { useEffect, useState } from 'react';
import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import useHttp from './hooks/useHttp';

function App() {
  const [tasks, setTasks] = useState([]);
  
  const httpRequest = useHttp({
    url: 'https://react-http-eb917-default-rtdb.firebaseio.com/tasks.json'
  }, dataConfig);

  function dataConfig(data, text) {
    const loadedTasks = [];
    for (const taskKey in data) {
      loadedTasks.push({ id: taskKey, text: data[taskKey].text });
    }
    setTasks(loadedTasks);
  };

  useEffect(() => {
    httpRequest.sendRequest('');
  }, []);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={httpRequest.isLoading}
        error={httpRequest.error}
        onFetch={httpRequest.sendRequest}
      />
    </React.Fragment>
  );
}

export default App;