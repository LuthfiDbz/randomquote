const contentHTML = document.getElementById('content')
const changeButton = document.getElementById('change')

const getQuote =  async () => {
	let url = 'https://programming-quotes-api.herokuapp.com/Quotes/random'
	try {
		let res = await fetch(url)
		return await res.json()
	} catch (error) {
		console.log(error);
	}
}

const renderQuote = async () => {
	let quote = await getQuote()
	const content = `
										<h1 class="quote">"${quote.en}"</h1>
										<p class="author">-- ${quote.author}</p>
									`
	contentHTML.innerHTML = content
}

renderQuote()

changeButton.addEventListener('click', () => {
	renderQuote()
})
