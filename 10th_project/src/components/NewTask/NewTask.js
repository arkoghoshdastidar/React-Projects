import useHttp from '../../hooks/useHttp';
import Section from '../UI/Section';
import TaskForm from './TaskForm';

const NewTask = (props) => {

  const httpRequest = useHttp({
    url: 'https://react-http-eb917-default-rtdb.firebaseio.com/tasks.json',
    method: 'POST',
    body: {text: ''},
    headers: {
      'Content-Type': 'application/json',
    }
  }, dataConfig);

  function dataConfig(data, taskText) {
    const generatedId = data.name; // firebase-specific => "name" contains generated id
    const createdTask = { id: generatedId, text: taskText };
    props.onAddTask(createdTask);
  }

  const enterTaskHandler = async (taskText) => {
    httpRequest.sendRequest(taskText);
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={httpRequest.isLoading} />
      {httpRequest.error && <p>{httpRequest.error}</p>}
    </Section>
  );
};

export default NewTask;