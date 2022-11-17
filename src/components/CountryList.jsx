import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

function CountryList(props) {

    const [countries, setCountries] = useState([]);

    const { countriesData } = props;

    useEffect(() => {
        setCountries(countriesData);
    }, []);

  return (
    <div className="container">
        <div className="row">
            <div className="col-5" style={{maxheight: "90vh", overflow: "scroll"}}>
            <div className="list-group">
            {countries.map((country) => {
                return (
                    <Link className="list-group-item list-group-item-action" to={`/${country.alpha3Code}`}>{`${country.alpha2Code} ${country.name.common}`}</Link>
                );
            })}






            
              {/* <Link className="list-group-item list-group-item-action" to="/ABW"
                >🇦🇼 Aruba</Link>
              <Link className="list-group-item list-group-item-action" to="/AFG"
                >🇦🇫 Afghanistan</Link>
              <Link className="list-group-item list-group-item-action" to="/AGO"
                >🇦🇴 Angola</Link>
              <Link className="list-group-item list-group-item-action" to="/AIA"
                >🇦🇮 Anguilla</Link>
              <Link className="list-group-item list-group-item-action" to="/ALA"
                >🇦🇽 Åland Islands</Link>
              <Link className="list-group-item list-group-item-action" to="/ALB"
                >🇦🇱 Albania</Link>
              <Link className="list-group-item list-group-item-action" to="/AND"
                >🇦🇩 Andorra</Link>
              <Link className="list-group-item list-group-item-action" to="/ARE"
                >🇦🇪 United Arab Emirates</Link>
              <Link className="list-group-item list-group-item-action" to="/ARG"
                >🇦🇷 Argentina</Link>
              <Link className="list-group-item list-group-item-action" to="/ARM"
                >🇦🇲 Armenia</Link>
              <Link className="list-group-item list-group-item-action" to="/ASM"
                >🇦🇸 American Samoa</Link>
              <Link className="list-group-item list-group-item-action" to="/ATA"
                >🇦🇶 Antarctica</Link>
              <Link className="list-group-item list-group-item-action" to="/FLK"
                >🇫🇰 Falkland Islands</Link>
              <Link className="list-group-item list-group-item-action active" to="/FRA"
                >🇫🇷 France</Link>
              <Link className="list-group-item list-group-item-action" to="/ZWE"
                >🇿🇼 Zimbabwe</Link> */}
            </div>
          </div>
        </div>
    </div>
  )
}

export default CountryList