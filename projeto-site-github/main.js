import { requestUser } from "./module/request.js"

const $inputSearch = document.getElementById('name-user');
const $main = document.getElementsByTagName('main')[0];
$inputSearch.addEventListener('blur', renderUsers);

function renderUsers() {

    const renderImgSectionImg = ($sectionImg, img) => {
        $sectionImg.innerHTML = ''
        const imageTag = document.createElement('img');
        imageTag.src = img;
        imageTag.alt = 'foto do perfil';
        imageTag.id = 'img-perfil';
        imageTag.style.boxShadow = '0px 0px 5px rgba(0, 0, 0, 0.466)'
        $sectionImg.appendChild(imageTag);
    }
    const renderInfoSectionInfo = ($sectionInfoUser, info) => {
        const contentUserInfo = `
        <div id="user-data"> 
        <h1 id="h1-name" class="user-h1">${info.nome}</h1>
        <h2 id="h2-name" class="user-h2">${info.login}</h2>
        <p id="bio-p" class="user-p">${info.bio}</p>
        <p id="location-p" class="user-p">&#x1F3E0; ${info.location}.</p>
        <p id="following-p" class="user-p"> &#x1F4CC; Sequindo: ${info.sequindo}.</p>
        <p id="followers-p" class="user-p">&#x1F4CC; Sequidores: ${info.sequidores}.</p>
        </div>`;
 
        $main.style.display = 'flex';
        $main.style.justifyContent = 'center';
        $sectionInfoUser.innerHTML = contentUserInfo;
    }
    if ($inputSearch.value.length !== 0) {
        const $statusH1 = document.getElementById('status')
        const $sectionImg = document.querySelector('#img-perfil');
        const $sectionInfoUser = document.querySelector('#info-perfil');

        const nameSearch = String($inputSearch.value)
            .replaceAll(" ", "");
        $statusH1.innerHTML = "Carregando dados.....";

        const dataRequest = requestUser(nameSearch);
        dataRequest.then(getDate => {
            if(getDate[1] === true){
                 $main.innerHTML = `<div id="alert">${getDate[0]}: <i class="fa-solid fa-cloud-exclamation"></i>
                  Ouve um erro ao buscar as informações, por favor verifique os dados ou sua conexão.</div>`;
                const $alert = document.getElementById('alert')
                $alert.style.margin = 'auto'
            }else{
                const $statusDiv = document.getElementsByClassName('status-div')[0]
                $statusDiv.style.display = 'none'
                renderImgSectionImg($sectionImg, getDate.image);
                renderInfoSectionInfo($sectionInfoUser, getDate);
    
            }
        })



    }


}
