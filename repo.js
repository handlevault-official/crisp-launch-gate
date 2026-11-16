const launchData = {
    mission: "Mainnet Go-Live",
    window: "T-Minus 24 Hours",
    status: "Greenlight"
};

function showSuccess() {
    document.getElementById('stepGate').classList.add('hidden');
    document.getElementById('resMission').innerText = launchData.mission;
    document.getElementById('resWindow').innerText = launchData.window;
    document.getElementById('resCode').innerText = 'CRISP-LAUNCH-' + Math.random().toString(36).substring(2, 7).toUpperCase();
    
    document.getElementById('stepPass').classList.remove('hidden');
}
