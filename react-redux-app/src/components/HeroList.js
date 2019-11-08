import React from 'react';
import { connect } from 'react-redux';
import { fetchHeroes } from '../actions';

// const healthTotal = hero => {
//     return hero.health + hero.armour + hero.shield
// }

function HeroList(props) {
    console.log('HeroList', props);
    return (
        <>
        <button className="hero-btn" onClick={() => props.fetchHeroes()}>Meet The Heroes!</button>
        {props.isFetching && <div>loading...</div>}
        {props.error && <div>{props.error.message}</div>}
        <div className="hero-container">
            {props.heroes.map(hero => (
                <div className="heroes" key={hero.id}>
                    <h2>{hero.name}</h2>
                    <p>Real Name: {hero.real_name}</p>
                    {/* <p>Total Health: {healthTotal} </p> */}
                    <div className="stats">
                        <p className="health">Health: {hero.health}</p>
                        <p className="armour">Armor: {hero.armour}</p>
                        <p className="shield">Shield: {hero.shield}</p>
                    </div>
                    <p className="description">{hero.description}</p>
                </div>
            ))}
        </div>
        </>
    );
}

const mapDispatchToProps = {
    fetchHeroes
}

export default connect(state => {
    console.log('mSTP.state', state);
    return state;
},
mapDispatchToProps)(HeroList);