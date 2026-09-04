const HeaderFunction = () => {
	const getText = text => {
		return (
			<div>
				<h2>{text}</h2>
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti,
					velit?
				</p>
			</div>
		)
	}
	return <div>{getText('Sobirjon')}</div>
}

export default HeaderFunction //faqat bitta export bo'ladi
