export const IconCard = ({ icon, isSelected, onClick }) => {
    return (
        <div className={`icon-card ${isSelected ? 'selected' : ''}`} onClick={() => onClick(icon)}>
            <img src={`${icon}`} alt="Avatar" className="avatar" />
        </div>
    );
};

export const handleUploadImage = (setImage) => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };
    input.click();
};
