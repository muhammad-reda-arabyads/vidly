const express = require("express");
const router = express.Router();

router.get("/:id", (req, res) => {
    getUser(req.params.id, user => {
        getRepoistories(user.github, repos => {
            console.log(repos)
            getCommits(repos[0], commits => {
                console.log(commits);
            });
        });
    });
    res.send("done;");
});

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
            "12",
            "12124",
            "13413412"
        ]);
    }, 1500);
}
module.exports = router;