import './styles.css'



const renderHeader = (container : HTMLElement)=>{
    const userPhoto = localStorage.getItem('userPhoto')
    const userName = localStorage.getItem('userName')
    const htmlcontent = `
        <div class="header">
            <h1>App Auth Github</h1>
            <img src="${userPhoto}" alt="foto de ${userName}">
            <span>${userName}</span>
            <a href="logout.html">
                <img src="/assets/img/logout.png" alt="Sair">
            </a>
        </div>
    `
        container.innerHTML = htmlcontent
       
}

export default renderHeader