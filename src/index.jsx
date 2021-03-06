import React from 'react';
import { render } from 'react-dom';
import './index.html';
import './style.css';
import Joke from './component/index.jsx';
import jokes from './jokes.js';

const App = () => {
  return (
    <>
      <div className="container">
        {jokes.map((joke) => (
          <Joke
            likes={joke.likes}
            dislikes={joke.dislikes}
            id={joke.id}
            text={joke.text}
            name={joke.name}
          />
        ))}
      </div>
    </>
  );
};

/*
const App = () => {
  const [like, setLike] = useState(0);
  const [unlike, setUnlike] = useState(0);

  return (
    <>
      <div className="container">
        <div className="joke">
          <div className="joke__body">
            <div className="joke__user">
              <img className="user-avatar" src="assets/img/user01.png" />
              <p className="user-name">Neroxx</p>
            </div>

            <p className="joke__text">
              The secret service isn't allowed to yell "Get down!" anymore when
              the president is about to be attacked. Now they have to yell
              "Donald, duck!"
            </p>
          </div>
          <div className="joke__likes">
            <button
              id="btn-up"
              className="btn-like btn-like--up"
              onClick={() => {
                setLike(like + 1);
              }}
            ></button>
            <span id="likes-up" className="likes-count likes-count--up">
              {like}
            </span>
            <button
              id="btn-down"
              className="btn-like btn-like--down"
              onClick={() => {
                setUnlike(unlike + 1);
              }}
            ></button>
            <span id="likes-down" className="likes-count likes-count--down">
              {unlike}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
*/

render(<App />, document.querySelector('#app'));
