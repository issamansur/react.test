const CurrentDateTime = () => {
    var currentDateTime = new Date().toLocaleString()

    return (
        <p>
            Текущее дата и время: {currentDateTime}
        </p>
    );
}

export default CurrentDateTime;