console.log("Before");
getUser(1, function (user) {
  console.log(user);
  getRepos(user.name, (repos) => {
    console.log(repos);
  });
});
console.log("After");

const user = await getUser(1);
const repos = await getRepos(user.name);
const commits = await getCommits(repos[0]);

function getUser(id, callback) {
  setTimeout(() => {
    console.log("Reading from database...");
    callback({ id: id, name: "chuy" });
  }, 2000);
}

function getRepos(username, callback) {
  setTimeout(() => {
    console.log("Fetching from GitHub...");
    callback(["repo1", "repo2", "repo3"]);
  }, 2000);
}
