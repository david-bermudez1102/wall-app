export const handleErrors = response => {
	if (!response.ok) {
		return response.json().then(resp => {
			console.log(resp)
			throw new Error(
				`${response.status} - ${
					resp.detail ||
					(resp.content || []).join(", ") ||
					(resp.non_field_errors || []).join(", ")
				}`
			)
		})
	}

	return response.json()
}
