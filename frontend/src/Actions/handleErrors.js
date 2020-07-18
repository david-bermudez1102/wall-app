export const handleErrors = response => {
	if (!response.ok) {
		return response.json().then(resp => {
			throw new Error(`${response.status} - ${resp.detail}`)
		})
	}

	return response.json()
}
