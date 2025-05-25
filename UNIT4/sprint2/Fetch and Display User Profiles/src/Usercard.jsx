export default function Usercard({user}){
    return(
        <div>
            <p><strong>name:</strong>{user.name}</p>
            <p><strong>email:</strong>{user.email}</p>
            <p><strong>city:</strong>{user.address.city}</p>
        </div>
    )
}