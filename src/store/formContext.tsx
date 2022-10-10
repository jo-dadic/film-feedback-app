import React, { Dispatch, SetStateAction, useCallback, useState } from "react";
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
};

const FormContext = React.createContext(defaultValue);

export interface ContextModel {
	data: ResponseData | undefined;
	setData?: Dispatch<SetStateAction<ResponseData | undefined>>;
	loading: boolean;
	setLoading?: Dispatch<SetStateAction<boolean>>;
	submittedAnswer: SubmittedAnswer[] | undefined;
	setSubmittedAnswer?: Dispatch<SetStateAction<SubmittedAnswer[] | undefined>>;
	getFormDataHandler: () => void;
}

const FormContextProvider = ({ children }: any) => {
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

	const values: ContextModel = {
		data,
		loading,
		submittedAnswer,
		getFormDataHandler,
		setSubmittedAnswer,
	};

	return <FormContext.Provider value={values}>{children}</FormContext.Provider>;
};

export { FormContext, FormContextProvider };
