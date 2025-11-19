// TODO: ضع روابط RAW_URL و API_URL و TOKEN هنا بعد الإنشاء
const RAW_URL = "YOUR_RAW_GIST_URL";
const API_URL = "https://api.github.com/gists/YOUR_GIST_ID";
const TOKEN = "YOUR_GITHUB_TOKEN";

async function loadClients(){
    let r = await fetch(RAW_URL);
    let d = await r.json();

    let html = `<table class='w-full bg-gray-800 rounded'>
    <tr class='border-b border-gray-700'>
        <th class='p-3'>Key</th>
        <th class='p-3'>Expires</th>
        <th class='p-3'>HWID</th>
        <th class='p-3'>Status</th>
        <th class='p-3'>Actions</th>
    </tr>`;

    for(let k in d.clients){
        let c = d.clients[k];

        html += `
        <tr class='border-b border-gray-700 text-center'>
            <td class='p-3'>${k}</td>
            <td class='p-3'>${c.expires}</td>
            <td class='p-3'>${c.hwid}</td>
            <td class='p-3'>${c.status}</td>
            <td class='p-3'>
                <button class='bg-blue-600 px-3 py-1 rounded'>Edit</button>
            </td>
        </tr>`;
    }

    html += `</table>`;
    document.getElementById("clients").innerHTML = html;
}

loadClients();
