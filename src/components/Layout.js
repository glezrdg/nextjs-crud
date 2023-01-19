import { AiOutlinePlus } from "react-icons/ai";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTasks } from "../context/TaskContext";

const Layout = ({ children }) => {
  const { tasks } = useTasks();
  const router = useRouter();
  return (
    <div className="bg-gray-900 h-screen text-white">
      <header className="flex items-center bg-gray-800   px-28 py-5">
        <Link href="/">
          <h1 className="font-black text-lg">Task App</h1>
        </Link>
        <span className=" font-bold ml-2 text-gray-400 ">
          {tasks.length} Tasks
        </span>
        <div className="flex-grow text-right">
          <button
            onClick={() => router.push("/new")}
            className="bg-green-600 hover:bg-green-500 px-5 py-2 font-bold rounded-sm inline-flex items-center "
          >
            <AiOutlinePlus className="mr-2" />
            Anadir tarea
          </button>
        </div>
      </header>

      <main className="px-28 py-10">{children}</main>
    </div>
  );
};

export default Layout;
