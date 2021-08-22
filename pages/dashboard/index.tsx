import Card from '../../components/Card';
import Layout from '../../components/Layout';

const Dashboard = () => {
	return (
		<Layout active="dashboard">
			<div className="d-flex">
				<Card />
				<Card />
				<Card />
			</div>
		</Layout>
	);
};

export default Dashboard;
