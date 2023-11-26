const canvas = document.getElementById('canvas')
canvas.width = 1000
canvas.height = 1000
const ctx = canvas.getContext('2d')


let table = 10
let lignes = 1000
let vitesse = 1
let prolongement = 10000
let largeur = 0.5
let color1 = 'white'
let color2 = 'blanchedalmond'
let animation = true


const updateCanvas = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    for (let i = 0; i < lignes; i++) {
        const line = [
            { x: Math.cos(2 * Math.PI / lignes * i), y: Math.sin(2 * Math.PI / lignes * i) },
            { x: Math.cos(2 * Math.PI / lignes * i * table), y: Math.sin(2 * Math.PI / lignes * i * table) }
        ]
        drawExtendedLine(ctx, 500 + line[0].x * 400, 500 + line[0].y * 400, 500 + line[1].x * 400, 500 + line[1].y * 400, prolongement, largeur, color1, color2)
    }

    if (animation) table += 0.01

    const tableParaph = document.getElementById('table')
    tableParaph.innerHTML = `${table.toFixed(2)}`
    const linesParaph = document.getElementById('lines')
    linesParaph.innerHTML = `${lignes}`
    const speedParaph = document.getElementById('speed')
    speedParaph.innerHTML = `${vitesse}`
    const prolongementParaph = document.getElementById('prolongement')
    prolongementParaph.innerHTML = `${prolongement}`
    const largeurParaph = document.getElementById('largeur')
    largeurParaph.innerHTML = `${largeur}`
    const color1Paraph = document.getElementById('color1')
    color1Paraph.innerHTML = `${color1}`
    const color2Paraph = document.getElementById('color2')
    color2Paraph.innerHTML = `${color2}`
    const animationParaph = document.getElementById('animation')
    animationParaph.innerHTML = `${animation}`

    setTimeout(updateCanvas, 1000 / 60 / vitesse)
}

setTimeout(updateCanvas, 1000 / 60 / vitesse)