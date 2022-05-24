import fetch from "node-fetch";
import "dotenv/config";
import fs from "fs";

// Change this values if you don't use environment variables
// If you are using environment variables keep this unchanged

var githubConvertedToken = "Your Github Token Here";
var githubUserName = "Your Github Username Here";
var mediumUserName = "Your Medium Username Here";

if (githubUserName === "Your Github Username Here") {
  githubUserName = process.env.GITHUB_USERNAME;
}

if (githubConvertedToken === "Your Github Token Here") {
  githubConvertedToken = process.env.GITHUB_TOKEN;
}

if (mediumUserName === "Your Medium Username Here") {
  mediumUserName = process.env.MEDIUM_USERNAME;
}

if (githubUserName === undefined || githubConvertedToken === undefined) {
  console.log("Skipping GitHub Data!\n");
} else {
  const query_user = {
    query: `
query{
  user(login:"${githubUserName}") { 
    name
    bio
    isHireable
    location
    avatarUrl
    }
}
`,
  };

  const query_pr = {
    query: `
	query {
	  user(login: "${githubUserName}"){
	    pullRequests(last: 100, orderBy: {field: CREATED_AT, direction: DESC}){
      totalCount
      nodes{
        id
        title
        url
        state
	      mergedBy {
	          avatarUrl
	          url
	          login
	      }
	      createdAt
	      number
        changedFiles
	      additions
	      deletions
        baseRepository {
	          name
	          url
	          owner {
	            avatarUrl
	            login
	            url
	          }
	        }
      }
    }
	}
}
	`,
  };

  const query_issue = {
    query: `query{

		user(login: "${githubUserName}") {
    issues(last: 100, orderBy: {field:CREATED_AT, direction: DESC}){
      totalCount
      nodes{
      	id
        closed
        title
        createdAt
        url
        number
        assignees(first:100){
          nodes{
            avatarUrl
            name
            url
          }
        }
        repository{
          name
          url
          owner{
            login
            avatarUrl
            url
          }
        }
      }
    }
  }

	}`,
  };

  const query_org = {
    query: `query{
	user(login: "${githubUserName}") {
	    repositoriesContributedTo(last: 100){
	      totalCount
	      nodes{
	        owner{
	          login
	          avatarUrl
	          __typename
	        }
	      }
	    }
	  }
	}`,
  };

  const query_pinned_projects = {
    query: `
	query { 
	  user(login: "${githubUserName}") { 
	    pinnedItems(first: 6, types: REPOSITORY) {
	      totalCount
	      nodes{
	        ... on Repository{
	          id
		          name
		          createdAt
		          url
		          description
		          isFork
		          forkCount
                  stargazers {
                      totalCount
                  }
		          languages(first:10){
		            nodes{
		              name
		            }
		          }
	        }
	      }
		  }
	  }
	}
	`,
  };

  const baseUrl = "https://api.github.com/graphql";

  const headers = {
    "Content-Type": "application/json",
    Authorization: "bearer " + githubConvertedToken,
  };

  fetch(baseUrl, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(query_user),
  })
    .then((response) => response.text())
    .then((txt) => {
      const data = JSON.parse(txt);
      //    console.log(data);
      if (data != null) {
        if (data["message"]) {
          if (data["message"] === "Bad credentials") {
            console.log("Wrong Github Token");
          }
          console.log(data["message"]);
        }
        if (data["errors"]) {
          console.log(data["errors"]);
        }
        var cropped = { data: [] };
        cropped["data"] = data["data"]["user"];
        console.log("Fetching the User Data.\n");
        fs.writeFile(
          "./src/shared/opensource/user.json",
          JSON.stringify(cropped),
          function (err) {
            if (err) {
              console.log(err);
            }
          }
        );
      }
    })
    .catch((error) => console.log(JSON.stringify(error)));

  fetch(baseUrl, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(query_pr),
  })
    .then((response) => response.text())
    .then((txt) => {
      const data = JSON.parse(txt);
      if (data != null) {
        var cropped = { data: [] };
        cropped["data"] = data["data"]["user"]["pullRequests"]["nodes"];

        var open = 0;
        var closed = 0;
        var merged = 0;
        for (var i = 0; i < cropped["data"].length; i++) {
          if (cropped["data"][i]["state"] === "OPEN") open++;
          else if (cropped["data"][i]["state"] === "MERGED") merged++;
          else closed++;
        }

        cropped["open"] = open;
        cropped["closed"] = closed;
        cropped["merged"] = merged;
        cropped["totalCount"] = cropped["data"].length;

        console.log("Fetching the Pull Request Data.\n");
        fs.writeFile(
          "./src/shared/opensource/pull_requests.json",
          JSON.stringify(cropped),
          function (err) {
            if (err) {
              console.log(err);
            }
          }
        );
      }
    })
    .catch((error) => console.log(JSON.stringify(error)));

  fetch(baseUrl, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(query_issue),
  })
    .then((response) => response.text())
    .then((txt) => {
      const data = JSON.parse(txt);
      if (data != null) {
        var cropped = { data: [] };
        cropped["data"] = data["data"]["user"]["issues"]["nodes"];

        var open = 0;
        var closed = 0;
        for (var i = 0; i < cropped["data"].length; i++) {
          if (cropped["data"][i]["closed"] === false) open++;
          else closed++;
        }

        cropped["open"] = open;
        cropped["closed"] = closed;
        cropped["totalCount"] = cropped["data"].length;

        console.log("Fetching the Issues Data.\n");
        fs.writeFile(
          "./src/shared/opensource/issues.json",
          JSON.stringify(cropped),
          function (err) {
            if (err) {
              console.log(err);
            }
          }
        );
      }
    })
    .catch((error) => console.log(JSON.stringify(error)));

  fetch(baseUrl, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(query_org),
  })
    .then((response) => response.text())
    .then((txt) => {
      const data = JSON.parse(txt);
      if (data != null) {
        const orgs = data["data"]["user"]["repositoriesContributedTo"]["nodes"];
        var newOrgs = { data: [] };
        for (var i = 0; i < orgs.length; i++) {
          var obj = orgs[i]["owner"];
          if (obj["__typename"] === "Organization") {
            var flag = 0;
            for (var j = 0; j < newOrgs["data"].length; j++) {
              if (JSON.stringify(obj) === JSON.stringify(newOrgs["data"][j])) {
                flag = 1;
                break;
              }
            }
            if (flag === 0) {
              newOrgs["data"].push(obj);
            }
          }
        }

        console.log("Fetching the Contributed Organization Data.\n");
        fs.writeFile(
          "./src/shared/opensource/organizations.json",
          JSON.stringify(newOrgs),
          function (err) {
            if (err) {
              console.log(err);
            }
          }
        );
      }
    })
    .catch((error) => console.log(JSON.stringify(error)));

  const languages_icons = {
    Python: "logos-python",
    "Jupyter Notebook": "logos-jupyter",
    HTML: "logos-html-5",
    CSS: "logos-css-3",
    JavaScript: "logos-javascript",
    "C#": "logos-c-sharp",
    Java: "logos-java",
    Shell: "simple-icons:shell",
    Ruby: "logos:ruby",
    PHP: "logos-php",
    Dockerfile: "simple-icons:docker",
    Rust: "logos-rust",
  };

  fetch(baseUrl, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(query_pinned_projects),
  })
    .then((response) => response.text())
    .then((txt) => {
      const data = JSON.parse(txt);
      // console.log(txt);
      if (data != null) {
        const projects = data["data"]["user"]["pinnedItems"]["nodes"];
        var newProjects = { data: [] };
        for (var i = 0; i < projects.length; i++) {
          var obj = projects[i];
          var langobjs = obj["languages"]["nodes"];
          var newLangobjs = [];
          for (var j = 0; j < langobjs.length; j++) {
            if (langobjs[j]["name"] in languages_icons) {
              newLangobjs.push({
                name: langobjs[j]["name"],
                iconifyClass: languages_icons[langobjs[j]["name"]],
              });
            }
          }
          obj["languages"] = newLangobjs;
          newProjects["data"].push(obj);
        }

        console.log("Fetching the Pinned Projects Data.\n");
        fs.writeFile(
          "./src/shared/opensource/projects.json",
          JSON.stringify(newProjects),
          function (err) {
            if (err) {
              console.log(JSON.stringify(err));
            }
          }
        );
      }
    })
    .catch((error) => console.log(JSON.stringify(error)));
}

const targetUrl = `http://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${mediumUserName}`;

if (mediumUserName) {
  console.log("Fetching Medium Blogs.\n");
  fetch(targetUrl, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.text())
    .then((txt) => {
      //console.log(txt);
      const data = JSON.parse(txt);
      //console.log(data);
      fs.writeFile("./src/shared/blogs.json", JSON.stringify(data), function (
        err
      ) {
        if (err) {
          console.log(err);
        }
      });
    })
    .catch((error) => console.log(JSON.stringify(error)));
} else {
  console.log("Skipping Medium Data!\n");
}
