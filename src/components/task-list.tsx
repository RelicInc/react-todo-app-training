import { Task } from '@prisma/client';
import { TaskListItem } from '@/components/task-list-item';

type TaskListPropsType = {
  allTaskList: Task[];
};

export const TaskList = ({ allTaskList }: TaskListPropsType) => {
  return (
    <ul className="task_ui">
      {allTaskList.map((task) => (
        <TaskListItem key={task.id} task={task} />
      ))}
    </ul>
  );
};
