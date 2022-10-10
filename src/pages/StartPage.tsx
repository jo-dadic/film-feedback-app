import { useEffect, useContext } from "react";
import Loading from "../components/Loading";
import { ContextModel, FormContext } from "../store/formContext";

import { Space, Card } from "antd";
import Header from "../components/Header";
import { Question } from "../models/formDataModels";
import FeedbackForm from "../components/FeedbackForm";

const StartPage: React.FC = () => {
	const { data, loading, getFormDataHandler } =
		useContext<ContextModel>(FormContext);

	const formQuestions: Question[] | undefined = data?.attributes.questions;

	useEffect(() => {
		getFormDataHandler();
	}, [getFormDataHandler]);

	if (loading) {
		return <Loading />;
	}

	return (
		<Space
			direction="vertical"
			size="middle"
			align="center"
			style={{ width: "100%" }}
		>
			<Header title={data?.attributes.title} />

			<h3
				className="text-white text-center"
				dangerouslySetInnerHTML={{ __html: data?.attributes.description || "" }}
			></h3>

			<Card style={{ borderRadius: "8px" }}>
				<FeedbackForm formQuestions={formQuestions} />
			</Card>
		</Space>
	);
};

export default StartPage;
