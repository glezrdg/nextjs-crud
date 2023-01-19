import Layout from "@/components/Layout";
import { useEffect, useState } from "react";
import { useTasks } from "@/context/TaskContext";
import { useRouter } from "next/router";

const TaskFormPage = () => {
  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  const { push, query } = useRouter();

  const { createTask, updateTask, tasks } = useTasks();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!query.id) {
      createTask(task.title, task.description);
    } else {
      updateTask(query.id, task);
    }
    push("/");
  };

  useEffect(() => {
    if (query.id) {
      const taskFound = tasks.find((task) => task.id === query.id);
      setTask({ title: taskFound.title, description: taskFound.description });
    }
  }, []);

  return (
    <Layout>
      <form onSubmit={handleSubmit}>
        <h1>{query.id ? "Update a Task " : "Create a task"} </h1>

        <input
          type="text"
          name="title"
          placeholder="write a title"
          className="bg-gray-800 focus:text-gray-100 focus:outline:none w-full py-3 px-4 mb-5"
          onChange={handleChange}
          value={task.title}
        />
        <textarea
          name="description"
          rows="2"
          placeholder="write a task"
          className="bg-gray-800 focus:text-gray-100 focus:outline:none w-full py-3 px-4 mb-5"
          onChange={handleChange}
          value={task.description}
        />
        <button
          className="bg-green-600 hover:bg-green-400 px-4 py-2 rounded-sm disabled:opacity-50"
          type="submit"
          disabled={!task.title}
        >
          Save
        </button>
      </form>
    </Layout>
  );
};

export default TaskFormPage;
