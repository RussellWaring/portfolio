import "./Chevron.css";

const Chevron = ({ onClick }) => {
  return (
    <button type="button" className="chevron" onClick={onClick} aria-label="Scroll down">
      <img src="/chevron.svg" alt="" className="chevron__icon" />
    </button>
  );
};

export default Chevron;