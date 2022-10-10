import { useNavigate } from "react-router-dom";

import { Button, Result } from "antd";
import { useContext } from "react";
import { ContextModel } from "../models/contextModel";
import { FormContext } from "../store/formContext";

const Error: React.FC<any> = ({ errors }: { errors?: any[] | undefined }) => {
	const navigate = useNavigate();
	const { setErrors } = useContext<ContextModel>(FormContext);

	return (
		<Result
			status="error"
			title={
				<span className="text-white">
					Something went wrong! There's an error: {errors}
				</span>
			}
			extra={
				<Button
					type="primary"
					key="console"
					size="large"
					onClick={() => [setErrors(""), navigate("/")]}
					style={{
						background: "#cb2121",
						border: "none",
						fontWeight: 600,
						borderRadius: "8px",
					}}
				>
					Try Again
				</Button>
			}
		/>
	);
};

export default Error;
