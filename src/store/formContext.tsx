import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ContextModel } from "../models/contextModel";
import { ResponseData, SubmittedAnswer } from "../models/formDataModels";

const url = "http://localhost:4000/api/v1/survey";

const defaultValue: ContextModel = {
	data: undefined,
	submittedAnswer: undefined,
	loading: false,
	errors: "",
	setData: undefined,
	setSubmittedAnswer: undefined,
	setLoading: () => false,
	setErrors: () => "",
	getFormDataHandler: () => {},
	submitForm: () => {},
};

const FormContext = React.createContext(defaultValue);

const FormContextProvider = ({ children }: any) => {
	const navigate = useNavigate();

	const [data, setData] = useState<ResponseData>();
	const [submittedAnswer, setSubmittedAnswer] = useState<
		SubmittedAnswer[] | undefined
	>();
	const [loading, setLoading] = useState<boolean>(false);
	const [errors, setErrors] = useState<string>("");

	const getFormDataHandler = useCallback(() => {
		setLoading(true);
		fetch(url)
			.then((response) => response.json())
			.then((data) => setData(data.data))
			.then(() => setLoading(false))
			.catch((error) => [setErrors(error), setLoading(false)]);
	}, []);

	const submitForm = (values: any) => {
		const surveyId = data?.id;

		setLoading(true);
		fetch(`${url}/${surveyId}/answers`, {
			method: "POST",
			headers: [["Content-Type", "application/json"]],
			body: JSON.stringify({
				data: {
					type: "surveyAnswers",
					attributes: {
						answers: [
							{
								questionId: "film",
								answer: values.film?.trim(),
							},
							{
								questionId: "review",
								answer: values.review,
							},
						],
					},
				},
			}),
		})
			.then((response) => response.json())
			.then((response) => {
				if (response.errors) {
					throw new Error("Something went wrong", { cause: response });
				}
				return response;
			})
			.then((response) => setSubmittedAnswer(response.data.attributes.answers))
			.then(() => navigate("/success"))
			.catch((error) => {
				setErrors(error.cause.errors[0].detail);
			})
			.finally(() => setLoading(false));
	};

	const values: ContextModel = {
		data,
		loading,
		submittedAnswer,
		errors,
		getFormDataHandler,
		submitForm,
		setSubmittedAnswer,
		setErrors,
	};

	return <FormContext.Provider value={values}>{children}</FormContext.Provider>;
};

export { FormContext, FormContextProvider };
