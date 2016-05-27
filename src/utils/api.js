var api = {
  getBio(username){
    username = username.toLowerCase().trim();
    var url = `https://api.github.com/users/${username}`;
    return fetch(url).then((res) => res.json());
  },
  getRepos(username){
    username = username.toLowerCase().trim();
    var url = `https://api.github.com/users/${username}/repos`;
    return fetch(url).then((res) => res.json());
  },
  // S8.P1 Pedir un usuario
  getNotes(username){
    username = username.toLowerCase().trim();
    var url = `https://github-social.firebaseio.com/${username}.json`;
    return fetch(url).then((res) => res.json());
  },
  // S8.P2 Crear un usuario
  addNote(username, note){
    username = username.toLowerCase().trim();
    var url = `https://github-social.firebaseio.com/${username}.json`;
    return fetch(url, {
      method: 'post',
      body: JSON.stringify(note)
    }).then((res) => res.json());
  }
};

module.exports = api;
