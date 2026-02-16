async function getTokens(){
  const res = await fetch('/raw');
  return await res.json();
}

async function checkToken(){
  const token = document.getElementById('tokenInput').value;
  const data = await getTokens();
  document.getElementById('result').innerText = 
    data.includes(token) ? "TOKEN VALID" : "TOKEN NOT FOUND";
}

async function addToken(){
  const token = document.getElementById('tokenInput').value;
  const res = await fetch('/api/token',{
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify({token})
  });
  const data = await res.json();
  document.getElementById('result').innerText = data.message;
}