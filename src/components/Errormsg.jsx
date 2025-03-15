// Component to display error messages
function Errormsg({error}){
    return(
        <div className="errorMsg">
            <p>{error}</p>
        </div>
    )
}

export default Errormsg