export const validateEmailRegex = (value: string): boolean => {
	const reg = new RegExp(/\S+@\S+\.\S+/g);
	const result = reg.test(value);

	return result;
};
