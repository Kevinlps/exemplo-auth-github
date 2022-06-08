import './style.css'

const app =<HTMLDivElement>document.getElementById('app')
const token = localStorage.getItem('token')

if(token) {
  //TODO renderizar componentes da pagina home
} else{
  location.href = 'login.html'
}




export default{}