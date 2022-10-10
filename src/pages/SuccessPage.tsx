import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Loading from "../components/Loading";
import { ContextModel } from "../models/contextModel";
import { FormContext } from "../store/formContext";

import { Space } from "antd";

const SuccessPage: React.FC = () => {
	const { submittedAnswer, loading } = useContext<ContextModel>(FormContext);
	const navigate = useNavigate();

	useEffect(() => {
		if (!submittedAnswer) {
			return navigate("/");
		}
	}, [navigate, submittedAnswer]);

	if (loading || !submittedAnswer) {
		return <Loading />;
	}

	console.log(submittedAnswer);

	return (
		<Space
			direction="vertical"
			size="middle"
			align="center"
			style={{ width: "100%" }}
		>
			<Header title="Thank you for the review!" />
			<h2 className="text-white text-center">
				You watched {submittedAnswer![0].answer} and you gave it{" "}
				{submittedAnswer![1].answer} stars!
			</h2>
		</Space>
	);
};

export default SuccessPage;
