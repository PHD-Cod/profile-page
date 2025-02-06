
function updateProfileInfo(profileData) {
    const photo = document.getElementById('profile.photo')
    photo.src = profileData.photo
    photo.alt = profileData.name

    const name = document.getElementById('profile.name')
    name.innerText = profileData.name

    const job = document.getElementById('profile.job')
    job.innerText = profileData.job

    const location = document.getElementById('profile.location')
    location.innerText = profileData.location

    const email = document.getElementById('profile.email')
    email.innerText = profileData.email
    email.href = `mailto:${profileData.email}`

}

function updatePersonal(profileData) {
    const personal = document.getElementById('profile.skills.personal')
    personal.innerHTML = profileData.skills.personal.map(skill => `<li>${skill}</li>`).join('')
}

function updateProfessional(profileData) {
    const professional = document.getElementById('profile.skills.professional')
    professional.innerHTML = profileData.skills.professional.map(skill => `<li><img src="${skill.logo}" alt="${skill.name}" title="${skill.name}"></li>`).join('')
}

function updateLanguages(profileData) {
    const languages = document.getElementById('profile.languages')
    languages.innerHTML = profileData.languages.map(language => `<li>${language}</li>`).join('')
}

function updatePortifolio(profileData) {
    const portifolio = document.getElementById('profile.portifolio')
    portifolio.innerHTML = profileData.portifolio.map(portifolio => `<li>${portifolio}</li>`).join('')
}

(async () => {

    const profileData = await fetchProfileData()
    updateProfileInfo(profileData)
    updatePersonal(profileData)
    updateProfessional(profileData)
    updateLanguages(profileData)
    console.log(profileData)
    
})()