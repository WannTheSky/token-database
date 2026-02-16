import fs from 'fs';
import path from 'path';

export default function handler(req, res){
  if(req.method !== 'POST') return res.status(405).json({message:'Only POST'});

  const filePath = path.join(process.cwd(),'public','raw');
  const token = req.body.token;

  let data = JSON.parse(fs.readFileSync(filePath));
  if(!data.includes(token)){
    data.push(token);
    fs.writeFileSync(filePath, JSON.stringify(data,null,2));
  }

  res.json({message:'Token Added Successfully'});
}
