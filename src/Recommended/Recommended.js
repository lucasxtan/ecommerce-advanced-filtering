import Buttons from '../components/Button';
import './Recommended.css';

function Recommended({handleChange, selectedCompany}) {
    return <>
    <div>
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-flex">
            <Buttons handleChange={handleChange} selectedCompany={selectedCompany} value="all companies" title="All"/>
            <Buttons handleChange={handleChange} selectedCompany={selectedCompany} value="nike" title="Nike"/>
            <Buttons handleChange={handleChange} selectedCompany={selectedCompany} value="adidas" title="Adidas"/>
            <Buttons handleChange={handleChange} selectedCompany={selectedCompany} value="puma" title="Puma"/>
            <Buttons handleChange={handleChange} selectedCompany={selectedCompany} value="vans" title="Vans"/>
        </div>
    </div>
    </>
}

export default Recommended;