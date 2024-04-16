async function obterDadosGithub() {
    try {
        const response = await fetch('https://api.github.com/users/Filipe081');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erro ao obter os dados do GitHub:', error);
        throw error;
    }
}

// Aqui usei a Função para preencher os elementos HTML com os dados obtidos do meu GitHub
async function preencherDadosUsuario() {
    try {
        const dadosGithub = await obterDadosGithub();

        document.querySelector('.profile-avatar').src = dadosGithub.avatar_url;
        document.querySelector('.profile-name').textContent = dadosGithub.name;
        document.querySelector('.profile-username').textContent = `@${dadosGithub.login}`;
        document.querySelectorAll('.numbers-item')[0].textContent = dadosGithub.public_repos;
        document.querySelectorAll('.numbers-item')[1].textContent = dadosGithub.followers;
        document.querySelectorAll('.numbers-item')[2].textContent = dadosGithub.following;
        document.querySelector('.profile-link').href = dadosGithub.html_url;
    } catch (error) {
        console.error('Erro ao preencher os dados do usuário:', error);
    }
}

// Aqui apenas usei para requisitar e Chamar a função para preencher os dados ao carregar a página.
window.addEventListener('DOMContentLoaded', preencherDadosUsuario);