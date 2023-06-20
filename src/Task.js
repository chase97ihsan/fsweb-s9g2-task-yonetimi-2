import { differenceInDays, formatDistanceToNow } from "date-fns";
import { bg, tr } from "date-fns/locale";
import React from "react";

const Task = ({ taskObj, onComplete }) => {
  const distance = formatDistanceToNow(new Date(taskObj.deadline), {
    addSuffix: true,
    locale: tr,
  });
  const differencee =
    differenceInDays(new Date(taskObj.deadline), new Date()) <= 3;

  return (
    <div className="task">
      <h3>{taskObj.title}</h3>
      <div className="deadline">
        son teslim:{" "}
        <span className={differencee ? "bg-ihsan" : "bg-doğan"}>
          {distance}
        </span>
      </div>
      <p>{taskObj.description}</p>
      <div>
        {taskObj.people.map((p) => (
          <span className="pill" key={p}>
            {p}
          </span>
        ))}
      </div>
      {onComplete && (
        <button onClick={() => onComplete(taskObj.id)}>Tamamlandı</button>
      )}
    </div>
  );
};

export default Task;
