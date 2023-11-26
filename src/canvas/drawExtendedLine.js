/**
 * Draws an extended line on the canvas.
 * 
 * @param {CanvasRenderingContext2D} ctx - The canvas rendering context.
 * @param {number} x1 - The x-coordinate of the starting point.
 * @param {number} y1 - The y-coordinate of the starting point.
 * @param {number} x2 - The x-coordinate of the ending point.
 * @param {number} y2 - The y-coordinate of the ending point.
 * @param {number} delta - The delta value of the line.
 * @param {number} width - The width of the line.
 * @param {string} innerColor - The color of the interior of the line.
 * @param {string} outerColor - The color of the exterior of the line.
 */
function drawExtendedLine(ctx, x1, y1, x2, y2, delta, width, innerColor, outerColor) {
    ctx.save()
    ctx.beginPath()

    const
        ox1 = x1 + (x2 - x1) * -delta,
        ox2 = x1 + (x2 - x1) * (1 + delta),
        oy1 = y1 + (y2 - y1) * -delta,
        oy2 = y1 + (y2 - y1) * (1 + delta)

    ctx.beginPath()
    ctx.moveTo(ox1, oy1)
    ctx.lineTo(ox2, oy2)
    ctx.lineWidth = width
    ctx.strokeStyle = outerColor
    ctx.stroke()

    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.lineWidth = width
    ctx.strokeStyle = innerColor
    ctx.stroke()

    ctx.restore()
}