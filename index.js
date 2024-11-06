import axios from 'axios';

let username = "JohnVitor-Dev";

async function getGitHubUser(username) {
    try {
        const response = await axios.get(`https://api.github.com/users/${username}`, {
            headers: {}
        });
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar usuário:', error.message);
    }
}

const userBusca = await getGitHubUser(username);

if (userBusca) {
    console.log('Dados do usuário:', userBusca);
}


