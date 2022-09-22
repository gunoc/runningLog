
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import Expenses from "./components/Expenses";


function App() {
  const expenses = [
    {
      id: "e1",
      title: "카보로딩의 효과",
      pin:   <FontAwesomeIcon icon={faStar}/>,
      amount: 6.2,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "겨울 러닝 대비",
      pin:       <FontAwesomeIcon icon={faStar}/>,
      amount: 5.3,
      date: new Date(2021, 2, 12),
    },
    {
      id: "e3",
      title: "러닝화 바꾸고 싶다",
      pin:       <FontAwesomeIcon icon={faStar}/>,
      amount: 5.7,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "컨디션 최상!",
      pin:       <FontAwesomeIcon icon={faStar}/>,
      amount: 6.3,
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    <div>
      <h2>러닝일지</h2>
      
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
