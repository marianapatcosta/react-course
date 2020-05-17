const user = {
    age: 26, 
    location: 'Porto'
};

const getLocation = (location) => {
/*     if (location) {
        return location;
    } 
    return 'unknown'
    */
    if (location) {
        return <p>Location: {location}</p>;
    }
}

const userName= 'Anna';
const userAge= '30';
const userLocation= 'London';
const template2 = (
    <div>
        <h1>{user.name ? user.name : 'Jane Doe'}</h1>
        {user.age && user.age >= 18 && <p> Age: {user.age}</p>} 
        {/* <p>Age: {user.age && user.age >= 18 ? user.age : '----'}</p> */}
        
        {/* <p>Location: {getLocation(user.location)}</p> */ }
        {/* getLocation(user.location) */}
        {user.location && <p>Location: {user.location}</p>}
    </div>
);
//var template = React.createElement("p", null, "This is JSX from app.js");
const appRoot = document.getElementById('app'); 

ReactDOM.render(template2, appRoot);