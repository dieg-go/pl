// components/Activities.js
import { getActivities as getActivitiesData } from "@/lib/activities";
import { deleteActivity } from "@/lib/activities";
import { useState, useEffect } from "react";
import router from "next/router";
export default function Activities(query) {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    getActivities();
  }, []);

  async function getActivities() {
    const data = await getActivitiesData(query.userId);
    setActivities(data);
  }

  return (
    <div className="p-8 max-w-lg mx-auto">
      <h1 className="text-5xl font-extrabold dark:text-white my-2 text-center">
        Activities
      </h1>
      <div className="block max-w-lg p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="block max-w-lg p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {activity.name}
            </h3>

            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {activity.description}
            </p>

            <span className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              {activity.category}
            </span>
            <div></div>
            <button className="btn btn-primary" onClick={() => router.push("/editActivity?activityId=" + activity.id)}>Editar</button>
            <span></span>

            <button
              className="btn btn-secondary"
              onClick={() =>
                deleteActivity(activity.id).then(() => getActivities())
              }
            >Borrar</button>
            

          </div>
        ))}
        <button
          className="btn btn-primary"
          onClick={() => router.push("/createActivity?userId=" + query.userId)}
        >
          Crear Nueva Actividad
        </button>
      </div>
    </div>
  );
}
