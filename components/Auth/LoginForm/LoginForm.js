export default function LoginForm({ showRegisterForm }) {
    return (
        <div>
            <h1>estamos en el form del login</h1>
            <button onClick={showRegisterForm}>Ir al registro</button>
        </div>
    )
}
