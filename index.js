const userName = 'alecgalba'
const apiUrl = 'https://api.github.com'
const repo = 'alecgalba/javascript-fetch-lab'

function getIssues() {
  fetch(`${apiUrl}/repos/${repo}/issues`)
    .then(res => showIssues(res.json()))
}

function showIssues(json) {
  const template = Handlebars.compile(document.getElementById('issues-template').innerHTML)
  document.getElementById('issues').innerHTML = template(json)
}

function createIssue() {
  const issueTitle = document.getElementById('title').value
  const issueBody = document.getElementById('body').value
  const postData = { title: issueTitle, body: issueBody }

  fetch(`${apiUrl}/repos/${repo}/issues`, {
    method: 'POST',
    headers: {
      Authorization: `token ${getToken()}`
    },
    body: JSON.stringify(postData)
  }).then(res => getIssues())
}

function showResults(json) {
  const template = Handlebars.compile(document.getElementById('repo-template').innerHTML)
  document.getElementById('results').innerHTML = template(json)
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!
}

function getToken() {
  fetch(`${apiUrl}/repos/${repo}/forks`, {
    method: 'POST',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => showResults(res.json()))
  return ''
}

// function getIssues() {
//   const repo = 'kaileighrose/javascript-fetch-lab'
//   fetch('https://api.github.com/' + 'repos/' + repo + '/issues')
//     .then(res => res.json())
//     .then(json => showIssues(json));
// }

// function showIssues(json) {
//   var source = document.getElementById('issues-template').innerHTML;
//   var template = Handlebars.compile(source);
//   var context = {title: json, body: json};
//   var html = template(context);
// }

// function createIssue() {
//   const token = getToken();
//   const postData = {
//     title: 'test',
//     body: 'test body'
//   };
//   const repo = 'kaileighrose/javascript-fetch-lab'
//   fetch('https://api.github.com/' + 'repos/' + repo + '/issues', {
//   method: 'POST',
//   body: JSON.stringify(postData),
//   headers: {
//     Authorization: `token ${token}`
//   }
// })
//     .then(getIssues());
// }

// function showResults(json) {
//   var sourceResults = document.getElementById('repo-template').innerHTML;
//   var templateResults = Handlebars.compile(sourceResults);
//   var context = {html_url: json, full_name: json};
//   var html = templateResults(context);
// }

// function forkRepo() {
//   const token = getToken();
//   const repo = 'learn-co-curriculum/javascript-fetch-lab'
//   fetch('https://api.github.com/' + 'repos/' + repo + '/forks', {
//   method: 'POST',
//   headers: {
//     Authorization: `token ${token}`
//   }
// })
//     .then(res => res.json())
//     .then(json => showResults(json));

// }

// function getToken() {
//   //change to your token to run in browser, but set
//   //back to '' before committing so all tests pass
//   return ''
// }