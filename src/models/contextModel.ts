import { Dispatch, SetStateAction } from "react";
import { ResponseData, SubmittedAnswer } from "./formDataModels";

export interface ContextModel {
	data: ResponseData | undefined;
	setData?: Dispatch<SetStateAction<ResponseData | undefined>>;
	loading: boolean;
	setLoading?: Dispatch<SetStateAction<boolean>>;
	submittedAnswer: SubmittedAnswer[] | undefined;
	setSubmittedAnswer?: Dispatch<SetStateAction<SubmittedAnswer[] | undefined>>;
	getFormDataHandler: () => void;
	submitForm: (values: any) => void;
}
