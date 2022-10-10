import { Button, Form, Input, InputNumber } from "antd";
import { FormProps, Question } from "../models/formDataModels";

const FeedbackForm: React.FC<FormProps> = ({
	formQuestions,
	formSubmitHandler,
}: FormProps) => {
	return (
		<Form onFinish={formSubmitHandler} layout="vertical" labelAlign="left">
			{formQuestions?.map((q: Question, ind: number) => {
				return (
					<div key={q.questionId}>
						<h3 style={{ fontWeight: 700 }}>Question #{ind + 1}</h3>
						<Form.Item
							label={
								<span style={{ fontWeight: 500, fontSize: "1.125rem" }}>
									{q.label}
								</span>
							}
							name={q.questionId}
							rules={[
								{
									required: q.required,
									message: "This field is required",
								},
							]}
						>
							{q.questionType === "rating" ? (
								<InputNumber
									style={{ width: "100%", borderRadius: "8px" }}
									min={q?.attributes?.min}
									max={q?.attributes?.max}
									size={"large"}
								/>
							) : (
								<Input style={{ borderRadius: "8px" }} size={"large"} />
							)}
						</Form.Item>
					</div>
				);
			})}

			<Button
				type="primary"
				htmlType="submit"
				style={{
					background: "#cb2121",
					border: "none",
					width: "100%",
					fontWeight: 600,
					borderRadius: "8px",
				}}
				size="large"
			>
				Submit
			</Button>
		</Form>
	);
};

export default FeedbackForm;
