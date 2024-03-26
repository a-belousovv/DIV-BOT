import SharedButton from '../shared/Shared-Button'
import QuestionItem from './QuestionItem'

const Question = () => {
	const questionArray = [
		{
			id: '1',
			title: 'Почему я могу считать тебя экспертом в теме спорта и питания?',
			content: [
				{
					id: '1',
					title:
						'У меня богатый опыт в составлении групповых тренировок с инвентярем и без, кардио и функционального треннинга, силовых занятий в тренажерном зале. И для тебя будет подобран оптимальный вариант💯',
				},
				{
					id: '2',
					title:
						'Я четко знаю, как привести свое тело в порядок и при этом не навредить. У меня есть собственный опыт и авторская методика грамотного похудения без вреда для здоровья. Если твоя цель - эффективный набор мышечной массы - в этом я тоже профи😉',
				},
			],
		},
		{
			id: '2',
			title: "Какие ключевые преимущества подписки на бот ᗪIᐯ'ный бот",

			content: [
				{
					id: '3',
					title:
						'Доступ к персональному “тренеру” в твоем телефоне с индивидуальным подходом. Подписка стоит МЕНЬШЕ, чем одна тренировка с тренером, а приносит ценности в 10 раз выше.',
					text: 'вот что говорят о моих бесплатных продуктах👇',
					imgs: [
						'/pictures/Question/img-1.png',
						'/pictures/Question/img-2.png',
					],
					isAddedImg: true,
					isAddedText: true,
				},
				{
					id: '4',
					title:
						'Чат для поддержки и вдохновения с ребятами, которых объединяет одна цель - жизнь в здоровом и счастливом теле, а также возможности получить ответы на волнующие вопросы от меня лично и от других экспертов.',
				},
				{
					id: '5',
					title:
						'Постоянно растущая база материалов по здоровью, питанию, дисциплине и тренировкам',
				},
			],
		},
		{
			id: '3',
			title: 'Подойдет ли это конкретно мне?',

			content: [
				{
					id: '6',
					title:
						'ДА, если у тебя нет возможности или желания заниматься с тренером, но ты хочешь выполнять упражнения правильно и результативно',
				},
				{
					id: '7',
					title:
						'ДА, если ты постоянно критикуешь свое тело и хочешь все изменить',
				},
				{
					id: '8',
					title:
						'ДА, если ты боишься ошибиться при выполнении упражнения, бот все расскажет и ПОКАЖЕТ',
				},
				{
					id: '9',
					title:
						'ДА, если ты не умеешь составлять себе тренировки, бот все умеет😎',
				},
				{
					id: '10',
					title:
						'ДА, если ты занимаешься с тренером, а результата все нет и жалко выброшенных денег. Месячная подписка на бота стоит меньше разовой тренировки с тренером, ты ничего не теряешь, просто доверься боту, я вложила туда все свои знания⚡️',
				},
				{
					id: '11',
					title:
						'ДА, если ты боишься быть "белой вороной". Бот все подробно расскажет и покажет и ты точно не будешь выделяться из толпы качков',
				},
				{
					id: '12',
					title:
						' ДА, если в твоей голове давно есть мысль заняться собой, это тот самый шанс!',
				},
				{
					id: '13',
					title:
						'ДА, если надоели рекламы в фитнес-приложениях, бот такого не допустит',
				},
				{
					id: '14',
					title:
						'ДА, если хочется разнообразных эффективных тренировок, в моей базе более 330 упражнений',
				},
			],
		},
		{
			id: '4',
			title: 'Как продлевать подписку на бот?',
			content: [
				{
					id: '15',
					title: 'Ты можешь купить подписку на новый месяц в любой момент 👇',
					imgs: ['/pictures/Question/img-3.png'],
					isAddedImg: true,
				},
			],
		},
	]
	return (
		<div className='question'>
			<div className='block-container'>
				<div className='question__box'>
					<h3 className='question__title'>У тебя могли остаться вопросы</h3>
					<div className='question__items'>
						{questionArray.map((item) => {
							return (
								<QuestionItem
									key={item.id}
									title={item.title}
									content={item.content}
								/>
							)
						})}
					</div>
					<SharedButton href='#tariffs' color='blue' text='УЧАСТВОВАТЬ' />
				</div>
			</div>
		</div>
	)
}

export default Question
