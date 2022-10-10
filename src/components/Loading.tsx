import { Space, Spin } from "antd";

const Loading = () => {
	return (
		<Space style={{ paddingTop: 50 }}>
			<Spin size="large" />
		</Space>
	);
};

export default Loading;
