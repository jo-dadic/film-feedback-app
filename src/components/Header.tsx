const Header = ({ title }: { title: string | undefined }) => {
	return (
		<>
			<header className="header">
				<h1>{title?.toUpperCase()}</h1>
			</header>
		</>
	);
};

export default Header;
