import { Dispatch, SetStateAction } from "react";
import { ResponseData, SubmittedAnswer } from "./formDataModels";

export interface ContextModel {
	data: ResponseData | undefined;
	submittedAnswer: SubmittedAnswer[] | undefined;
	loading: boolean;
	errors: any[];
	setData?: Dispatch<SetStateAction<ResponseData | undefined>>;
	setSubmittedAnswer?: Dispatch<SetStateAction<SubmittedAnswer[] | undefined>>;
	setLoading?: Dispatch<SetStateAction<boolean>>;
	setErrors: Dispatch<SetStateAction<[]>>;
	getFormDataHandler: () => void;
	submitForm: (values: any) => void;
}
