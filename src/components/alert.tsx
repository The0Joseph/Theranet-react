import "../assets/alert.css";

type alertModal = {
    title: string
}

function Alert({title}: alertModal) {
    
    return (
        <>
            <div className="modalAlert">
                <div className="modal-content">
                    <div className="modal-icon">⚠️</div>
                    <div className="modal-body">
                        <h2>{title}</h2>
                        <div className="modal-buttons">
                            <button>Sí</button>
                            <button>No</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Alert;