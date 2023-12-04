// components/Activities.js
import { getActivities as getActivitiesData } from "@/lib/activities";
import { deleteActivity } from "@/lib/activities";
import { useState, useEffect } from "react";
import router from "next/router";

export default function ActivitiesList({ profile }) {
  // console.log(profile);
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    getActivities();
  }, []);

  async function getActivities() {
    const data = await getActivitiesData(profile.id);
    setActivities(data);
  }

  console.log(activities);

  if (activities.length === 0) {
    return (
      <div className="p-8 max-w-lg mx-auto">
        <h1 className="text-5xl font-extrabold dark:text-white my-2 text-center">
          No se encontraron actividades :(
        </h1>

        <button
          className="btn btn-primary"
          onClick={() => router.push("/createActivity")}
        >
          Crear Nueva Actividad
        </button>
      </div>
    );
  }

  return (
      <div className="min-h-screen min-w-screen bg-base-200 ">
          <div className="p-8 max-w-lg mx-auto bg-neutral">
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

                  <span className="inline-flex items-center px-3 py-2 text-sm font-medium text-center">
                    <div className="badge badge-neutral">
                      {" "}
                      {activity.category}
                    </div>
                  </span>

                  <button
                    className="btn btn-circle btn-error "
                    onClick={() =>
                      deleteActivity(activity.id).then(() => getActivities())
                    }
                  >
                    X
                  </button>
                </div>
              ))}
              <button
                className="btn btn-primary"
                onClick={() => router.push("/createActivity")}
              >
                Crear Nueva Actividad
              </button>
            </div>
          </div>
          </div>
  );
}
