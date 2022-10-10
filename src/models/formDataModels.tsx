export interface ResponseData {
	attributes: ResponseDataAttributes;
	id: string;
	type: string;
}

export interface ResponseDataAttributes {
	title: string;
	description: string;
	questions: Question[];
}

export interface Question {
	attributes: any;
	label: string;
	questionId: string;
	questionType: string;
	required: boolean;
}

export interface FormProps {
	formQuestions?: Question[];
}

export interface SubmittedAnswer {
	questionId: string;
	answer: string | number;
}
