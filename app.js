const gitHub = new GitHub;
const ui = new UI;

gitHub.getUserData()
.then(data => {
    console.log(data.repos);

    ui.showProfile(data.profile);
    ui.showRepos(data.repos);

});