export const handleErrors = response => {
	if (!response.ok) {
		return response.json().then(resp => {
			console.log(Object.values(resp).flat())
			if (resp.detail) throw new Error(`${response.status} - ${resp.detail}`)
			else
				throw new Error(
					`${response.status} - ${Object.entries(resp)
						.map(([k, v]) => `${k}: ${v}`)
						.flat()
						.join("\r\n")}`
				)
		})
	}

	return response.json()
}
