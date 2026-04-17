import { getAvatar } from "@/lib/roblox";

export default function Profile({params}){
return(
<div style={{padding:40}}>
<img src={getAvatar(params.username)} width="120"/>
<h2>{params.username}</h2>
<p>Roblox Developer Profile</p>
</div>
)
}
