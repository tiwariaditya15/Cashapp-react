export default function Warn({ msg }){
    return(
        <div className="warn-message">
            <div className="flex">
                {msg}
            </div>
        </div>
    );
}