import { useLocation, useNavigate } from "react-router-dom";
import queryString from 'query-string';
import { useForm } from "../../hooks/useForm";
import { HeroCard } from "../components/HeroCard";
import { getHeroesByName } from "../helpers/getHeroByName";

export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const { q = '' } = queryString.parse(location.search);

  const heroes = getHeroesByName(q);
  
  const showError =  (q.length > 0) && heroes.length === 0;

  const {searchText, onInputChange} = useForm({
    searchText: q,
  });

  const onSearchSubmit = (e) => {
    e.preventDefault();
    if (searchText.trim().length <= 1) return;

    navigate(`?q=${ searchText }`);
  }

  return (
    <>
        <h1>SearchPage</h1>
        <hr />

      <div className="row">

        <div className="col-5">
          <h4>Searching</h4>
          <hr />

          <form onSubmit={onSearchSubmit} aria-label="form">
            <input type="text" value={searchText} onChange={onInputChange} placeholder="Search a Hero" className="form-control" name="searchText" autoComplete="off" />
            <button className="btn btn-outline-primary mt-1">Search</button>
          </form>
        </div>
        
        <div className="col-7">

          <h4>Results</h4>
          <hr />

          <div className="alert alert-primary" style={{ display: q !== '' ? 'none' : ''}}>
            Search a Hero
          </div>

          <div aria-label="alert-danger" className="alert alert-danger" style={{ display: showError ? '' : 'none' }}>
            No Hero with <b>{q}</b>
          </div>

          {
            heroes.map( hero => (
              <HeroCard key={hero.id} {...hero} />
            ))
          }

        </div>

      </div>
    </>
  )
}
