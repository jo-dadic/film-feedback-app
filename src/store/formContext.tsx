import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ContextModel } from "../models/contextModel";
import { ResponseData, SubmittedAnswer } from "../models/formDataModels";

const url = "http://localhost:3020/api/v1/survey";

const defaultValue: ContextModel = {
	data: undefined,
	setData: undefined,
	loading: false,
	submittedAnswer: undefined,
	setLoading: () => false,
	setSubmittedAnswer: undefined,
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

	const getFormDataHandler = useCallback(() => {
		setLoading(true);
		fetch(url)
			.then((response) => response.json())
			.then((data) => setData(data.data))
			.finally(() => setLoading(false));
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
								answer: values.film,
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
			.then((response) => setSubmittedAnswer(response.data.attributes.answers))
			.finally(() => [navigate("/success"), setLoading(false)])
			.catch(() => navigate("/"));
	};

	const values: ContextModel = {
		data,
		loading,
		submittedAnswer,
		getFormDataHandler,
		setSubmittedAnswer,
		submitForm,
	};

	return <FormContext.Provider value={values}>{children}</FormContext.Provider>;
};

export { FormContext, FormContextProvider };
