export const IconCard = ({ icon, isSelected, onClick }) => {
    return (
        <div className={`icon-card ${isSelected ? 'selected' : ''}`} onClick={() => onClick(icon)}>
            <img src={`${icon}`} alt="Avatar" className="avatar" />
        </div>
    );
};

