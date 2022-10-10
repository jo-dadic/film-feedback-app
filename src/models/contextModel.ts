import { Dispatch, SetStateAction } from "react";
import { ResponseData, SubmittedAnswer } from "./formDataModels";

export interface ContextModel {
	data: ResponseData | undefined;
	submittedAnswer: SubmittedAnswer[] | undefined;
	loading: boolean;
	errors: string;
	setData?: Dispatch<SetStateAction<ResponseData | undefined>>;
	setSubmittedAnswer?: Dispatch<SetStateAction<SubmittedAnswer[] | undefined>>;
	setLoading?: Dispatch<SetStateAction<boolean>>;
	setErrors: Dispatch<SetStateAction<string>>;
	getFormDataHandler: () => void;
	submitForm: (values: any) => void;
}
