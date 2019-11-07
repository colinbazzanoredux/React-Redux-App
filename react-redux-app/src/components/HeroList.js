import React from 'react';
import { connect } from 'react-redux';
import { fetchHeroes } from '../actions';

function HeroList(props) {
    console.log('HeroList', props);
    return (
        <>
        <button onClick={() => props.fetchHeroes()}>Meet The Heroes!</button>
        {props.isFetching && <div>👻</div>}
        {props.error && <div>{props.error.message}</div>}
        <div>
            {props.heroes.map(hero => (
                <p className="heroes" key={hero.id}>
                    {hero.name}
                </p>
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