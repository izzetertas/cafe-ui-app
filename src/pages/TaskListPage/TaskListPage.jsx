import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Header from '../../components/Header';

import * as Styled from './TaskListPage.styled';

const TaskListPage = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/tasks').then(({ data }) => {
      setTasks(data);
    });
  }, []);

  return (
    <>
      <Header>Tasks</Header>
      <Styled.Container>
        <Styled.List>
          {tasks.map((task) => (
            <Styled.Item key={task.taskNumber}>
              <Styled.TaskNumber>{task.taskNumber} .</Styled.TaskNumber>
              <span>{task.taskName}</span>
            </Styled.Item>
          ))}
        </Styled.List>
      </Styled.Container>
    </>
  );
};

export default TaskListPage;
