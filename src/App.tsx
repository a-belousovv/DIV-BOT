import Bonus from "./components/blocks/Bonus";

import Footer from "./components/blocks/Footer";
import Header from "./components/blocks/Header";
import Help from "./components/blocks/Help";
import Question from "./components/blocks/Question";
import Result from "./components/blocks/Result";
import Tariffs from "./components/blocks/Tariffs";
import TrainingProgram from "./components/blocks/Training-Program";

const App = () => {
  return (
    <>
      <Header />
      <TrainingProgram />
      <Tariffs />
      <Bonus />
      <Result />
      <Question />
      <Help />
      <Footer />
    </>
  );
};

export default App;