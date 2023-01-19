import React from "react";
import { useTasks } from "../context/TaskContext";
import Layout from "@/components/Layout";
import { VscTrash } from "react-icons/vsc";

import { useRouter } from "next/router";

const Home = () => {
  const { tasks, deleteTask } = useTasks();

  const router = useRouter();
  return (
    <Layout>
      <div className="flex justify-center">
        {tasks.length === 0 ? (
          <h2>there are no tasks</h2>
        ) : (
          <div className="">
            {tasks.map((task, index) => (
              <div
                key={task.id}
                className="bg-gray-700 hover:bg-gray-600 cursor-pointer px-20 py-5 m-2  flex justify-start items-center w-full"
                onClick={() => router.push(`/edit/${task.id}`)}
              >
                <span className="text-2xl mr-5">{index + 1}</span>
                <div className="w-full">
                  <div className="flex justify-between">
                    <h1 className="font-bold">{task.title} </h1>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        deleteTask(task.id);
                      }}
                      className="bg-red-700 hover:bg-red-600 px-3 py-1 inline-flex items-center"
                    >
                      <VscTrash className="mr-2" />
                      Delete
                    </button>
                  </div>
                  <p className="text-gray-300">{task.description} </p>
                  <span className="text-gray-40">{task.id}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Home;
