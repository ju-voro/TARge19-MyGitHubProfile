class GitHub {

    constructor(){
        this.client_ID = '8d3f4863d00401a49bd2';
        this.client_secret = 'a8a8786dc0aa8538f951aa1e18f61d48cdb436c2';
        this.repos_count = 10;
        this.repos_sort = 'created: asc';
        this.user = 'ju-voro';
        this.apiUrl = 'https://api.github.com/users/';
    }

    async getUserData(){
        // `` - backticks
        let urlProfile = `${this.apiUrl}${this.user}?client_id=${this.client_ID}&client_secret=${this.client_secret}`;
        let urlRepos = `${this.apiUrl}${this.user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_ID}&client_secret=${this.client_secret}`;

        const profileResponse = await fetch(urlProfile);
        const reposResponse = await fetch(urlRepos);

        const profile = await profileResponse.json();
        const repos = await reposResponse.json();

        return {
            profile,
            repos
        }
    }


}