/*
Make fetch requests in the browser for each of the following tasks.
Paste your code for fetch requests here once you finish each task.
*/

/* =============== 1. Print the status code of the response =============== */

fetch('/products').then(res => { console.log(res.status) });



/* ====== 2. Print true if the status of the response was successful ====== */

fetch('/products').then(res => { console.log(res.ok) });



/* =================== 3. Print the Content-Type Header =================== */

fetch('/products').then(res => { console.log(res.headers.get('Content-type')) });



/* ============== 4. Print the body of the response as text =============== */

fetch('/products')
  .then(res => res.text())
  .then(text => console.log(text));
