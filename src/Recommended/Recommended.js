import Buttons from '../components/Button';
import './Recommended.css';

function Recommended({handleChange}) {
    return <>
    <div>
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-flex">
            <Buttons handleChange={handleChange} value="all companies" title="All"/>
            <Buttons handleChange={handleChange} value="nike" title="Nike"/>
            <Buttons handleChange={handleChange} value="adidas" title="Adidas"/>
            <Buttons handleChange={handleChange} value="puma" title="Puma"/>
            <Buttons handleChange={handleChange} value="vans" title="Vans"/>
        </div>
    </div>
    </>
}

export default Recommended;