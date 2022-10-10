import { useNavigate } from "react-router-dom";
import { Button, Result } from "antd";

const ErrorPage: React.FC = () => {
	const navigate = useNavigate();

	return (
		<Result
			status="404"
			title={<span className="text-white">404</span>}
			subTitle={
				<span className="text-white">
					"Sorry, the page you visited does not exist."
				</span>
			}
			extra={
				<Button
					type="primary"
					style={{ background: "#cb2121", border: "none" }}
					onClick={() => navigate("./")}
					size="large"
				>
					Back Home
				</Button>
			}
		/>
	);
};

export default ErrorPage;
