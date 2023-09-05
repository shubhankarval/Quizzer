import { useEffect, React, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "./QuizMenu.css";
import Card from "./QuizCard";

export default function QuizMenu() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3030/quiz")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="quiz-menu">
      <h1>Quiz Categories</h1>
      {data && (
        <div className="cards">
          {data.map((item, index) => (
            <Link
              key={index}
              state={{ id: item.id }}
              to={`/${item.title.trim().toLowerCase().replace(/\s+/g, "-")}`}
            >
              <Card title={item.title} imageUrl={"/1.png"} />
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}
