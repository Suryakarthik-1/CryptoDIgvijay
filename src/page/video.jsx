import BreadCrumb from "../../src/components/common/Breadcrumb";
import PortfolioList from "../../src/components/portfolio/one/PortfolioList";
function PortfolioOneColumn() {
	return (
		<>
			<BreadCrumb title="Latest Videos 🔥" />
			<PortfolioList />
		</>
	);
}

export default PortfolioOneColumn;
