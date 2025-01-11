const Objeto = {
    message: 'Hola Mundo',
    tittle: 'Tania'
};

const getResult = () => {
    return 4+5;
}
const newMessage = 'Wellcome to my First App'
const FirstApp = () => {
  return (
    <>
        <code>{JSON.stringify( Objeto)}</code>
        <h1>{ getResult()}</h1>
        <p>Bienvenidos</p>
    </>
  )
}

export default FirstApp
