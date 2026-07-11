import { fallbackPlan } from './templates';

const SYSTEM=`You are a Minecraft building architect. Return ONLY valid JSON with keys name, size, difficulty, time, blocks (array of strings), and steps (array of [short title, exact block-by-block instruction]). Use survival-friendly materials and 8-14 clear steps. If an image is provided, use the visible terrain, estimate available dimensions, and recommend orientation. Never use markdown.`;

export async function generateBuildPlan({prompt,imageBase64,apiKey}){
 if(!apiKey) return fallbackPlan(prompt);
 const content=[{type:'text',text:`Design: ${prompt}. Give precise dimensions, coordinates relative to the front-left corner, quantities, and layer-by-layer instructions.`}];
 if(imageBase64) content.push({type:'image_url',image_url:{url:`data:image/jpeg;base64,${imageBase64}`}});
 const response=await fetch('https://openrouter.ai/api/v1/chat/completions',{method:'POST',headers:{'Content-Type':'application/json','Authorization':`Bearer ${apiKey}`,'X-Title':'BlockCraft AI'},body:JSON.stringify({model:'openrouter/free',messages:[{role:'system',content:SYSTEM},{role:'user',content}],response_format:{type:'json_object'}})});
 if(!response.ok) throw new Error(`AI request failed (${response.status})`);
 const data=await response.json();
 const text=data.choices?.[0]?.message?.content?.replace(/^```json|```$/g,'').trim();
 const plan=JSON.parse(text);
 return {...plan,id:'ai-'+Date.now(),emoji:'✨'};
}
