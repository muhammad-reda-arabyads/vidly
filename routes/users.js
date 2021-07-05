const express = require("express");
const router = express.Router();

router.get("/:id", (req, res) => {
    getUser(req.params.id, getRepoistoriesForUser);
    res.send("done;");
});


function getRepoistoriesForUser(user) {
    getRepoistories(user.github, getCommits);
}

function getCommits(repos) {
    for (let i = 0; i < repos.length; i++) {
        getCommits(repos[i], displayCommits);
    }
}

function displayCommits(commits) {
    console.log(commits);
}

function getUser(id, callback) {
    setTimeout(() => {
        console.log("Reading User From Database...");
        callback({ id: id, name: "Reda", github: "afghany97" });
    }, 2000);
}


function getRepoistories(username, callback) {
    setTimeout(() => {
        callback([
            {
                id: 1,
                name: "test"
            },
            {
                id: 2,
                name: "tes"
            },
            {
                id: 3,
                name: "test3"
            },
        ])
    }, 1000);
}


function getCommits(repo, callback) {
    setTimeout(() => {
       callback([
           "init commit",
           "second commit",
           "install jenkins"
       ])
    }, 1500);
}
module.exports = router;