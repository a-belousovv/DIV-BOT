import Header from '../components/blocks/Header'
import TrainingProgram from '../components/blocks/Training-Program'
import Tariffs from '../components/blocks/Tariffs'
import Bonus from '../components/blocks/Bonus'
import Result from '../components/blocks/Result'
import Question from '../components/blocks/Question'
import Help from '../components/blocks/Help'
import Footer from '../components/blocks/Footer'
import Review from '../components/blocks/Review'

const MainPage = () => {
	return (
		<main>
			<Header />
			<TrainingProgram />
			<Tariffs />
			<Bonus />
			<Review />
			<Result />
			<Question />
			<Help />
			<Footer />
		</main>
	)
}

export default MainPage
