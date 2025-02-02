const scriptLoader = (url) => {

    return new Promise((resolve, reject) => {
        const newScript = document.createElement('script');
        newScript.src = url;
        document.body.appendChild(newScript)
        newScript.addEventListener('load', () => {
            resolve()
        })
        newScript.addEventListener('error', () => {
            reject()
        })
    })
}



document.addEventListener('DOMContentLoaded', () => {
    scriptLoader('https://cdn.jsdelivr.net/npm/chart.js').then(() => {
        // ya tengo disponibl la librería de las gráficas
    })
})