// 👉 À TOI DE JOUER
// Complète ce composant pour qu'il reçoive des props "firstName" et "lastName"
// et affiche "Hello [firstName] [lastName] !".

// {firstName, lastName} => props: {firstName: "Alice", lastName: "Smith"} => props.firstName => "Alice", props.lastName => "Smith"
function Greeting(props) {
    return <h1>Hello {props.firstName} {props.lastName}!</h1>
}
export default Greeting
