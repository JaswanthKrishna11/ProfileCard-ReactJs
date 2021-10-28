import './Phone.css';

const Phone = ({ type, number }) => (
    <div className="phoneNumber">
        <p>{type}: {number}</p>
    </div>
);

export default Phone;