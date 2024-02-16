import Header from '../components/blocks/Header'
import TrainingProgram from '../components/blocks/Training-Program'
import Tariffs from '../components/blocks/Tariffs'
import Bonus from '../components/blocks/Bonus'
import Result from '../components/blocks/Result'
import Question from '../components/blocks/Question'
import Help from '../components/blocks/Help'
import Cart from '../components/blocks/Cart'
import Footer from '../components/blocks/Footer'

const MainPage = () => {
	return (
		<>
			<Header />
			<TrainingProgram />
			<Tariffs />
			<Bonus />
			<Result />
			<Question />
			<Help />
			<Cart />
			<Footer />
		</>
	)
}

export default MainPage
