import { useEffect, React, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "./QuizMenu.css";
import Loader from "./Loader";
import Card from "./QuizCard";

export default function QuizMenu() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("https://quizzer-backend-jz99.onrender.com/quiz")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={!data ? 'loading' : ''}>
      {!data ? (
        <Loader />
      ) : (
        <section className="quiz-menu">
          <h1>Quiz Categories</h1>
          {data && (
            <div className="cards">
              {data.map((item, index) => (
                <Link
                  key={index}
                  state={{ id: item.id }}
                  to={`/${item.title
                    .trim()
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                >
                  <Card title={item.title} imageUrl={`/${item.id}.png`} />
                </Link>
              ))}
            </div>
          )}
        </section>
      )}
    </div>
  );
}
