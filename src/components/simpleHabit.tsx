import React, { useEffect, useState, useRef, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-regular-svg-icons";

export default function SimpleHabit() {
  const [count, setCount] = useState(0);
  const spanRef = useRef<HTMLSpanElement>(null);
  const handleIncrement = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      setCount(count + 1);
    },
    [count]
  );

  useEffect(() => {
    console.log(`mounted & updated! : ${count}`);
    return () => {
      console.log(`component unmount : ${count}`);
    };
  }, [count]);

  return (
    <li className="habit">
      <span ref={spanRef} className="habit-name">
        Reading
      </span>
      <span className="habit-count">{count}</span>
      <button className="habit-button habit-increase" onClick={handleIncrement}>
        <FontAwesomeIcon icon={faPlusSquare} />
      </button>
    </li>
  );
}

// export default class SimpleHabit extends Component {
//   state = {
//     count: 0,
//   };
//   handleIncrement = () => {
//     this.setState({ count: this.state.count + 1 });
//   };

//   render() {
//     return (
//   <li className="habit">
//     <span className="habit-name">Reading</span>
//     <span className="habit-count">{this.state.count}</span>
//     <button className="habit-button habit-increase" onClick={this.handleIncrement}>
//       <FontAwesomeIcon icon={faPlusSquare} />
//     </button>
//   </li>
//     );
//   }
// }
